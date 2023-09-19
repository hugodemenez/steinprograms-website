'use client';
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

interface TabProvider {
    id: string,
    label: string,
    content: string,
}


export default function MarketNews({tabs}:{tabs:Array<TabProvider>}){


    return (
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 dark:text-white">Realtime news</h2>
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