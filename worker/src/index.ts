import {Kafka} from "kafkajs";

const kafka = new Kafka({
    clientId : "outbox-processor",
    brokers: ["localhost:9092"]
})

async function main() {
    const consumer = kafka.consumer({
        groupId : "main-worker"
    })
    await consumer.connect();

    await consumer.subscribe({
        topic : "zap-event",
        fromBeginning : true
    })

    await consumer.run({
        autoCommit : false,
        eachMessage   : async({ message,partition}) => {
            console.log({
               partition,
               offset : message.offset,
               value : message.value.toString()
            })
        await consumer.commitOffsets([{
            topic : "zap-event",
            partition : partition,
            offset : (parseInt(message.offset) + 1).toString()
        }])
    }
    })
}

main()
