export default function Badge({type="neutral"}: {type:string}) {
      switch(type){
        case "neutral":
            return(
            <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-400/20">
            neutral
            </span>
            )
        case "negative":
            return(
            <span className="inline-flex items-center rounded-md bg-red-400/10 px-2 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-400/20">
                negative
            </span>
            )
        case "positive":
            return(
            <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
                positive
            </span>
            )
      }
  }