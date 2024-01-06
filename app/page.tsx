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
            <section id="how" className='dark:text-white'>
                <h1 className='font-semibold text-3xl pt-8 pb-4 border-b-1 mb-4 border-gray-600'>How is it working ?</h1>
                <div className=' leading-6 dark:text-gray-300 text-gray-900'>
                    <ul>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>Step 1: Comprehensive Data Gathering</h1>
                            Our algorithm scours the vast landscape of the internet, meticulously gathering news and insights from diverse, reliable sources. We leave no stone unturned, ensuring you have access to the latest developments in the cryptocurrency world. 
                        </li>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>Step 2: Analyzing Market Influence</h1>
                            Cryptocurrency markets are driven by an intricate web of factors, from news events to social media trends. Our algorithm goes beyond the surface, identifying the key influencers that impact market behavior. By harnessing the power of data analytics, we uncover the hidden forces at play.
                        </li>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>Step 3: Sentiment Analysis</h1>
                            Not all news is created equal. Our algorithm employs a state-of-the-art, large language model, trained on extensive market data, to assess the sentiment of news articles and social media chatter. It can distinguish between positive and negative sentiments with unrivaled accuracy.
                        </li>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>Step 4: Empowering Your Decision-Making</h1>
                            Knowledge is power, and with our algorithm, you gain access to real-time insights that can shape your cryptocurrency investment strategy. Whether you're a seasoned trader or a novice investor, our platform equips you with the tools to make informed decisions.
                        </li>
                    </ul>
                </div>
            </section>
            <section id="why" className='dark:text-white'>
                <h1 className='font-semibold text-3xl pt-8 pb-4 border-b-1 mb-4 border-gray-600'>Why Choose Us:</h1>
                <div className='leading-6 dark:text-gray-300 text-gray-900'>
                    <ul>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>Accuracy: </h1>
                            Our algorithm is fine-tuned to deliver precise and reliable information, ensuring you have the most accurate insights at your fingertips.
                        </li>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>Timeliness: </h1>
                            Cryptocurrency markets move fast. Our real-time data updates keep you ahead of the curve, allowing you to seize opportunities as they arise.
                        </li>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>User-Friendly Interface:</h1>
                            We've designed our platform with you in mind. It's intuitive and user-friendly, making it accessible to both experts and newcomers.
                        </li>
                        <li>
                            <h1 className='font-semibold pt-6 text-xl'>Empowering Investors:</h1>
                            Our mission is to empower you with the knowledge and tools needed to thrive in the world of cryptocurrency. Whether you're looking to capitalize on short-term trends or hold for the long term, we've got you covered.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
