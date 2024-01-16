import { BookList } from '../../../components/book-list';
import { GET_BOOKS } from '../../../hooks/graphql';
import { getApolloAppRouterClient } from '../../../shared/apollo/apollo-app-router-client';
import {
  GetBooksQuery,
  GetBooksQueryVariables,
} from '../../../shared/generated-types/graphql';

const AppRouterSSRPage = async () => {
  const data = await getApolloAppRouterClient().query<
    GetBooksQuery,
    GetBooksQueryVariables
  >({ query: GET_BOOKS });
  if (!data.data) return <p>Empty library</p>;

  return <BookList books={data.data.books} />;
};

export default AppRouterSSRPage;
