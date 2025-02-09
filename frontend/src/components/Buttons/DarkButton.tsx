import {Button} from "@/components/ui/button.tsx";
import {PlusIcon} from "lucide-react";

export default function DarkButton() {
    return (
        <div>
            <Button className="flex flex-row items-center space-x-2 bg-blue-800">
                <PlusIcon />
                <span>Create</span>
            </Button>
        </div>
    )
}