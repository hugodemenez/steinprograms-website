'use server'



export async function getLatestNews(symbol:string){
    console.log("Fetching news",
            `${process.env.API_DOMAIN}/news?symbol=${symbol}&summarize=true&sentiment=true`
    )
    try{
        const result = await fetch(
            `${process.env.API_DOMAIN}/news?symbol=${symbol}&summarize=true&sentiment=true`,{
                cache: 'no-store',
                // next: { revalidate: 3600 },
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': process.env.STEINPROGRAMS_API_KEY || '',
                },
            },
        )
        if (!result.ok) {
            const errorResponse = await result.json();
            throw new Error(`Error status: ${result.status}; message: ${errorResponse.detail}`);
        }
        const data = await result.json()
        return {data:data}
    }
    catch(e:any){
        console.log(e)
        return {data:[],error:e.message}
    }
}
