import { gql, useSubscription } from '@apollo/client';
import {
  BookUpdatesSubscription,
  BookUpdatesSubscriptionVariables,
} from '../shared/generated-types/graphql';
import { BookFragment, NewBookFragment } from './graphql';

export const useBookUpdates = () => {
  const { data, loading, error } = useSubscription<
    BookUpdatesSubscription,
    BookUpdatesSubscriptionVariables
  >(BOOK_UPDATES, {
    // onData: ({ client, data }) => {
    //   const cache = client.cache;
    //   if (isNewBook(data.data?.bookUpdates)) {
    //     const newBook: NewBook = data.data.bookUpdates;
    //     cache.writeFragment({
    //       id: `Book:${newBook.id}`,
    //       fragment: BookFragment,
    //       data: { ...newBook, __typename: 'Book' },
    //     });
    //     cache.modify({
    //       fields: {
    //         books(existingBooks = []) {
    //           const bookRef = cache.identify({
    //             id: newBook.id,
    //             __typename: 'Book',
    //           });
    //           return [...existingBooks, { __ref: bookRef }];
    //         },
    //       },
    //     });
    //   }
    // },
  });

  return { data, loading, error };
};

export const BOOK_UPDATES = gql`
  subscription BookUpdates {
    bookUpdates {
      ... on Book {
        id
        summary
      }
      ... on NewBook {
        ...NewBookFragment
      }
    }
  }
  ${NewBookFragment}
`;

type NewBook = Extract<
  Required<BookUpdatesSubscription['bookUpdates']>,
  { __typename: 'NewBook' }
>;
const isNewBook = (
  bookUpdates?: BookUpdatesSubscription['bookUpdates']
): bookUpdates is NewBook => {
  return bookUpdates?.__typename === 'NewBook';
};
