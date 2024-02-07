import Link from 'next/link'
import Image from 'next/image'
import Chart from '@/components/chart'
export default async function Home() {
    return (
        <div className="py-6 lg:py-24 px-6">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-300 dark:ring-gray-600 dark:hover:ring-gray-700">
                    Announcing our next roadmap for 2024.{' '}
                    <Link
                        href="#roadmap"
                        className="font-semibold text-green-500"
                    >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col min-h-screen justify-around'>
                <div className="text-center ">
                    <h1 className=" uppercase text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-300">
                        Unlocking the <span className='text-green-500 underline'>Secrets</span> of Cryptocurrency Markets
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-500">
                        Welcome to the future of cryptocurrency investment and decision-making. In an era where information is power, our cutting-edge algorithm brings you a strategic advantage like never before.
                    </p>
                </div>
                <Chart data={null} />
            </div>
            <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32" id='roadmap'>
                <ol className="relative border-l border-gray-300 dark:border-gray-700">
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            September 2023
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            V0
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            First version of SteinPrograms website, with ability to read news produced by the algorithm.
                        </p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            January 2024
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Realtime News API
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Scrapping news in realtime from various sources.
                            Ability to search for specific topic and get the latest news about it.
                        </p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            February 2024
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            News Interpreter
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            We will start to interpret news with our algorithm, and provide a sentiment score for each news.
                            This will be the first step to provide a trading signal based on news.
                        </p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            March 2024
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Trading
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            As first version of our algorithm will be ready, we will start to train it with machine learning to improve its performance.
                        </p>
                    </li>
                    <li className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            September 2024
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Sharing Pool
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            We are developing all those algorithms to take profits from market anomalies. We are willing to share the potential yield as we grow.
                            With a larger trading pool, we will be able to improve yield as it will reduce the impact of fees.
                        </p>
                    </li>
                </ol>
            </div>
        </div>
    )
}
