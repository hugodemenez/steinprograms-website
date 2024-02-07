'use client'
import { useBreakpoints } from "@/hooks/use-media-query";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button";
import PageLinks from "./pageLinks";
import { useState } from "react";
import { Menu } from "lucide-react"
export default function HamburgerMenu() {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex lg:hidden items-center" onClick={()=>setOpen(true)} asChild>
            <Button variant={"outline"}>
            <Menu />
            </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <SheetClose asChild>

                <PageLinks className="mt-24 flex-col mx-auto text-center" setOpen={setOpen}/>
                </SheetClose>
            </SheetContent>
        </Sheet>

    )
}