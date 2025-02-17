import {Button} from "@/components/ui/button.tsx";
import {PlusIcon} from "lucide-react";




export default function DarkButton({
    name,
    action
                                   } : {
    name: string;
    action: () => void;
}) {

    return (
        <div>
            <Button
                onClick={action}
                className="flex flex-row items-center  bg-blue-800">
                <PlusIcon />
                <span>{name}</span>
            </Button>
        </div>
    )
}