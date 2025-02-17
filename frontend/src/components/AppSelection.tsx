
import * as React from "react"
import { Mail, Search, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function AppSelection() {
    const [open, setOpen] = React.useState(false);


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild className="border border-dashed bg-neutral-800 text-white">
                <Button variant="outline" className="mt-2">Search Apps</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Search Apps</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search apps..." className="pl-8" />
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-sm font-medium">Your apps</h3>
                        <div className="grid gap-2">
                            <Button

                                variant="ghost"
                                className="w-full justify-start gap-2">
                                <Mail className="h-4 w-4" />
                                Gmail
                            </Button>
                            <Button

                                variant="ghost"
                                className="w-full justify-start gap-2">
                                <Wallet className="h-4 w-4" />
                                Solana
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

