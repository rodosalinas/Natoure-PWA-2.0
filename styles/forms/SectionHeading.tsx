import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--black);
  letter-spacing: 0.2px;
  width: 85vw;
  margin: 48px auto;
`

const SectionHeading = ({ title }: Props): JSX.Element => {
  return <Text>{title}</Text>
}

export default SectionHeading
