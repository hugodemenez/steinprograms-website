'use client'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"


export default function SearchBar() {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="px-6 mx-auto flex w-full max-w-5xl items-center space-x-2">
            <Input placeholder="Search news for a specific asset"
                onClick={() => setOpen(true)}
            >
            </Input>
            <CommandPalet open={open} setOpen={setOpen} />
        </div>
    )
}
export function CommandPalet({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [search, setSearch] = React.useState('')
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    function validateEvent(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault()
            if (search) {
                setOpen(false)
                router.push(`/search/${search}`)
            }
        }
    }
    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput value={search} autoComplete="off" spellCheck={false} onValueChange={setSearch} onKeyDown={validateEvent} />
            <CommandList>
                <CommandEmpty>Press enter to start searching</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem
                        onSelect={() => router.push(`/search/bitcoin`)}
                    >
                        Bitcoin
                    </CommandItem>
                    <CommandItem
                        onSelect={() => router.push(`/search/ethereum`)}
                    >
                        Ethereum
                    </CommandItem>
                    <CommandItem
                        onSelect={() => router.push(`/search/solana`)}
                    >
                        Solana
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
