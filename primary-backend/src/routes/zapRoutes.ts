import {Router} from "express";
import {authMiddleware} from "../middleware";
import {zapCreateSchema} from "../types";
import {client} from "../lib/db";
import uuid4 from "uuid4";

const router = Router();


router.post("/", authMiddleware, async (req, res) => {
    // @ts-ignore
    const userid: string = req.id;
    const body = req.body;
    const parsedData = zapCreateSchema.safeParse(body);

    if (!parsedData.success) {
         res.status(411).json({
            message: "Incorrect inputs"
        });
         return
    }

    const zapId = await client.$transaction(async tx => {
        const zap = await client.zap.create({
            data: {
                id : parsedData.data.id,
                userId: parseInt(userid),
                triggerId: "",
                actions: {
                    create: parsedData.data?.actions.map((x, index) => ({
                        id : uuid4(),
                        availableActionId : x.availableActionId,
                        sortingOrder: index,
                    }))
                }
            }
        })

        const trigger = await tx.trigger.create({
            data: {
                availableTriggerId: parsedData.data?.availableTriggerId!,
                zapId: zap.id,
            }
        });

        await tx.zap.update({
            where: {
                id: zap.id
            },
            data: {
                triggerId: trigger.id
            }
        })

        return zap.id;

    },{
        timeout: 10000,
        }
    )
    res.json({
        zapId
    })
})





router.get("/",authMiddleware,async (req,res)=>{
    //@ts-ignore
    const id : string = req.id

    const zaps = await client.zap.findMany({
       where : {
           userId : parseInt(id)
       },
        include : {
           actions : {
               include : {
                   type : true
               }
           },
            trigger : {
               include : {
                   type : true
               }
            }
        }
    })



    res.json({
        status : "Success",
        data : zaps
    })

})



router.get("/:zapId",authMiddleware,async (req,res)=>{
    //@ts-ignore
    const id = req.id;
    const zapId = req.params.zapId;

    const zap  = await client.zap.findFirst({
        where: {
            userId : parseInt(id),
            id : zapId
        },
        include : {
            actions : {
                include : {
                    type : true
                }
            },
            trigger : {
                include : {
                    type : true
                }
            }
        }
    })
    res.json({
        status : "Success",
        data : zap
    })



})










export default  router