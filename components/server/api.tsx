'use server'


export async function getLatestNews(symbol:string){
    try{
        const result = await fetch(`http://api.steinprograms.com:5050/news?symbol=${symbol}`,{
            // Revalidate the data every 10 minutes
            next: { revalidate: 600 },
        })
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data = await result.json()
        return {data:data}
    }
    catch(e:any){
        return {data:[],error:e.message}
    }
}
