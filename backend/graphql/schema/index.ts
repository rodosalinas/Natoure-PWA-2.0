import { gql } from 'apollo-server-micro'

import noteSchema from './note'
import customSchema from './custom'
import userSchema from './user'

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [linkSchema, noteSchema, userSchema, customSchema]
