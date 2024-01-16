import { NormalizedCacheObject } from "@apollo/client"

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__"

export type ApolloPageProps = {
  [key: string]: unknown
  [APOLLO_STATE_PROP_NAME]?: NormalizedCacheObject
}
