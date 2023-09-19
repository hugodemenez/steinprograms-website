import Articles from './components/articles'
import TypeWriter from './components/typewriter'
import SubscribeNewsletter from './components/newsletter'
import MarketNews from './components/markets'


async function getData(symbol:string) {
    var res : Response
    try{
        res = await fetch(`${process.env.API_URL}/news/?password=${process.env.STEIN_API_KEY}&symbol=${symbol}`, { cache: 'no-store' })
    }
    catch(e){
        throw new Error('Failed to fetch data')
    }

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error(res.statusText)
    }
   
    return res.json()
  }
 
export default async function Home() {
    interface TabProvider {
        id: string,
        label: string,
        content: string,
    }

    const tabs = [
        {
            id: "btc",
            label: "Bitcoin",
            content: "Loading...",
        },
        {
            id: "eth",
            label: "Ethereum",
            content: "Loading...",
        }
    ] as Array<TabProvider>
    
    return (
        <>
            <div className='flex flex-col items-center h-[calc(100vh-4rem)] justify-center gap-4'>
                <svg className="logo w-48 h-48" viewBox="0 0 151 151" fill="none">
                    <line id="firstBar" x1="61.2705" y1="-10.2658" x2="-1.62191" y2="52.6266"  strokeWidth="22.1699" strokeLinecap="square"/>
                    <path id="secondBar" d="M106.998 75.3418L43.6856 75.3418" strokeWidth="22.1699" strokeLinecap="square"/>
                    <line id="thirdBar" x1="176.036" y1="74.1244" x2="84.8937" y2="165.266" strokeWidth="22.1699" strokeLinecap="square"/>
                </svg>
                <TypeWriter text="Trading innovation"></TypeWriter>
            </div>
            <SubscribeNewsletter></SubscribeNewsletter>
            <MarketNews tabs={tabs}></MarketNews>
            <Articles></Articles>
        </>
    )
}
