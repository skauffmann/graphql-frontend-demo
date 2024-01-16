import { ApolloPageProps } from '../shared/apollo/type';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useApolloPagesRouter } from '../shared/apollo/use-apollo-pages-router';
import '../components/globals.css';

export default function MyApp({
  Component,
  pageProps,
}: AppProps<ApolloPageProps>) {
  const apolloClient = useApolloPagesRouter(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
