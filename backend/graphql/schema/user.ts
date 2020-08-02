import { gql } from 'apollo-server-micro'

export default gql`
  extend type Query {
    getAllUsers: [User!]
    getUser(_id: ID!): User
  }

  type Token {
    token: String!
  }

  extend type Mutation {
    signup(data: UserCreateInput!): Token!
    login(data: UserLoginInput!): Token!
  }

  input UserCreateInput {
    email: String!
    firstName: String!
    password: String!
  }
  input UserLoginInput {
    email: String!
    password: String!
  }

  type User {
    _id: ID
    bio: String
    phone: String
    email: String
    photo: String
    gender: String
    birthday: Date
    country: String
    lastName: String
    password: String
    firstName: String
    bloodType: String
  }
`
