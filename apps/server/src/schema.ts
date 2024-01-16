export const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String!
    summary: String!
    author: Author!
  }

  type NewBook {
    id: ID!
    title: String!
    summary: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    booksCount: Int!
    books: [Book!]!
  }

  type Query {
    books: [Book!]!
  }

  input InsertBookInput {
    authorId: ID!
  }
  type Mutation {
    insertBook(insertBookInput: InsertBookInput!): Book!
    resetBooks: Boolean!
    deleteBook(id: ID!): Boolean!
  }

  union BookUpdatesResult = Book | NewBook
  type Subscription {
    bookUpdates: BookUpdatesResult!
  }
`;
