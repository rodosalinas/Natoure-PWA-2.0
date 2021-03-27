import React from 'react'
import styled from 'styled-components'

type Props = {
  text: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
  href?: string
}

const Wrapper = styled.a`
  height: 40px;
  width: 85vw;
  background-color: var(--green-natoure);
  border: none;
  border-radius: 8px;
  color: var(--white);
  font-family: Roboto;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
`

const Button = ({ text, style, href }: Props): JSX.Element => {
  return (
    <Wrapper style={style} href={href}>
      {text}
    </Wrapper>
  )
}

export default Button
