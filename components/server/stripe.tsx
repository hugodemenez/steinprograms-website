'use server'
import { User } from '@supabase/supabase-js';
import Stripe from 'stripe'

function getStripeClient() {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
        return null;
    }
    return new Stripe(stripeSecretKey, {
        apiVersion: '2025-12-15.clover',
    });
}

export async function getPrices() {
    const stripe = getStripeClient();
    if (!stripe) {
        return { data: [] };
    }
    try {
        const prices = await stripe.prices.list({
            active: true,
        });
        console.log(prices);
        return prices;
    } catch (error) {
        console.warn('Failed to fetch Stripe prices:', error);
        return { data: [] };
    }
}

export async function getStripeCheckout(email: string, userId: string, priceId: string, tier: number) {
    const stripe = getStripeClient();
    if (!stripe) {
        throw new Error('Stripe is not configured');
    }

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
    const stripe = getStripeClient();
    if (!stripe) {
        return { error: 'Stripe is not configured' };
    }
    try {
        await stripe.subscriptions.cancel(subscriptionId)
        return {}
    }
    catch (error: any) {
        return { error: error.type }
    }
}

export async function updateStripeSubscription(subscriptionId: string, newSubscriptionPriceId: string, userId: string, tier: number) {
    const stripe = getStripeClient();
    if (!stripe) {
        return { error: 'Stripe is not configured' };
    }
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
