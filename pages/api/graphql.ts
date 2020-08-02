import { ApolloServer } from 'apollo-server-micro'
import { getConnection } from '../../backend/database'

import typeDefs from '../../backend/graphql/schema'
import resolvers from '../../backend/graphql/resolvers'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async (req) => {
    const dbConn = await getConnection()

    return { dbConn, req }
  },
  playground: true,
  introspection: true,
})

export default apolloServer.createHandler({ path: '/api/graphql' })

export const config = {
  api: {
    bodyParser: false,
  },
}
