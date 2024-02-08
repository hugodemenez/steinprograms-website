'use client';
import { useState } from "react"
import { Clipboard, ClipboardCheck, ClipboardX, RefreshCcw } from 'lucide-react';
import { Button } from "./ui/button";
export default function APIKeyInput() {
    function generateAPIKey() {
        return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function(c) {
            var r = Math.random() * 16 | 0;
            return r.toString(16);
        });
    }
    const [APIKey, setAPIKey] = useState(generateAPIKey())
    const [copying, setCopying] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [copySuccess, setCopySuccess] = useState(false)

    return (
        <div className="mb-12 -mt-24 mx-12">
            <label htmlFor="account-number" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                API Key
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
                <input
                    type="text"
                    name="account-api-key"
                    id="account-api-key"
                    className="bg-background block w-full rounded-md border-0 py-1.5 pr-10 pl-2 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    readOnly
                    value={APIKey}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    {
                        (copying && copySuccess) && <p>Copied!</p>
                    }
                    {!copying ?
                        <Clipboard
                            className="cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText(APIKey)
                                    .then(() => {
                                        // The text has been successfully written to the clipboard
                                        console.log('Text successfully written to clipboard');
                                        setCopying(true)
                                        setCopySuccess(true)
                                        setTimeout(()=>{setCopying(false)},500)
                                    })
                                    .catch(err => {
                                        // There was an error trying to write the text to the clipboard
                                        console.error('Error writing text to clipboard', err);
                                        setCopying(true)
                                        setCopySuccess(false)
                                    });
                            }}
                        />
                        :
                        copySuccess ?
                            <ClipboardCheck />
                            :
                            <ClipboardX />
                    }
                    {
                        refreshing && <p>Refreshing...</p>
                    }
                    <RefreshCcw className="ml-2 cursor-pointer"
                    onClick={() =>{
                        setRefreshing(true)
                        // Refresh the API Key
                        setTimeout(()=>{
                            setRefreshing(false)
                            setAPIKey(generateAPIKey())
                        },500)
                    }}
                    />
                </div>
            </div>
        </div>
    )
}