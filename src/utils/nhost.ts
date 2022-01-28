import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL as string,
});

export { nhost };
