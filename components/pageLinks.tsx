'use client';
import { useBreakpoints } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isAuthenticated } from "./server/user";
import { Dispatch, SetStateAction } from "react";

export default function PageLinks({className, setOpen}:{className?:string, setOpen?:Dispatch<SetStateAction<boolean>>}) {
    const pathname = usePathname()
    if (useBreakpoints().isLg){
    return (
        <div className={cn("flex gap-4",className)}>
            <Link href='/news' className={pathname == '/news'?"text-green-500":""}>crypto-assets</Link>
            <Link href='/firms'>firms</Link>
            <Link href='/politics'>politics</Link>
        </div>
    );
    }
    return (
        <div className={cn("flex gap-4",className)}>
            <Link onClick={()=>{setOpen?.(false)}} href='/news' className={pathname == '/news'?"text-green-500":""}>crypto-assets</Link>
            <Link onClick={()=>{setOpen?.(false)}} href='/firms'>firms</Link>
            <Link onClick={()=>{setOpen?.(false)}} href='/politics'>politics</Link>
        </div>
    )
}