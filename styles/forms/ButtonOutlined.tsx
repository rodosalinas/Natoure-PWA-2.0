import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = { text: string; style: object }

const Button = styled.div`
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

const Upload = ({ text, style }: Props): JSX.Element => {
  return <Button style={style}>{text}</Button>
}

export default Upload
