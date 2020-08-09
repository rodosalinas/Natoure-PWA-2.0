import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'

const Title = styled.h1`
  color: red;
`

const index: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)
  console.log(data)
  return <Title>ert </Title>
}

export default index
