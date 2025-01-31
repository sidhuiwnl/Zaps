import express from "express";

const app = express();

app.use(express.json());



app.post("/hooks/catch/:userId/:zapId",(req,res) =>{
    const { userId,zapId } = req.params;

})






app.listen(3000,() =>{
    console.log("Server is running on port 3000");
});