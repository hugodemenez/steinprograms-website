import Link from "next/link"

export default function Footer(){
    return (
        <footer className="flex z-40 max-w-5xl mx-auto h-auto items-center justify-center px-6 pb-2">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between  rounded-none shadow  dark:shadow-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">SteinPrograms</Link>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link href="/roadmap" className="mr-4 hover:underline md:mr-6 ">About</Link>
                </li>
                <li>
                    <Link href="/legalNotices" className="mr-4 hover:underline md:mr-6">Legal Notice</Link>
                </li>
                {/* <li>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </li> */}
            </ul>
            </div>
        </footer>
    )
}