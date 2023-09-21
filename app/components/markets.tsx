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
      const { data } = await supabase.from('marketnews').select()
      if (data && data.length > 0) {
        setMarketNews(data)
      }
      else{
        setMarketNews([
            {
                id: "1",
                label: "Welcome to SteinPrograms",
                content: "Sign up to know more about the crypto market and get the latest news."
            },
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
                <Tabs
                aria-label="Dynamic tabs"
                items={tabs}
                variant="underlined"
                radius="none"
                className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 mt-10 sm:mt-8 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                classNames={{
                    cursor: "w-full bg-blue-500",
                    tabContent: "group-data-[selected=true]:text-blue-500",
                  }}
                >
                    {(item) => (
                    <Tab key={item.id} title={item.label} className="px-0 dark:text-white " >
                        <Card className="dark:bg-black dark:text-white ring-1 ring-inset ring-white/10 dark:ring-white/30 mx-0" radius="none" >
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