import DarkButton from "@/components/Buttons/DarkButton.tsx";
import ZapsTable from "@/components/ZapsTable.tsx";
import  { v4 as uuid } from "uuid";
import {useNavigate} from "react-router";
import axios from "axios";



export default function DashboardMain() {
    const zapId = uuid();
    const navigate = useNavigate();

    localStorage.setItem("zapId", zapId);

    async function createZap(){
        const response = await axios.post(`${import.meta.env.VITE_PRIMARY_BACKEND_URL}/api/v1/route`,{
            body : JSON.stringify({
                id : zapId,
                triggerName : "",
                isActive : true,
                createdAt : Date.now(),
                actions : [{
                    zapid : zapId,
                    actionName : "",

                }]


            })
        })

        console.log(response);
    }
    return (
        <div className="p-4">
            <DarkButton
                name = "Create"
                action={async () =>{
                    await createZap();
                    navigate(`/editor/${zapId}`);
                }}

            />
            <ZapsTable/>
        </div>
    )
}