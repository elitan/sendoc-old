import { NhostClient } from "@nhost/react";

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL as string,
});

export { nhost };
