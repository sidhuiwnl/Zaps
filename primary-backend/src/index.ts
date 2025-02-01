import express from "express";

const app = express();



app.use(express.json());




app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Welcome");
})




app.listen(8080,() =>{
    console.log("Server running on port 8080");
});