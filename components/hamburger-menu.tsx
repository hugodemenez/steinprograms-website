'use client'
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
import AuthenticationButton from "./authentication-button";
import { useMediaQuery } from "@/hooks/use-media-query";
export default function HamburgerMenu({ user }: { user: any }) {
    const [open, setOpen] = useState(false)

    const isDesktop = useMediaQuery("(min-width: 640px)");
    
    if (isDesktop) return null
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex sm:hidden items-center" onClick={() => setOpen(true)} asChild>
                <Button 
                variant="outline"
                >
                    <Menu />
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
                <div className="justify-around flex flex-col w-fit gap-2 text-center">
                    <SubscriptionButton className="self-center" setOpen={setOpen} user={user} />
                    {user ?
                        <p>Connected as {user.email}</p>
                        :
                        ''
                    }
                    <AuthenticationButton user={user}></AuthenticationButton>
                </div>
            </SheetContent>
        </Sheet>
    )
}