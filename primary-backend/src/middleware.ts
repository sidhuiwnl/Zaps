import {Request,Response,NextFunction} from "express";
import jwt from "jsonwebtoken";
import {JWT_PASSWORD} from "./config";

export async function authMiddleware(req : Request,res : Response, next: NextFunction){
    const authHeader = req.headers.authorization;
    const token =  authHeader?.split(" ")[1];

    if(!token){
        throw new Error("No Token provided && Unauthorized");
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