"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./ui/button";

export default function SubscriptionButton({ className, setOpen, user }: { className?: string, setOpen?: Dispatch<SetStateAction<boolean>>, user?: any }) {
        return (
                <Link href='/subscribe'
                        className={cn(
                                className
                        )}
                        onClick={() => { setOpen?.(false) }}
                >
                        <Button
                                variant='outline'
                        >

                                {user ? 'settings' : 'subscribe'}
                        </Button>
                </Link>
        );
}