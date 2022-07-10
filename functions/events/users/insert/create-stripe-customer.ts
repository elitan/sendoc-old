import { Request, Response } from 'express'
import { sdk } from '../../../_utils/graphql-sdk'
import { stripe } from '../../../_utils/stripe'

export default async (req: Request, res: Response) => {
  const { body } = req

  let user
  try {
    user = await sdk
      .getUser({
        id: body.event.data.new.id
      })
      .then((res) => res.user)
  } catch (error) {
    console.error(error)
    return res.status(500).send('Unable to get user')
  }

  if (!user) {
    return res.status(400).send('User not found')
  }

  try {
    await stripe.customers.create({
      name: user.displayName,
      email: user.email,
      metadata: {
        userId: user.id
      }
    })
  } catch (error) {
    console.error(error)
    return res.status(500).send('unable to create stripe customer')
  }

  res.status(204)
}
