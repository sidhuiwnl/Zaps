import DarkButton from "@/components/Buttons/DarkButton.tsx";
import ZapsTable from "@/components/ZapsTable.tsx";
import  { v4 as uuid } from "uuid";

import axios from "axios";
import {useEffect, useState} from "react";



export default function DashboardMain() {
    const zapId = uuid();
    const [ token, setToken ] = useState("");
    useEffect(() => {
        const localToken =  localStorage.getItem("token");

        if(!localToken){
            return;
        }
        setToken(localToken);
    }, []);

    console.log(token);

    async function createZap(){

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
    return (
        <div className="p-4">
            <DarkButton
                name = "Create"
                action={async () =>{
                    await createZap();
                }}

            />
            <ZapsTable/>
        </div>
    )
}