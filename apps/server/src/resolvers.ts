import { faker } from '@faker-js/faker';


enum BookType {
  NOVEL = 'NOVEL',
  MANGA = 'MANGA',
}

const books = [
  { id: faker.string.uuid(), title: '1984', summary: faker.lorem.sentences(), authorId: '40116b5e-083c-4307-a34f-5880a50bb7d4', type: BookType.NOVEL },
  { id: faker.string.uuid(), title: 'Dune', summary: faker.lorem.sentences(), authorId: 'e4b8d1c0-0e2c-4b6c-9a5d-1b7c6a6e1a4e', type: BookType.NOVEL },
];
const originalBooks = structuredClone(books)
type Book = typeof books[0];

const authors = [
  { id: '40116b5e-083c-4307-a34f-5880a50bb7d4', name: 'George Orwell' },
  { id: 'e4b8d1c0-0e2c-4b6c-9a5d-1b7c6a6e1a4e', name: 'Frank Herbert' },
  { id: 'a0b0b0b0-0e2c-4b6c-9a5d-1b7c6a6e1a4e', name: 'Isaac Asimov' },
  { id: '4a8dd7e3-e9fb-493b-922e-aa02d27338d1', name: 'Aldous Huxley' },
  { id: '6b383df4-7331-4483-8a3d-d7ddbbb0b2b1', name: 'Ray Bradbury' },
  { id: '450a8cd9-ae98-438f-a46b-7f4445eea586', name: 'Philip K. Dick' },
  { id: '755084d7-0d4b-4273-b4d2-2b89d97af787', name: 'Eiichiro Oda' },
  { id: '5433e463-faa2-428f-aed1-f5ec3eacb72f', name: 'Masashi Kishimoto' },
  { id: '4cf8779a-e1c3-4b0a-a266-dd4ce081ce34', name: 'Tite Kubo' },
]
type Author = typeof authors[0]

const createNewBook = (authorId?: string, shouldSave = true) => {
  const book = {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    summary: faker.lorem.sentences(),
    authorId: authorId ?? faker.helpers.arrayElement(authors).id,
    type: faker.helpers.arrayElement(Object.values(BookType)) as BookType
  }
  if (shouldSave) books.push(book)
  return book
}
const updateRandomBook = (shouldSave = true) => {
  const book = shouldSave ? faker.helpers.arrayElement(books) : structuredClone(faker.helpers.arrayElement(books))
  book.summary = faker.lorem.sentences()
  return book
}

export const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    insertBook: async (_: never, { insertBookInput: { authorId } }: { insertBookInput: { authorId: string } }) => {
      await sleep(1000)
      const newBook = createNewBook(authorId)
      return newBook
    },
    resetBooks: () => {
      books.splice(0)
      books.push(...structuredClone(originalBooks))
      return true
    },
    deleteBook: (_: never, { id }: { id: string }) => {
      const index = books.findIndex(book => book.id === id)
      if (index === -1) return false
      books.splice(index, 1)
      return true
    }
  },
  Book: {
    author: ({ authorId }: Book) => authors.find(({ id }) => id === authorId)
  },
  NewBook: {
    author: ({ authorId }: Book) => authors.find(({ id }) => id === authorId)
  },
  Author: {
    books: ({ id }: Author) => books.filter(({ authorId }) => authorId === id),
    booksCount: ({ id }: Author) => books.filter(({ authorId }) => authorId === id).length
  },
  Subscription: {
    bookUpdates: {
      subscribe: () => {
        return {
          async *[Symbol.asyncIterator]() {
            while (true) {
              await sleep(1000)
              const isNewBook = faker.datatype.boolean()
              if (isNewBook) {
                yield {
                  bookUpdates: { ...createNewBook(undefined, false), __typename: 'NewBook' }
                }
                continue
              }
              const updatedBook = updateRandomBook(false)
              yield { bookUpdates: { ...updatedBook, __typename: 'Book' } }
            }
          }
        }
      }
    }
  }
};

const sleep = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms))
