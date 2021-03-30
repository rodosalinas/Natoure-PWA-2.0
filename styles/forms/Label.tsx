import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto 12px auto;
  width: 88vw;
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
  font-size: 14px;
`

type Props = {
  title: string
  optional?: boolean
}

const Label = ({ title, optional }: Props): JSX.Element => {
  return (
    <Wrapper>
      {title}
      {optional && <Optional>(Opcional)</Optional>}
    </Wrapper>
  )
}

export default Label
