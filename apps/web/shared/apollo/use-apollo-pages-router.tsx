import { useMemo } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import { APOLLO_STATE_PROP_NAME, ApolloPageProps } from './type';
import { createApolloPagesRouterClient } from './apollo-pages-router-client';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const initializeApollo = (initialState: NormalizedCacheObject | undefined) => {
  const _apolloClient = apolloClient ?? createApolloPagesRouterClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });
    _apolloClient.cache.restore(data);
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApolloPagesRouter = (pageProps?: ApolloPageProps) => {
  const state = pageProps?.[APOLLO_STATE_PROP_NAME];
  const client = useMemo(() => initializeApollo(state), [state]);
  return client;
};
