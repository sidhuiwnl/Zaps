import express from "express";
import client from "./lib/db";
const app = express();

app.use(express.json());



app.post("/hooks/catch/:userId/:zapId",async (req,res) =>{
    const body = req.body;
    const { userId,zapId } = req.params;

    await client.$transaction(async (tx) =>{
        const run = await client.zapRun.create({
            data : {
                zapId,
                metadata : body

            }
        })

        const runOutBox = await client.zapRunOutBox.create({
            data : {
                zapRunId  : run.zapId
            }
        })
    })

})






app.listen(3000,() =>{
    console.log("Server is running on port 3000");
});