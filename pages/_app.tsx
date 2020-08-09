import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import GlobalStyles from '../styles/global-styles'

interface IProps {
  Component: React.FunctionComponent
  pageProps: any
}

// eslint-disable-next-line prettier/prettier
export default function App({ Component, pageProps }: IProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
