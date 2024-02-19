import APIKeyInput from '@/components/api-key-input'
import { getPrices } from '@/components/server/stripe'
import { getUser, getUserData } from '@/components/server/database'
import StripeButton from '@/components/stripe-button'
import { CheckIcon } from '@heroicons/react/20/solid'
import { User } from '@supabase/supabase-js'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function SubscribePage() {
    const user = await getUser() as User | null
    const userData = await getUserData(user)
    // Check if user is a customer through stripe
    // If not, create a checkout session
    const subscriptionId = userData?.subscriptionId
    const prices = await getPrices()

    const tiers = [
        {
            name: 'Free',
            id: 'tier-free',
            href: '#',
            description: 'Limited access to demo features.',
            features: [
                '5 requests/min',
                'Access to BTC market',
                'Sentiment score',
                '1 week history'
            ],
            currentTier: userData?.tier == 0,
        }, {
            name: 'Starter',
            id: 'tier-starter',
            href: '#',
            priceMonthly: '$5',
            description: 'Access to all features.',
            features: [
                '10 requests/min',
                'Access to all markets',
                'Sentiment analysis',
                '12 months history'
            ],
            currentTier: userData?.tier == 1,
            nickname: "starter",
            tier: 1,
        },
        {
            name: 'Enterprise',
            id: 'tier-enterprise',
            href: '#',
            priceMonthly: '$50',
            description: 'Dedicated support and infrastructure for your company.',
            features: [
                '1000 requests/min',
                'Everything in student tier',
                '1-hour, dedicated support response time',
            ],
            currentTier: userData?.tier == 2,
            nickname: "enterprise",
            tier: 2,
        },
    ]
    return (
        <div className=" py-8 sm:py-12 flex flex-col gap-8 max-w-5xl px-6">
            {user ?
                <div className="flex flex-col gap-4">
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
                    <APIKeyInput user={user} apiKey={userData?.api_key} />
                </div>
                :
                <></>
            }
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-500">Subscription</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
                        Find the right price for your needs
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-400">
                    Our pricing plans are designed to scale with your team's growth and budget.
                    <br />
                    Enjoy transparent pricing with no hidden fees and fast access to premium features.
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:gap-x-4 lg:max-w-none lg:grid-cols-3">
                    {tiers.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={classNames(
                                tier.currentTier ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                                'flex flex-col justify-between rounded-md p-8 ring-1 ring-gray-400 xl:p-10'
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={classNames(
                                            tier.currentTier ? 'text-green-500' : 'dark:text-gray-100 text-gray-900',
                                            'text-lg font-semibold leading-8'
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.currentTier ? (
                                        <p className="rounded-full bg-gray-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-500">
                                            Current tier
                                        </p>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">{tier.description}</p>
                                {tier.priceMonthly &&
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{tier.priceMonthly}</span>
                                        <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/month</span>
                                    </p>
                                }
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {
                                (user && tier.nickname && user.email) &&
                                <StripeButton
                                    currentTier={userData?.tier}
                                    subscriptionId={subscriptionId}
                                    tier={tier.tier}
                                    email={user.email}
                                    userId={user.id}
                                    priceId={prices.data.find(price => price.nickname == tier.nickname)?.id}
                                    aria-describedby={tier.id}
                                    className={classNames(
                                        "mt-4"
                                    )}
                                />
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
