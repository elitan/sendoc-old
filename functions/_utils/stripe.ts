import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SK as string, {
  apiVersion: '2020-08-27'
})
