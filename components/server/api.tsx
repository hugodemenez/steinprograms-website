'use server'

export async function getLatestNews(symbol:string){
    // await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve('resolved');
    //   }, 2000); // Delay for 2 seconds
    // });
    const result = await fetch(`http://api.steinprograms.com:5050/news?symbol=${symbol}&MAX_PAGES=1&MAX_ARTICLE=3`,{
        // Revalidate the data every 10 minutes
        next: { revalidate: 600 },
      })
    const data = await result.json()
    return data
}
