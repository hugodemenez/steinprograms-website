'use client';
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function PageLinks({className, setOpen}:{className?:string, setOpen?:Dispatch<SetStateAction<boolean>>}) {
    const pathname = usePathname()
    const pages = [
        {name: 'Crypto', path: '/crypto'},
        {name: 'Firms', path: '/firms'},
        {name: 'Politics', path: '/politics'},
    ]
    return (
        <div className={cn("flex gap-4",className)}>
            {pages.map((page, i) => {
             return <Link key={page.path} onClick={()=>{setOpen?.(false)}} href={page.path} className={pathname == page.path ?"text-green-500":"hover:text-green-700"}>{page.name}</Link>
            })}
        </div>
    )
    // There should be a dropdown menu for user settings if connect (on desktop)
    // Or a link to setting page in the hamburger on mobile, saying connected as {user.name}
    // Manage plan if already subscribe instead of subscribe
}