"use server"

import axios from "axios";

export async function createZap({
    zapId,
    token,
                                }:{
    zapId: string;
    token: string;
}){

    const response = await axios.post(`${import.meta.env.VITE_PRIMARY_BACKEND_URL}/api/v1/zap`,{


            id : zapId,
            availableTriggerId : "solana",
            triggerMetaData : {},
            actions : [{
                "availableActionId" : "solana",
                "actionMetaData" : {}
            }]
        }
        ,{
            headers: {
                Authorization :`Bearer ${token}`,
            },
        })

    console.log(response);
}

