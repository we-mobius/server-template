import { ApolloServer, gql } from 'apollo-server'
import { useApolloServerDriver } from 'MobiusServer'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }
  type Author {
    name: String
  }
  type Hello {
    world: String
  }
  type Query {
    hello: Hello
    books: [Book]
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    hello: () => ({
      world: () => 'Hello world! from /v1/graphql handler!'
    }),
    books: () => books
  }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers, introspection: true })

export const apolloServerDriver = useApolloServerDriver({ apolloServer: server }, {})
