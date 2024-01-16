import { GetServerSideProps } from 'next';
import { Books } from '../../components/books';
import { createApolloPagesRouterClient } from '../../shared/apollo/apollo-pages-router-client';
import { addApolloState } from '../../shared/apollo/ssr';
import { ApolloPageProps } from '../../shared/apollo/type';
import PageRouterLayout from '../../components/page-router-layout';
import { GET_BOOKS } from '../../hooks/graphql';

export default function PageRouter() {
  return (
    <PageRouterLayout>
      <Books isEditable={true} />
    </PageRouterLayout>
  );
}

export const getServerSideProps: GetServerSideProps<
  ApolloPageProps
> = async () => {
  const apolloClient = createApolloPagesRouterClient();
  await apolloClient.query({ query: GET_BOOKS });
  return addApolloState(apolloClient);
};
