import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 40px;
  width: 280px;
  border: 2px solid var(--green-natoure);
  border-radius: 8px;
  color: var(--green-natoure);
  font-family: Roboto;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = { text: string; style: object }

const ButtonOutlined = ({ text, style }: Props): JSX.Element => {
  return <Wrapper style={style}>{text}</Wrapper>
}

export default ButtonOutlined
