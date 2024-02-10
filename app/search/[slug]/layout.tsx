import SearchBar from "@/components/searchBar";

export default function Layout({ children,
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="mt-12 sm:mt-32">
            <SearchBar />
            {children}
        </div>
    )
}