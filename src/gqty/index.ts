/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */

import { createReactClient } from "@gqty/react";

import type { QueryFetcher } from "gqty";
import { createClient } from "gqty";
import { nhost } from "../utils/nhost";
import type {
  GeneratedSchema,
  SchemaObjectTypes,
  SchemaObjectTypesNames,
} from "./schema.generated";
import { generatedSchema, scalarsEnumsHash } from "./schema.generated";

const queryFetcher: QueryFetcher = async function (query, variables) {
  const authHeaders = () => {
    console.log("is authenticated?");

    console.log(nhost.auth.isAuthenticated());

    if (!nhost.auth.isAuthenticated()) {
      console.log("return here");

      return;
    }

    return {
      Authorization: `Bearer ${nhost.auth.getAccessToken()}`,
    };
  };

  // Modify "/api/graphql" if needed
  const response = await fetch(
    `${process.env.REACT_APP_NHOST_BACKEND_URL}/v1/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(),
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      mode: "cors",
    }
  );

  const json = await response.json();

  return json;
};

export const client = createClient<
  GeneratedSchema,
  SchemaObjectTypesNames,
  SchemaObjectTypes
>({
  schema: generatedSchema,
  scalarsEnumsHash,
  queryFetcher,
});

const { query, mutation, mutate, subscription, resolved, refetch, track } =
  client;

export { query, mutation, mutate, subscription, resolved, refetch, track };

const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Set this flag as "true" if your usage involves React Suspense
    // Keep in mind that you can overwrite it in a per-hook basis
    suspense: false,

    // Set this flag based on your needs
    staleWhileRevalidate: false,
  },
});

export {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
};

export * from "./schema.generated";
