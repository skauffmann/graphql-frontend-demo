import { gql, useMutation } from '@apollo/client';
import {
  InsertBookMutation,
  InsertBookMutationVariables,
} from '../shared/generated-types/graphql';
import { BookFragment } from './graphql';

export const useInsertBook = () => {
  const [insertBookMutation, { loading, error }] = useMutation<
    InsertBookMutation,
    InsertBookMutationVariables
  >(INSERT_BOOK);

  const handleInsertBook = async (authorId: string) => {
    insertBookMutation({
      variables: { insertBookInput: { authorId } },
      refetchQueries: ['GetBooks'],
      // optimisticResponse: {
      //   __typename: 'Mutation',
      //   insertBook: {
      //     __typename: 'Book',
      //     id: 'temp-id',
      //     title: '...',
      //     summary: '......',
      //     author: {
      //       __typename: 'Author',
      //       id: authorId,
      //       name: '...',
      //       booksCount: 0,
      //     },
      //   },
      // },
      // update: (cache, { data }) => {
      //   cache.modify({
      //     fields: {
      //       books(existingBooks = []) {
      //         if (data?.insertBook === undefined) return existingBooks;
      //         const bookRef = cache.identify(data.insertBook);
      //         return [...existingBooks, { __ref: bookRef }];
      //       },
      //     },
      //   });
      // },
    });
  };

  return { insertBook: handleInsertBook, inserting: loading, error };
};

export const INSERT_BOOK = gql`
  mutation InsertBook($insertBookInput: InsertBookInput!) {
    insertBook(insertBookInput: $insertBookInput) {
      ...BookFragment
    }
  }
  ${BookFragment}
`;
