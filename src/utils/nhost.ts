import { NhostClient } from '@nhost/react'

const params = {
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN as string,
  region: process.env.REACT_APP_NHOST_REGION as string
}

console.log({ params })

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN as string,
  region: process.env.REACT_APP_NHOST_REGION as string
})

export { nhost }
