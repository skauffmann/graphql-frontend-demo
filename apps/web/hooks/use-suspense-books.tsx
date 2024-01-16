import {
  GetBooksQuery,
  GetBooksQueryVariables,
} from '../shared/generated-types/graphql';
import { GET_BOOKS } from './graphql';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
// import { useBookUpdates } from './use-book-updates';

export const useSuspenseBooks = () => {
  const { data, error } = useSuspenseQuery<
    GetBooksQuery,
    GetBooksQueryVariables
  >(GET_BOOKS);

  // useBookUpdates();

  return { data, loading: false, error };
};
