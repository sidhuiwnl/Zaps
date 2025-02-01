import {Router} from "express";
import {authMiddleware} from "../middleware";
import client from "../lib/db";
const router = Router();
import {signUpSchema,signInSchema} from "../types";
import jwt from "jsonwebtoken"
import {JWT_PASSWORD} from "../config";

router.post("/signup",async (req,res)=>{
   const body  = req.body;
   const parsedData = signUpSchema.safeParse(body);

   if(!parsedData.success){
       res.status(411).json({
           status:"error",
           message : "Error validating the details"
       })
   }

   const userExist = await client.user.findFirst({
       where : {
           email : body.username,
       }
   })

    if(userExist){
        res.status(411).json({
            status : "Error",
            message : "User already exist"
        })
    }

    const createdUser = await client.user.create({
        data : {
            name : parsedData.data?.username!,
            password : parsedData.data?.password!,
            email : parsedData.data?.username!,
        }

    })


    res.status(200).json({
        status:"success",
        message: "User created successfully",
    })

})


router.post("/signin",async (req,res)=>{
    const body  = req.body;
    const parsedSignInSchema = signInSchema.safeParse(body)

    if(!parsedSignInSchema.success){
        res.status(411).json({
            status:"error",
            message : "Error validating the details"
        })
    }

    const checkUser = await client.user.findFirst({
        where : {
            email : parsedSignInSchema.data?.username
        }
    })

    if(!checkUser){
        res.status(403).json({
            status:"error",
            message : "User doesn't already exist so signup"
        })
    }
    const token = jwt.sign({
        id : checkUser?.id
    }, JWT_PASSWORD)

    res.status(200).json({
        status:"success",
        message:"Successfully registered"
    })
})


router.get("/",authMiddleware,async (req,res)=>{
    //@ts-ignore
   const id = req.id

    const user = await client.user.findFirst({
        where : {
            id
        },select : {
            name : true,
            email : true,
        }
    })

    if(!user){
        res.status(411).json({
            status:"error",
            message : "User does not exist"
        })
    }
    res.status(200).json({
        status:"success",
        user: user
    })

})

export default router;