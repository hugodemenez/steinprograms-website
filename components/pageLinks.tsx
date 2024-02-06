'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageLinks() {
    const pathname = usePathname()
    return (
        <div className="flex gap-4">
            <Link href='/' className={pathname == '/'?"text-green-500":""}>crypto-assets</Link>
            <Link href='/firms'>firms</Link>
            <Link href='/politics'>politics</Link>
        </div>
    );
}