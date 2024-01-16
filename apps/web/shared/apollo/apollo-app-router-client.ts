import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';
import possibleTypes from './possible-types.json';

export const { getClient: getApolloAppRouterClient } = registerApolloClient(
  () => {
    return new ApolloClient({
      cache: new InMemoryCache({ possibleTypes }),
      link: new HttpLink({
        uri: 'http://localhost:4000',
        fetchOptions: { cache: 'no-store' },
      }),
    });
  }
);
