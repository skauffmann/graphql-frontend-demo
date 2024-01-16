import { useQuery } from '@apollo/client';
import {
  GetBooksQuery,
  GetBooksQueryVariables,
} from '../shared/generated-types/graphql';
import { GET_BOOKS } from './graphql';
// import { useBookUpdates } from './use-book-updates';

export const useBooks = () => {
  const { data, error } = useQuery<GetBooksQuery, GetBooksQueryVariables>(
    GET_BOOKS
  );

  // useBookUpdates();

  return { data, loading: false, error };
};
