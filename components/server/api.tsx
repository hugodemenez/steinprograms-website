'use server'



export async function getLatestNews(symbol:string){
    try{
        const result = await fetch(
            `http://api.steinprograms.com:5050/news?symbol=${symbol}&summarize=true`,{
                next: { revalidate: 3600 },
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: process.env.STEINPROGRAMS_API_KEY
                }), 
            },
        )
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
