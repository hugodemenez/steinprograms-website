import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import * as React from "react";

export default function ConnectButton({ setOpen, className }: { setOpen: React.Dispatch<React.SetStateAction<boolean>>, className: string }) {
    return (
        <Button
            className={cn(
                "rounded-md ring-1  ring-green-500 bg-green-500 px-3.5 py-2.5 text-sm  text-gray-100 dark:text-black shadow-sm hover:bg-green-600 dark:hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
                , className
            )}
            onClick={() => setOpen(true)}
        >
            connect
        </Button>
    )
}