import { BookList } from '../../components/book-list';
import { GET_BOOKS } from '../../hooks/graphql';

const getData = async () => {
  const data = await fetch('http://localhost:4000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: GET_BOOKS.loc?.source.body,
    }),
  });
  return data.json();
};

const FetchPage = async () => {
  const data = await getData();

  return <BookList books={data.data.books} />;
};

export default FetchPage;

export const dynamic = 'force-dynamic';
