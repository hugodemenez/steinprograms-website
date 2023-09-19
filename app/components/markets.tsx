'use client';
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'



function getMarketNews() {
  const [marketNews, setMarketNews] = useState<any[]>([])

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient()

  useEffect(() => {
    const getMarketNews = async () => {
      // This assumes you have a `todos` table in Supabase. Check out
      // the `Create Table and seed with data` section of the README 👇
      // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
      const { data } = await supabase.from('marketnews').select()
      if (data && data.length > 0) {
        setMarketNews(data)
      }
      else{
        setMarketNews([
            {
                id: "1",
                label: "Bitcoin",
                content: "Recent news in the BTC crypto market includes upgrades to SHIB partner Welly's, analysis of BTC price using the Stock-to-Flow Model, Nomura launching an institutional Bitcoin fund, and the influence of Binance and SEC on Bitcoin price volatility. Bitcoin dominance is rising, and there are predictions for Bitcoin price in the coming years. Global investment bank Nomura is also entering the Bitcoin market. Additionally, there are reports of Elon Musk's financial plans for Twitter."
            },
            {
                id: "2",
                label: "More...",
                content: "Sign up to know more about the crypto market and get the latest news on the crypto market."
            }
        ])
      }
    }

    getMarketNews()
  }, [supabase, setMarketNews])

  return marketNews
}




interface TabProvider {
    id: string,
    label: string,
    content: string,
}





export default function MarketNews(){
    const tabs = getMarketNews() as Array<TabProvider>
    console.log(tabs)
    return (
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="flex items-baseline gap-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 dark:text-white">
                    Realtime news
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                </h2>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                    Powered by SteinPrograms
                </p>
                <Tabs aria-label="Dynamic tabs" items={tabs} className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 mt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
                    {(item) => (
                    <Tab key={item.id} title={item.label} className="px-0" >
                        <Card className="dark:bg-black dark:text-white ring-1 ring-inset ring-white/10 dark:ring-white/30 mx-0">
                        <CardBody>
                            {item.content}
                        </CardBody>
                        </Card>  
                    </Tab>
                    )}
                </Tabs>
            </div>
    )
}