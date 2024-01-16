import BooksViewQueryNode, {
  BooksViewQuery,
} from '../../shared/relay/__generated__/BooksViewQuery.graphql';
import loadSerializableQuery from '../../shared/relay/load-serializable-query';
import BooksViewClientComponent from './BooksView';

const Page = async () => {
  const preloadedQuery = await loadSerializableQuery<
    typeof BooksViewQueryNode,
    BooksViewQuery
  >(BooksViewQueryNode.params, {});

  return (
    <div>
      <BooksViewClientComponent preloadedQuery={preloadedQuery} />
    </div>
  );
};

export default Page;

export const revalidate = 0;
