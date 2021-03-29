import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--black);
  letter-spacing: 0.2px;
  width: 85vw;
  margin: 48px auto;
`

type Props = {
  title: string
}

const SectionHeading = ({ title }: Props): JSX.Element => {
  return <Wrapper>{title}</Wrapper>
}

export default SectionHeading
