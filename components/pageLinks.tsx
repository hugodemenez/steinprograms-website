'use client';
import { useBreakpoints } from "@/hooks/use-media-query";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageLinks() {
    const pathname = usePathname()
    if (useBreakpoints().isLg){
    return (
        <div className="flex gap-4">
            <Link href='/news' className={pathname == '/news'?"text-green-500":""}>crypto-assets</Link>
            <Link href='/firms'>firms</Link>
            <Link href='/politics'>politics</Link>
        </div>
    );
    }
}