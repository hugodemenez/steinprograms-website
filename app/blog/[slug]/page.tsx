
export default async function Blog({ params }:{params:any}) {
    // fetch database with blog content using : params.slug as identifier
    
    return (
        <div className="px-6 mx-auto max-w-5xl">
            <h1 className="text-lg font-bold ">Blog</h1>
            <p>{}</p>
        </div>
    );
  }