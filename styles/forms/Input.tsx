import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  placeholder: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
  onChange?: (object) => void
  errorMessage: string
}

const Wrapper = styled.input`
  width: calc(85vw - 36px);
  height: 18px;
  padding: 12px 18px;
  border-radius: 8px;
  border: solid 1px var(--grey);
  background-color: var(--white);
  margin-left: auto;
  margin-right: auto;
  display: block;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--dark-grey);
    font-family: Montserrat;
  }
`

const Input = ({ placeholder, style, onChange, errorMessage }: Props): JSX.Element => {
  const [isValid, setIsValid] = useState(false)

  const handleInputs = (target) => {
    onChange({ name: target.name, value: target.value, valid: isValid })
  }

  return (
    <>
      <Wrapper
        style={style}
        placeholder={placeholder}
        onChange={({ target }) => handleInputs(target)}
      />
    </>
  )
}

export default Input

Input.defaultProps = {
  style: { marginBottom: 64 },
  errorMessage: 'Este campo no puede estar vacío',
}
