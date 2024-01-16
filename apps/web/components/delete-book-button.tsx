'use client';
import { useDeleteBook } from '../hooks/use-delete-book';

export const DeleteBookButton = ({ id }: { id: string }) => {
  const { deleteBook, isDeleting } = useDeleteBook();

  return (
    <button type="button" onClick={() => deleteBook(id)} disabled={isDeleting}>
      X
    </button>
  );
};
