import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.p`
  font-size: 16px;
  color: var(--black);
  letter-spacing: 0.64px;
  line-height: 24px;
  width: 85vw;
  margin-left: auto;
  margin-right: auto;
`

type Props = {
  title: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
}

const SectionText = ({ title, style }: Props): JSX.Element => {
  return <Wrapper style={style}>{title}</Wrapper>
}

export default SectionText
