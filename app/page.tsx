import Link from 'next/link'

export default async function Home() {
    return (
        <div className="py-6 lg:py-24 px-6">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-600 dark:hover:ring-gray-700">
                    Announcing our next roadmap for 2024.{' '}
                    <Link 
                        href="/roadmap"
                        className="font-semibold text-blue-500"
                    >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
            <div className="text-center">
                <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-300">
                    Unlocking the Secrets of Cryptocurrency Markets
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">
                    Welcome to the future of cryptocurrency investment and decision-making. In an era where information is power, our cutting-edge algorithm brings you a strategic advantage like never before. 
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/news"
                        className="rounded-none bg-blue-100/50 dark:bg-blue-900/50 px-3.5 py-2.5 text-sm  text-blue-600 shadow-sm hover:bg-blue-200/50 dark:hover:bg-blue-900/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                        Get started
                    </Link>
                </div>
            </div>
            <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            September 2023
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            V0.0.0 public release
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Published the first working version of the web-app. Making Stein Programs&apos;produced news available to anyone.
                        </p>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                            Learn more 
                            <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Decemeber 2023</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Annual report analyzer</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">We plan to make our annual report algorithm analyzer available to the public by the end of 2023.</p>
                    </li>
                    <li className="ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2024</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trading Algorithm</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">As we are developing all those news interpreter for automated trading purposes, we plan to publish our results in realtime on the website in early 2024.</p>
                    </li>
                </ol>
            </div>
        </div>
    )
}
