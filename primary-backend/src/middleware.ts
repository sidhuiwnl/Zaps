import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";
import {JWT_PASSWORD} from "./config";

export async function authMiddleware(req : Request,res : Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    const token =  authHeader?.split(" ")[1];

    if(!token){
        res.status(401).send("No token provided");
        return;

    }

    try{
        const payload  = jwt.verify(token,JWT_PASSWORD);
        //@ts-ignore
        req.id = payload.id
        next()
    }catch(err){
        res.status(401).json({
            error: "Unauthorized"
        })
    }

}