'use client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import possibleTypes from './possible-types.json';
import { link } from './link';

function makeClient() {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({ possibleTypes }),
    link,
  });
}

export const ApolloAppRouterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
};
