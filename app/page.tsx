import Articles from './components/articles'
import TypeWriter from './components/typewriter'
import SubscribeNewsletter from './components/newsletter'
import MarketNews from './components/markets'

 
export default async function Home() {
    
    return (
        <>
            <div className='logo-container flex flex-col items-center h-[calc(100vh-4rem)] justify-center gap-4 transition-all'>
                <svg className="logo w-48 h-48" viewBox="0 0 151 151" fill="none">
                    <line id="firstBar" x1="61.2705" y1="-10.2658" x2="-1.62191" y2="52.6266"  strokeWidth="22.1699" strokeLinecap="square"/>
                    <path id="secondBar" d="M106.998 75.3418L43.6856 75.3418" strokeWidth="22.1699" strokeLinecap="square"/>
                    <line id="thirdBar" x1="176.036" y1="74.1244" x2="84.8937" y2="165.266" strokeWidth="22.1699" strokeLinecap="square"/>
                </svg>
                <TypeWriter text="Stein Programs"></TypeWriter>
            </div>
            {/* <SubscribeNewsletter></SubscribeNewsletter> */}
            <MarketNews></MarketNews>
            <Articles></Articles>
        </>
    )
}
