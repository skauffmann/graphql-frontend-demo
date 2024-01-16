import { BookFragmentFragment } from '../shared/generated-types/graphql';
import { DeleteBookButton } from './delete-book-button';
import { InsertBookButton } from './insert-book-button';
import styles from './book-list.module.css';

type BookListProps = {
  books: readonly BookFragmentFragment[];
  isEditable?: boolean;
};

export const BookList = ({ books, isEditable = false }: BookListProps) => {
  return (
    <ul className={styles.books}>
      {books.map((book) => (
        <li key={book.id}>
          <h3>
            {book.title}
            <em>
              {book.author.name}, {book.author.booksCount} books
              {isEditable && (
                <>
                  <InsertBookButton authorId={book.author.id} />
                  <DeleteBookButton id={book.id} />
                </>
              )}
            </em>
          </h3>
          <p>{book.summary}</p>
        </li>
      ))}
    </ul>
  );
};
