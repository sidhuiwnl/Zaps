import {Button} from "@/components/ui/button.tsx";
import {PlusIcon} from "lucide-react";

import  { v4 as uuid } from "uuid";
import {useNavigate} from "react-router";

export default function DarkButton() {
    const navigate = useNavigate();
    return (
        <div>
            <Button
                onClick={() =>{
                   navigate(`/editor/${uuid()}`);
                }}
                className="flex flex-row items-center  bg-blue-800">
                <PlusIcon />
                <span>Create</span>
            </Button>
        </div>
    )
}