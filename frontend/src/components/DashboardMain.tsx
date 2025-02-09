import DarkButton from "@/components/Buttons/DarkButton.tsx";
import ZapsTable from "@/components/ZapsTable.tsx";

export default function DashboardMain() {
    return (
        <div className="p-4">
            <DarkButton/>
            <ZapsTable/>
        </div>
    )
}