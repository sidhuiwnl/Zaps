import express from "express";
import cors from "cors"
const app = express();
import dotenv from "dotenv";

dotenv.config();

import userRoutes from "./routes/userRoutes";
import zapRoutes from "./routes/zapRoutes";

app.use(cors());
app.use(express.json());




app.use("/api/v1/user",userRoutes)
app.use("/api/v1/zap",zapRoutes)



app.listen(8080,() =>{
    console.log("Server running on port 8080");
});