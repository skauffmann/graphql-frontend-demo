import { gql } from "@apollo/client";

export const BookFragment = gql`
fragment BookFragment on Book {
  id
  title
  summary
  author {
    id
    name
    booksCount
  }
}`

export const NewBookFragment = gql`
fragment NewBookFragment on NewBook {
  id
  title
  summary
  author {
    id
    name
    booksCount
  }
}`


export const GET_BOOKS = gql`
  query GetBooks {
    books {
      ...BookFragment
    }
  }
  ${BookFragment}
`;
