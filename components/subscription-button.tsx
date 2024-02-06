"use client";
import { useBreakpoints } from "@/hooks/use-media-query";
import { Button } from "./ui/button";

export default function SubscriptionButton() {
    const breakpoint = useBreakpoints();
    if (breakpoint.isLg) {
        return (
            <Button className="rounded-none border-1  border-green-500 px-3.5 py-2.5 text-sm bg-transparent text-black dark:text-white hover:bg-green-500/10 dark:hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700">
                subscribe
            </Button>
        );
    }
}