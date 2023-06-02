const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
}

type Query {
    user: [User]
    user(username: String!): User
    books(bookId: String!): [Book]
}

type Mutation {
    createUser(username: String!, email: String!, password: String!, savedBooks: [Book]): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: String, description: String!, bookId: String!, image: String, link: String, title: String!): User
    removeBook(bookId: String!): User
}

type Auth {
    token: ID!
    user: User
}
`;



