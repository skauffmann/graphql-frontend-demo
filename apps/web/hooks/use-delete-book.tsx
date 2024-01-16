import { gql, useMutation } from '@apollo/client';
import {
  DeleteBookMutation,
  DeleteBookMutationVariables,
} from '../shared/generated-types/graphql';

export const useDeleteBook = () => {
  const [mutate, { loading }] = useMutation<
    DeleteBookMutation,
    DeleteBookMutationVariables
  >(DELETE_BOOK, {
    refetchQueries: ['GetBooks'],
  });

  const handleDeleteBook = async (id: string) => {
    await mutate({
      variables: { id },
      // update: (cache) => {
      //   cache.evict({ id: `Book:${id}` });
      // },
    });
  };
  return {
    isDeleting: loading,
    deleteBook: handleDeleteBook,
  };
};

const DELETE_BOOK = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id)
  }
`;
