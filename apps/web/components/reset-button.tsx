import { useResetBooks } from '../hooks/use-reset-books';

export const ResetButton = () => {
  const { resetBooks, reseting } = useResetBooks();

  return (
    <button type="button" onClick={() => resetBooks()} disabled={reseting}>
      Reset
    </button>
  );
};
