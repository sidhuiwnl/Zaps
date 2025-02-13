import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Zaps} from "@/types/Types.ts";
import {useNavigate} from "react-router";


type Props =  {
    zaps : Zaps[]
}

export default function ZapsTableComp(props : Props) {
    const navigate = useNavigate();
    console.log(props.zaps)
    const Zaps = props.zaps;
    return (
        <Table>
            <TableCaption>A list of your recent Zaps</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px] text-black">Name</TableHead>
                    <TableHead className="text-black">Apps</TableHead>
                    <TableHead className="text-black">Last Modified</TableHead>
                    <TableHead className="text-black">Status</TableHead>
                    <TableHead className="text-black">Owner</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>

                    {Zaps.map((zap) => (
                        <TableRow

                            key={zap.id}
                            className="cursor-pointer hover:bg-[#F5ECD5] rounded-lg"
                            onClick={() => navigate(`/edit-zaps/${zap.id}`)}
                        >
                            <TableCell>Untitled zap</TableCell>
                            <TableCell className="flex space-x-2">
                                {zap.actions.map((action, index) => (
                                    <span key={index} className="block">
                                    {action.type.name}
                                </span>
                                ))}
                            </TableCell>

                            <TableCell></TableCell>
                            <TableCell>Active</TableCell>
                            <TableCell>{zap.userId}</TableCell>
                        </TableRow>
                    ))}


            </TableBody>
        </Table>

    )
}