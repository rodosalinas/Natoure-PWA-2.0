import React from 'react'
import styled from 'styled-components'

type Props = {
  name: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
}

const Wrapper = styled.select`
  width: 85vw;
  padding: 12px 18px;
  border-radius: 8px;
  border: solid 1px var(--grey);
  background-color: var(--white);
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: var(--dark-grey);
  font-family: Montserrat;
`

const Select = ({ name, style }: Props): JSX.Element => {
  return (
    <Wrapper style={style}>
      <option selected value="value1">
        {name}
      </option>
      <option value="value1">opción 1</option>
      <option value="value1">opción 2</option>
      <option value="value1">opción 3</option>
    </Wrapper>
  )
}

export default Select
