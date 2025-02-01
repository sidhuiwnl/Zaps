import {Router} from "express";
import {authMiddleware} from "../middleware";


const router = Router();


router.post("createZap",(req,res)=>{
    console.log(req.body)
})

router.get("/",authMiddleware,(req,res)=>{
    console.log(req.body)
})

router.get("/:zapId",authMiddleware,(req,res)=>{
    console.log(req.body)
})

export default  router