import { Request, Response } from 'express'
import { sdk } from '../../../_utils/graphql-sdk'
import { stripe } from '../../../_utils/stripe'

export default async (req: Request, res: Response) => {
  const { body } = req

  const user = await sdk
    .getUser({
      id: body.event.data.new.id
    })
    .then((res) => res.user)

  if (!user) {
    return res.status(400).send('User not found')
  }

  if (user.profile?.stripeCustomerId) {
    console.log(JSON.stringify(user, null, 2))
    return res.status(200).send('User already has a stripe customer attached')
  }

  // create stripe customer
  const stripeCustomer = await stripe.customers.create({
    name: user.displayName,
    email: user.email,
    metadata: {
      userId: user.id
    }
  })

  // insert profile into database
  await sdk.InsertProfile({
    profile: {
      id: user.id,
      stripeCustomerId: stripeCustomer.id
    }
  })

  // create free subscription
  const STRIPE_FREE_PRICE = 'price_1LKgnPG2E1BZzWw1flyCoimy'
  await stripe.subscriptions.create({
    customer: stripeCustomer.id,
    items: [
      {
        price: STRIPE_FREE_PRICE
      }
    ],
    off_session: true
  })

  res.sendStatus(204)
}
