import React from 'react'
import styled from 'styled-components'

type Props = {
  first: string
  last: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
}

const Wrapper = styled.div`
  position: relative;
  height: 40px;
  background-color: var(--light-grey);
  width: 80px;
  padding: 0 32px;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  justify-content: flex-end;
`
const Green = styled.div`
  position: absolute;
  width: 82px;
  height: 40px;
  border-radius: 9999px;
  left: 0;
  background-color: var(--green-natoure);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
`

const Switch = ({ first, last, style }: Props): JSX.Element => {
  return (
    <Wrapper style={style}>
      <Green>{first}</Green>
      {last}
    </Wrapper>
  )
}

export default Switch
