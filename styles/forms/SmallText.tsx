import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
}

const Text = styled.p`
  font-size: 14px;
  color: var(--dark-grey);
  width: 84vw;
  margin: 0 auto 12px auto;
`

const SmallText = ({ title, style }: Props): JSX.Element => {
  return <Text style={style}>{title}</Text>
}

export default SmallText
