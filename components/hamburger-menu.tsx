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
import SubscriptionButton from "./subscription-button";
export default function HamburgerMenu({user}:{user:any}) {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex lg:hidden items-center" onClick={() => setOpen(true)} asChild>
                <Button variant={"outline"}>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-24 items-center">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <SheetClose asChild>
                    <PageLinks className="flex-col text-center" setOpen={setOpen} />
                </SheetClose>
                <div className="flex flex-col w-fit gap-2">
                {user?
                <p>Connected as {user.email}</p>
                :
                ''
            }
                <SubscriptionButton className="self-center" setOpen={setOpen} user={user}/>
                </div>
            </SheetContent>
        </Sheet>
    )
}