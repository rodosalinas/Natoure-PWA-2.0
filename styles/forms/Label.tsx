import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  optional?: boolean
}

const Text = styled.div`
  margin: 0 auto 12px auto;
  width: 90vw;
  padding-left: 10px;
  color: var(--black);
  &::before {
    content: '';
    margin-left: -10px;
    width: 4px;
    height: 17px;
    background-color: var(--green-natoure);
    position: absolute;
    border-radius: 3px;
  }
`

const Optional = styled.span`
  padding-left: 10px;
  color: var(--green-natoure);
  font-weight: bold;
`

const Label = ({ title, optional }: Props): JSX.Element => {
  return (
    <Text>
      {title}
      {optional && <Optional>( Opcional )</Optional>}
    </Text>
  )
}

export default Label
