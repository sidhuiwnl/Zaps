import {useEffect, useState} from "react";
import axios from "axios";
import {Zaps} from "@/types/Types.ts";
import ZapsTableComp from "@/components/ZapsTableComp.tsx";

export default function ZapsTable() {
    const [zaps,setZaps] = useState<Zaps[] | null>(null)
    async function getAllZaps(){
        const token = localStorage.getItem("token");
        console.log(token);
        const zaps = await axios.get(`${import.meta.env.VITE_PRIMARY_BACKEND_URL}/api/v1/zap`,{
            headers : {
                Authorization: `Bearer ${token}`
            }
        })
        setZaps(zaps.data.data)

    }

    useEffect(() => {
         getAllZaps();

    }, []);
    return (
        <div className="mt-7">
            { zaps && <ZapsTableComp zaps={zaps}/> }
        </div>
    )
}