import { Request, Response } from 'express'
import { stripe } from '../../../_utils/stripe'

type Profile = {
  id: string
  stripe_customer_id: string
}

export default async (req: Request, res: Response) => {
  const { body } = req

  const profile = body.event.data.old as Profile

  if (!profile.stripe_customer_id) {
    return res.status(200).send('profile has no stripe customer id attached')
  }

  // delete stripe customer
  await stripe.customers.del(profile.stripe_customer_id)

  res.sendStatus(204)
}
