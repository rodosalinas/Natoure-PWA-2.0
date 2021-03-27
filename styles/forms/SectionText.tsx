import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
}

const Text = styled.p`
  font-size: 16px;
  color: var(--black);
  letter-spacing: 0.64px;
  line-height: 24px;
  width: 85vw;
  margin-left: auto;
  margin-right: auto;
`

const SectionText = ({ title }: Props): JSX.Element => {
  return <Text>{title}</Text>
}

export default SectionText
