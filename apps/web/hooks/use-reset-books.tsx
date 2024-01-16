import { gql, useMutation } from '@apollo/client';
import {
  ResetBooksMutation,
  ResetBooksMutationVariables,
} from '../shared/generated-types/graphql';

export const useResetBooks = () => {
  const [resetBooks, { loading }] = useMutation<
    ResetBooksMutation,
    ResetBooksMutationVariables
  >(RESET_BOOKS, {
    refetchQueries: ['GetBooks'],
  });

  return { resetBooks, reseting: loading };
};

const RESET_BOOKS = gql`
  mutation ResetBooks {
    resetBooks
  }
`;
