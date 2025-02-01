import { PrismaClient } from "@prisma/client"
import {Kafka} from "kafkajs";
const client = new PrismaClient();

const kafka = new Kafka({
    clientId : "outbox-processor",
    brokers: ["localhost:9092"]
})



async function main(){

    const producer = kafka.producer()

    await producer.connect()

    while (true){
        const pendingRows = await client.zapRunOutBox.findMany({
            where: {},
            take: 10,
        })

        console.log(pendingRows)

        producer.send({
                topic : "zap-event",
                messages : pendingRows.map(r => ({
                    value : r.zapRunId
                }))
            })

        await client.zapRunOutBox.deleteMany({
            where : {
               id : {
                   in : pendingRows.map(r => r.id)
               }
            }
        })


        await new Promise(resolve => setTimeout(resolve, 5000))

    }
}

main()