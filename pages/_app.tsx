import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'

interface IProps {
  Component: React.FunctionComponent
  pageProps: any
}

// eslint-disable-next-line prettier/prettier
export default function App({ Component, pageProps }: IProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
