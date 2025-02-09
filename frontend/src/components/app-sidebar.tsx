

import {
    Home,
    Compass,
    Zap,
    Table2,
    Layout,
    MessageSquareMore,
    PaintbrushIcon as Canvas,
    Bot,
    AppWindowIcon as Apps,
    History,
    MoreHorizontal,
} from "lucide-react"
import {NavLink} from "react-router";

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import {Progress} from "@/components/ui/progress.tsx";

const sidebarItems = [
    {
        title: "Home",
        icon: Home,
        href: "#",
    },
    {
        title: "Discover",
        icon: Compass,
        href: "#",
    },
    {
        title: "Zaps",
        icon: Zap,
        href: "#",
        active: true,
    },
    {
        title: "Tables",
        icon: Table2,
        href: "#",
    },
    {
        title: "Interfaces",
        icon: Layout,
        href: "#",
    },
    {
        title: "Chatbots",
        icon: MessageSquareMore,
        href: "#",
        badge: "Beta",
    },
    {
        title: "Canvas",
        icon: Canvas,
        href: "#",
        badge: "Beta",
    },
    {
        title: "Agents",
        icon: Bot,
        href: "#",
        badge: "Beta",
    },
    {
        title: "Apps",
        icon: Apps,
        href: "#",
    },
    {
        title: "Zap History",
        icon: History,
        href: "#",
    },
    {
        title: "More",
        icon: MoreHorizontal,
        href: "#",
    },
]

export function Sidebar() {
    return (
        <div className="flex w-[240px] flex-col border-r ">
            <div className="p-4">
                <Button className="w-full bg-[#FF4F00] text-white hover:bg-[#FF4F00]/90">Create</Button>
            </div>
            <ScrollArea className="flex-1">
                <nav className="grid gap-1 px-2">
                    {sidebarItems.map((item) => (
                        <NavLink
                            key={item.title}
                            to={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#F5ECD5]",
                                item.active && "bg-[#F5ECD5]",
                            )}
                        >
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                            {item.badge && <span className="ml-auto rounded bg-muted px-1 text-xs">{item.badge}</span>}
                        </NavLink>
                    ))}
                </nav>
            </ScrollArea>
            <div className="border-t p-4">
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Free Plan</span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Tasks</span>
                            <span>0 / 100</span>
                        </div>
                        <Progress value={0} className="h-1" />
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Zaps</span>
                            <span>Unlimited</span>
                        </div>
                        <div className="text-xs text-muted-foreground">Usage resets in 2 weeks</div>
                        <Button variant="link" className="h-auto p-0 text-xs text-blue-600">
                            Manage plan
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

