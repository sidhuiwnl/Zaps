import {Sidebar} from "@/components/app-sidebar.tsx";
import Navbar from "@/components/Navbar.tsx";

import DashboardMain from "@/components/DashboardMain.tsx";



export default function Dashboard(){

    return(
        <div className="flex h-screen w-screen overflow-hidden ">
            <Sidebar />
            <div className="flex flex-1 flex-col">
                <Navbar />
                <DashboardMain/>
            </div>
        </div>

    )
}