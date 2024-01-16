'use client';
import { ResetButton } from './reset-button';
import { useSuspenseBooks } from '../hooks/use-suspense-books';
import { BookList } from './book-list';

export const RCCBooks = () => {
  const { data, loading, error } = useSuspenseBooks();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>
        Books ({data?.books.length})<ResetButton />
      </h1>
      {data && <BookList books={data.books} isEditable={true} />}
    </div>
  );
};
