'use client';

import {
  RelayEnvironmentProvider,
  graphql,
  PreloadedQuery,
  usePreloadedQuery,
} from 'react-relay';
import BooksViewQueryNode, {
  BooksViewQuery,
} from '../../shared/relay/__generated__/BooksViewQuery.graphql';
import { SerializablePreloadedQuery } from '../../shared/relay/load-serializable-query';
import useSerializablePreloadedQuery from '../../shared/relay/use-serializable-preloaded-query';
import { getCurrentEnvironment } from '../../shared/relay/environment';
import { Suspense } from 'react';
import { BookList } from '../../components/book-list';

const query = graphql`
  query BooksViewQuery {
    books {
      id
      title
      summary
      author {
        id
        name
        booksCount
      }
    }
  }
`;

const BooksViewClientComponent = (props: {
  preloadedQuery: SerializablePreloadedQuery<
    typeof BooksViewQueryNode,
    BooksViewQuery
  >;
}) => {
  const environment = getCurrentEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery
  );

  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="Loading...">
        <BooksView queryRef={queryRef} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

function BooksView(props: { queryRef: PreloadedQuery<BooksViewQuery> }) {
  const data = usePreloadedQuery(query, props.queryRef);

  return <BookList books={data.books} />;
}

export default BooksViewClientComponent;
