'use client';
import { ResetButton } from './reset-button';
import { useBooks } from '../hooks/use-books';
import { BookList } from './book-list';

export const Books = ({ isEditable }: { isEditable?: boolean }) => {
  const { data, loading, error } = useBooks();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>
        Books ({data?.books.length})<ResetButton />
      </h1>
      {data && <BookList books={data.books} isEditable={isEditable} />}
    </div>
  );
};
