import { ApolloClient, InMemoryCache } from "@apollo/client";
import { link } from './link';
import possibleTypes from './possible-types.json';

export const createApolloPagesRouterClient = () => new ApolloClient({
  link,
  cache: new InMemoryCache({ possibleTypes }),
});
