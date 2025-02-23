import DarkButton from "@/components/Buttons/DarkButton.tsx";
import ZapsTable from "@/components/ZapsTable.tsx";
import  { v4 as uuid } from "uuid";
import {createZap} from "../../server/queries.ts";
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


    return (
        <div className="p-4">
            <DarkButton
                name = "Create"
                action={async () =>{
                    await createZap({ zapId,token});
                }}

            />
            <ZapsTable/>
        </div>
    )
}