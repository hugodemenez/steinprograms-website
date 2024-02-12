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
import { Search } from "lucide-react";


export default function SearchBar() {
    const [open, setOpen] = React.useState(false)
    return (
        <div className="max-w-5xl">
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                </div>
                <input
                    className="bg-background block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search news for a specific asset"
                    onClick={() => setOpen(true)}
                />
                <CommandPalet open={open} setOpen={setOpen} />
            </div>
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
