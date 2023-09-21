import Link from "next/link"

export default function Footer(){
    return (
        <footer className="flex z-40 max-w-5xl mx-auto h-auto items-center justify-center px-6 pb-2">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between bg-white rounded-lg shadow dark:bg-black dark:border dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">SteinPrograms</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                <Link href="legalNotices" className="hover:underline">Legal Notice</Link>
                    <a href="#" className="mr-4 hover:underline md:mr-6"></a>
                </li>
                <li>
                    <Link href="contact" className="hover:underline">Contact</Link>
                </li>
            </ul>
            </div>
        </footer>
    )
}