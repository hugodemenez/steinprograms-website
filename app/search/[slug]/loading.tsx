import SearchBar from "@/components/search-bar"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="mx-auto divide-y gap-8 mt-16">
            <div className="h-full flex flex-col gap-4 py-4 ">
                <Skeleton className="mt-2 h-12 w-full rounded-lg" />
                <Skeleton className="h-4 w-32"/>
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-4 w-16"/>
            </div>
        </div>
    )
}