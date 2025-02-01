import express from "express";
import client from "./lib/db";
const app = express();

app.use(express.json());



app.post("/hooks/catch/:userId/:zapId",async (req,res) =>{
    const body = req.body;

    const { userId,zapId } = req.params;
    console.log(zapId);

    await client.$transaction(async (tx) =>{

        const run = await tx.zapRun.create({
            data : {
                zapId :zapId,
                metadata : body

            }
        })

        const runOutBox = await tx.zapRunOutBox.create({
            data : {
                zapRunId  : run.id
            }
        })


    })
    res.json({
        status:"Webhook success",
    })

})






app.listen(3000,() =>{
    console.log("Server is running on port 3000");
});