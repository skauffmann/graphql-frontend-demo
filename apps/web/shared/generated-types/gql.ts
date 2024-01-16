/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nfragment BookFragment on Book {\n  id\n  title\n  summary\n  author {\n    id\n    name\n    booksCount\n  }\n}": types.BookFragmentFragmentDoc,
    "\nfragment NewBookFragment on NewBook {\n  id\n  title\n  summary\n  author {\n    id\n    name\n    booksCount\n  }\n}": types.NewBookFragmentFragmentDoc,
    "\n  query GetBooks {\n    books {\n      ...BookFragment\n    }\n  }\n  \n": types.GetBooksDocument,
    "\n  subscription BookUpdates {\n    bookUpdates {\n      ... on Book {\n        id\n        summary\n      }\n      ... on NewBook {\n        ...NewBookFragment\n      }\n    }\n  }\n  \n": types.BookUpdatesDocument,
    "\n  mutation DeleteBook($id: ID!) {\n    deleteBook(id: $id)\n  }\n": types.DeleteBookDocument,
    "\n  mutation InsertBook($insertBookInput: InsertBookInput!) {\n    insertBook(insertBookInput: $insertBookInput) {\n      ...BookFragment\n    }\n  }\n  \n": types.InsertBookDocument,
    "\n  mutation ResetBooks {\n    resetBooks\n  }\n": types.ResetBooksDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment BookFragment on Book {\n  id\n  title\n  summary\n  author {\n    id\n    name\n    booksCount\n  }\n}"): (typeof documents)["\nfragment BookFragment on Book {\n  id\n  title\n  summary\n  author {\n    id\n    name\n    booksCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment NewBookFragment on NewBook {\n  id\n  title\n  summary\n  author {\n    id\n    name\n    booksCount\n  }\n}"): (typeof documents)["\nfragment NewBookFragment on NewBook {\n  id\n  title\n  summary\n  author {\n    id\n    name\n    booksCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBooks {\n    books {\n      ...BookFragment\n    }\n  }\n  \n"): (typeof documents)["\n  query GetBooks {\n    books {\n      ...BookFragment\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription BookUpdates {\n    bookUpdates {\n      ... on Book {\n        id\n        summary\n      }\n      ... on NewBook {\n        ...NewBookFragment\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  subscription BookUpdates {\n    bookUpdates {\n      ... on Book {\n        id\n        summary\n      }\n      ... on NewBook {\n        ...NewBookFragment\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteBook($id: ID!) {\n    deleteBook(id: $id)\n  }\n"): (typeof documents)["\n  mutation DeleteBook($id: ID!) {\n    deleteBook(id: $id)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation InsertBook($insertBookInput: InsertBookInput!) {\n    insertBook(insertBookInput: $insertBookInput) {\n      ...BookFragment\n    }\n  }\n  \n"): (typeof documents)["\n  mutation InsertBook($insertBookInput: InsertBookInput!) {\n    insertBook(insertBookInput: $insertBookInput) {\n      ...BookFragment\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResetBooks {\n    resetBooks\n  }\n"): (typeof documents)["\n  mutation ResetBooks {\n    resetBooks\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;