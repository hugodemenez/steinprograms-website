'use client'

import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { getStripeCheckout, cancelStripeSubscription, updateStripeSubscription } from "./server/stripe"
import { updateDatabaseSubscription } from "./server/database"
import { toast } from "sonner"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function StripeButton({
    className,
    currentTier,
    tier,
    email,
    userId,
    priceId,
    subscriptionId
}: {
    className?: string,
    currentTier: number | undefined,
    tier: number,
    email: string,
    userId: string,
    priceId: string | undefined,
    subscriptionId: string | undefined | null
}) {

    if (!priceId) return null
    const router = useRouter()
    // If user is already subscribed, show manage subscription button
    if (subscriptionId) {
        // Either upgrade or cancel subscription
        // We know if currentTier == tier, then user is already subscribed to this tier
        if (currentTier == tier) {
            return (
                <AlertDialog>
                    <AlertDialogTrigger
                        className={className}
                        asChild
                    >
                        <Button
                            variant='outline'
                        >
                            Cancel
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently cancel your subscription
                                and remove your data from our servers. You'll loose access to all features right away.
                                We are working on a way to keep your subscription until the end of billing period.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={async () => {
                                    try {
                                        const { error } = await cancelStripeSubscription(subscriptionId)
                                        if (error) throw error
                                        toast.success('Subscription cancelled')
                                        setTimeout(() => router.refresh(), 1000) // update ui with database latest
                                    }
                                    catch (err: any) {
                                        toast.error(`${err} mostly due to subscription already cancelled`)
                                    }
                                }}
                            >Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>

            )
        }
        return (
            // Should trigger a model to confirm upgrade
            <AlertDialog>
                <AlertDialogTrigger
                    className={className}
                    asChild
                >
                    <Button>
                        Upgrade
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently upgrade your subscription
                            and charge your card with raminings of the new subscription.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={async () => {
                                try {
                                    const { error } = await updateStripeSubscription(subscriptionId, priceId, userId, tier)
                                    if (error) throw error
                                    toast.success('Subscription updated')
                                    setTimeout(() => router.refresh(), 1000) // update ui with database latest
                                }
                                catch (err: any) {
                                    toast.error(`${err} mostly due to subscription already cancelled`)
                                }
                            }}
                        >
                            Continue
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        )
    }
    return (
        <Button
            className={className}
            onClick={async () => {
                const checkoutSessionUrl = await getStripeCheckout(email, userId, priceId, tier)
                if (checkoutSessionUrl) router.push(checkoutSessionUrl) // redirect to stripe checkout
            }}
        >
            Buy plan
        </Button>
    )
}