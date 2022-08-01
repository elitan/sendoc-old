import { NhostClient } from '@nhost/react'

const params = {
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN as string,
  region: import.meta.env.VITE_NHOST_REGION as string
}

const nhost = new NhostClient(params)

export { nhost }
