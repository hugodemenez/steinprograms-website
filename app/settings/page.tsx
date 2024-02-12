import APIKeyInput from "@/components/api-key-input";
import { getUser, getUserData } from "@/components/server/user";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function SettingsPage() {
    const user = await getUser()
    const userData = await getUserData(user)
    return (
        <div className=" py-24 sm:py-32 px-5 max-w-5xl flex flex-col gap-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-100">
                    Email
                </label>
                <div className="mt-2 relative rounded-md shadow-sm">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-background block w-full rounded-md border-0 py-1.5 pr-10 pl-2 text-gray-900 dark:text-gray-100 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                        readOnly
                        value={user?.email}
                    />
                </div>
            </div>
            <APIKeyInput user={user} apiKey={userData.api_key} />
            <p>Current plan : {
                (() => {
                    switch (userData.tier) {
                        case 0:
                            return 'Free';
                        case 1:
                            return 'Tier 2';
                        case 2:
                            return 'Tier 3';
                        default:
                            return 'Unknown';
                    }
                })()
            }
            </p>
            <Link href="/subscribe">
                <Button>Upgrade plan</Button>
            </Link>
        </div>
    )
}