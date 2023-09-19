'use client';

import Script from "next/script";


export default function TyperWriter(props: {text: string}) {
    return (
            <div className='relative h-12'>
                <h1 className='typer text-3xl font-mono uppercase text-center opacity-0 text-black dark:text-white'>
                    {props.text}
                </h1>
                <h1 className='blinker text-4xl uppercase text-center absolute right-0 bottom-0 translate-x-2 opacity-0 transition text-black dark:text-white -translate-y-3'>
                |
                </h1>
                <Script src="/typewriter.js" onReady={()=>{
                    const typer = document.querySelector(".typer") as HTMLElement | null;
                    const blinker = document.querySelector(".blinker") as HTMLElement | null;
                    const typerText = typer?.textContent ?? '';

                    // Defining timings
                    var previousDelay = 0;
                    const startingTime = 1000; // in milli-seconds
                    const maxDelay = 300; // in milli-seconds
                    const minDelay = 50; // in milli-seconds

                    // This allows to put the content for search engine optimization
                    if (typer && blinker) {
                        typer.textContent = "";
                        // Removes opacity 0
                        typer.classList.remove("opacity-0");
                        blinker.classList.remove("opacity-0");
                        setTimeout(() => {
                            for (let i = 0; i < typerText.length; i++) {
                                const delay = Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay;
                                setTimeout(() => {
                                    typer.append(typerText[i]);
                                }, delay + previousDelay);
                                previousDelay += delay;
                            }
                            setTimeout(() => {
                                setInterval(() => {
                                    blinker.classList.toggle("opacity-0");

                                }, 500);
                            }, previousDelay);
                        }, startingTime);
                    }
                    }
                }/>
            </div>
    )
}