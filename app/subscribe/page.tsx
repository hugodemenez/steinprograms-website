import APIKeyInput from '@/components/api-key-input'
import { getUser } from '@/components/server/user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CheckIcon, ClipboardIcon } from '@heroicons/react/20/solid'

const tiers = [
    {
        name: 'Student',
        id: 'tier-freelancer',
        href: '#',
        priceMonthly: '$5',
        description: 'Access to all features for school projects and learning.',
        features: ['10 requests/s', 'Access to all markets', 'Sentiment score', '12 months history'],
        mostPopular: false,
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$15',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            '1k requests/s',
            'Advanced analytics',
            '24-hour support response time',
        ],
        mostPopular: false,
    },
    {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$50',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            '10k requests/s',
            'Unlimited products',
            '1-hour, dedicated support response time',
        ],
        mostPopular: false,
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function SubscribePage() {

    const user = await getUser()
    return (
        <div className=" py-24 sm:py-32">
            {user?
            <APIKeyInput></APIKeyInput>
            :
            <></>
            }
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-green-500">Pricing</h2>
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
                                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                                'flex flex-col justify-between rounded-md p-8 ring-1 ring-gray-400 xl:p-10'
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={tier.id}
                                        className={classNames(
                                            tier.mostPopular ? 'text-green-500' : 'dark:text-gray-100 text-gray-900',
                                            'text-lg font-semibold leading-8'
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.mostPopular ? (
                                        <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-500">
                                            Most popular
                                        </p>
                                    ) : null}
                                </div>
                                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">{tier.description}</p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{tier.priceMonthly}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">/month</span>
                                </p>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    tier.mostPopular
                                        ? 'bg-green-600 text-white shadow-sm hover:bg-green-500'
                                        : 'text-green-500 ring-1 ring-inset ring-green-500 hover:ring-green-800 dark:ring-green-800 dark:hover:ring-green-100',
                                    'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600'
                                )}
                            >
                                Buy plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
