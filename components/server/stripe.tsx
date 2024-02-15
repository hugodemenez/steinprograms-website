'use server'
import { User } from '@supabase/supabase-js';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2023-10-16',
})

export async function getPrices() {
    const prices = await stripe.prices.list({
        active: true,
    })
    console.log(prices)
    return prices
}

export async function getStripeCheckout(email: string, userId: string, priceId: string, tier: number) {

    // Create a checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer_email: email,
        metadata: {
            userId: userId,
            tier: tier
        },
        line_items: [
            {
                price: priceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        success_url: process.env.STRIPE_REDIRECT_SUCCESS_URL,
        cancel_url: process.env.STRIPE_REDIRECT_CANCEL_URL,
    });
    return checkoutSession.url
}

export async function cancelStripeSubscription(subscriptionId: string) {
    try {
        await stripe.subscriptions.cancel(subscriptionId)
        return {}
    }
    catch (error: any) {
        return { error: error.type }
    }
}

export async function updateStripeSubscription(subscriptionId: string, newSubscriptionPriceId: string, userId: string, tier: number) {
    try {

        const subscription = await stripe.subscriptions.retrieve(subscriptionId)
        await stripe.subscriptions.update(subscriptionId, {
            items: [{
                id: subscription.items.data[0].id,
                price: newSubscriptionPriceId,
            }],
            metadata: {
                userId: userId,
                tier: tier
            },
        })
        return {}
    } catch (err: any) {
        return { error: err.type }
    }
}
