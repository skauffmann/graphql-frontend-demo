import { render, screen } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { Books } from '../books';
import { GET_BOOKS } from '../../hooks/graphql';
import { GetBooksQuery } from '../../shared/generated-types/graphql';

const mockQueryResult: GetBooksQuery = {
  books: [
    {
      id: '1',
      title: 'Harry Potter and the Chamber of Secrets',
      summary: 'The second book in the Harry Potter series',
      author: {
        id: '1',
        name: 'J.K. Rowling',
        booksCount: 2,
        __typename: 'Author',
      },
      __typename: 'Book',
    },
    {
      id: '2',
      title: 'Jurassic Park',
      summary: 'A cautionary tale about genetic engineering',
      author: {
        id: '2',
        name: 'Michael Crichton',
        booksCount: 1,
        __typename: 'Author',
      },
      __typename: 'Book',
    },
  ],
};

const mock: MockedResponse = {
  request: {
    query: GET_BOOKS,
  },
  result: {
    data: mockQueryResult,
  },
};

describe('<Books />', () => {
  it('should render successfully', async () => {
    const { debug } = render(
      <MockedProvider mocks={[mock]} addTypename={true}>
        <Books />
      </MockedProvider>
    );

    await expect(
      screen.findByText('Harry Potter and the Chamber of Secrets')
    ).toBeInTheDocument();
  });
});
