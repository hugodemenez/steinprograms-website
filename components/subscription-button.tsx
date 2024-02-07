"use client";
import { useBreakpoints } from "@/hooks/use-media-query";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SubscriptionButton() {
    const breakpoint = useBreakpoints();
    if (breakpoint.isLg) {
        return (
            <Button  className="rounded-md border-1  border-green-500 px-3.5 py-2.5 text-sm bg-transparent text-black dark:text-white hover:bg-green-100 dark:hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700">
                <Link href='/subscribe'>subscribe</Link>
                
            </Button>
        );
    }
}