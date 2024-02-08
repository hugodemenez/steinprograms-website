"use client";
import { useBreakpoints } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

export default function SubscriptionButton({className, setOpen, user}: {className?: string, setOpen?:Dispatch<SetStateAction<boolean>>, user?:any}) {
        console.log('user', user)
        return (
            <Button  className={cn(
                "rounded-md border-1  border-green-500 px-3.5 py-2.5 text-sm bg-transparent text-black dark:text-white hover:bg-green-100 dark:hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700",
                className
                )}
                onClick={()=>{setOpen?.(false)}}
            >
                <Link href='/subscribe'>{user?'manage':'subscribe'}</Link>
            </Button>
        );
}