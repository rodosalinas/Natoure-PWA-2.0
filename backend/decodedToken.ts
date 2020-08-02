import jwt from 'jsonwebtoken'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const decodedToken = (
  req: { req: { headers: { authorization: string } } },
  requireAuth = true
) => {
  const header = req.req.headers.authorization

  if (header) {
    const token = header.replace('Bearer ', '')

    const decoded = jwt.verify(token, 'supersecret')
    return decoded
  }
  if (requireAuth) {
    throw new Error('Login in to access resource')
  }
  return null
}
