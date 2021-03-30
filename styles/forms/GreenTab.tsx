import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
}

const Wrapper = styled.div`
  color: white;
  width: calc(90vw - 29px);
  background-color: var(--green-natoure);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
  padding: 24px 16px;
  display: block;
`

const GreenTab = ({ title, style }: Props): JSX.Element => {
  return <Wrapper style={style}>{title}</Wrapper>
}

export default GreenTab

GreenTab.defaultProps = {
  style: { marginBottom: 64 },
}
