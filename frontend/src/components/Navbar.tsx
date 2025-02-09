
import { HelpCircle, Grid } from "lucide-react"
import {NavLink} from "react-router";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default  function Navbar() {
    return (
        <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b      px-4">
            <div className="flex items-center gap-4">
                <NavLink to="/" className="flex items-center gap-2">
                    <h1>Zaps</h1>
                </NavLink>
                <div className="hidden md:flex">
                    <Input type="search" placeholder="Search" className="h-9 w-[200px] lg:w-[300px]" />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="hidden md:flex">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Help
                </Button>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                    <Grid className="mr-2 h-4 w-4" />
                    Explore apps
                </Button>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                    Contact Sales
                </Button>
                <Button size="sm" className="hidden bg-[#5138EE] md:flex">
                    Upgrade
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 rounded-full p-0 md:h-9 md:w-9">
                    sb
                </Button>
            </div>
        </header>
    )
}

