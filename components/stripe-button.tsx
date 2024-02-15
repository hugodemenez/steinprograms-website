'use client'

import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { getStripeCheckout, cancelStripeSubscription, updateStripeSubscription } from "./server/stripe"
import { updateDatabaseSubscription } from "./server/database"
import { toast } from "sonner"

export default function StripeButton({
    className,
    children,
    currentTier,
    tier,
    email,
    userId,
    priceId,
    subscriptionId
}: {
    className?: string,
    children: React.ReactNode,
    currentTier: number | undefined,
    tier: number,
    email: string,
    userId: string,
    priceId: string,
    subscriptionId: string | undefined | null
}) {

    const router = useRouter()
    // If user is already subscribed, show manage subscription button
    if (subscriptionId) {
        // Either upgrade or cancel subscription
        // We know if currentTier == tier, then user is already subscribed to this tier
        if (currentTier == tier) {
            return (
                <Button
                    className={className} size="lg"
                    onClick={async () => {
                        try{
                            const {error} = await cancelStripeSubscription(subscriptionId)
                            if (error) throw error
                            toast.success('Subscription cancelled')
                            setTimeout(()=>router.refresh(),1000) // update ui with database latest
                        }
                        catch (err:any) {
                            toast.error(`${err} mostly due to subscription already cancelled`)
                        }
                    }}
                >
                    Cancel
                </Button>
            )
        }
        return (
            <Button
                className={className} size="lg"
                onClick={async () => {
                    try {
                        const {error} = await updateStripeSubscription(subscriptionId, priceId, userId, tier)
                        if (error) throw error
                        toast.success('Subscription updated')
                        setTimeout(()=>router.refresh(),1000) // update ui with database latest
                    }
                    catch (err:any) {
                        toast.error(`${err} mostly due to subscription already cancelled`)
                    }
                }}
            >
                Upgrade
            </Button>
        )
    }
    return (
        <Button
            className={className} size="lg"
            onClick={async () => {
                const checkoutSessionUrl = await getStripeCheckout(email, userId, priceId, tier)
                if (checkoutSessionUrl) router.push(checkoutSessionUrl) // redirect to stripe checkout
            }}
        >
            {children}
        </Button>
    )
}