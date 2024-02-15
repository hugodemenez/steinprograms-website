import Link from "next/link"

export default function Footer(){
    return (
        <footer className="w-full flex justify-between sticky bottom-0 py-4   z-10 px-6">
            <div className="rounded-md w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between shadow dark:shadow-white/30 bg-background/30 backdrop-blur-md">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-200">
                © 2023 <Link href="/" className="hover:underline">SteinPrograms</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-200 sm:mt-0">
                <li>
                    <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="/legalNotices" className="mr-4 hover:underline md:mr-6">Legal Notice</Link>
                </li>
                <li>
                    <Link href="http://api.steinprograms.com:5050/redoc" className="mr-4 hover:underline md:mr-6">API</Link>
                </li>
                {/* <li>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </li> */}
            </ul>
            </div>
        </footer>
    )
}
