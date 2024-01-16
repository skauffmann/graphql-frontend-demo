import { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import { APOLLO_STATE_PROP_NAME, ApolloPageProps } from "./type"
import { GetServerSidePropsResult } from "next"


export const addApolloState = async (client: ApolloClient<NormalizedCacheObject>, serverSidepropsResult: GetServerSidePropsResult<ApolloPageProps> = { props: {} }) => {
  if ('props' in serverSidepropsResult) {
    const props = await serverSidepropsResult.props
    props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    return { ...serverSidepropsResult, props }
  }
  return serverSidepropsResult
}
