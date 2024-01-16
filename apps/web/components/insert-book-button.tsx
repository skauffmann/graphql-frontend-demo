'use client';
import { useInsertBook } from '../hooks/use-insert-book';

export const InsertBookButton = ({ authorId }: { authorId: string }) => {
  const { insertBook, inserting } = useInsertBook();

  return (
    <button
      type="button"
      onClick={() => insertBook(authorId)}
      disabled={inserting}
    >
      +1
    </button>
  );
};
