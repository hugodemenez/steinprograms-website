import SearchBar from "@/components/search-bar";

export default function Layout({ children,
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="mt-12 sm:mt-32 max-w-5xl px-6">
            <SearchBar />
            {children}
        </div>
    )
}