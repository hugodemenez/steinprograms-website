'use client';
import { useSearchParams } from "next/navigation"


export default function Otp(){
    const searchParams = useSearchParams()
    const email = searchParams.get('email')

    return (
        <div className="h-screen">
            <form 
            id="otp-form"
            className="flex justify-center flex-col gap-2 items-center"
            action="/auth/valid-otp"
            method="post">
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="rounded-md px-4 py-2 bg-inherit border mb-6 dark:text-white text-black dark:bg-white dark:border-black max-w-5xl w-fit"
                    placeholder="if your email adress is missing, please enter it here"
                    defaultValue={email?email:""}
                />
                <label htmlFor="otp" className="text-black dark:text-white">Enter OTP code</label>
                <div className="flex justify-center items-center bg-gray-100 dark:bg-gray-900 p-2">
                    <input
                        type="otp"
                        name="otp"
                        id="otp"
                        autoComplete="one-time-code"
                        className="bg-transparent  appearance-none caret-blue-500 border-none ring-focus  focus:outline-none focus:ring-0 text-left flex-1 dark:text-white" 
                        placeholder="XXXXXX"
                    />
                    <button type="submit">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=" stroke-gray-500">
                            <path d="M7.75 12H16.25M16.25 12L13 15.25M16.25 12L13 8.75"></path>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}