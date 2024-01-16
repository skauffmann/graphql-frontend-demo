import { ApolloLink, createHttpLink, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

export const httpLink = createHttpLink({ uri: 'http://localhost:4000' });

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:4000',
    retryAttempts: Infinity,
    keepAlive: 10_000,
    shouldRetry: () => true,
    connectionParams: async () => {
      return {
        // add auth token here if needed
        // headers: { Authorization: `JWT ${jwtToken}` },
      };
    },
  }));


const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  wsLink,
  httpLink
);

export const link = ApolloLink.from([splitLink]);
