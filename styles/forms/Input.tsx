import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div(
  ({ textarea, error }: any) => `
  position: relative;
  input, textarea {
    font-family: Montserrat;
    width: calc(85vw - 38px);
    margin-left: auto;
    margin-right: auto;
    height: ${textarea ? '96px' : '18px'};
    padding: 12px 18px;
    border-radius: 8px;
    border: solid 1px ${error ? 'red' : 'var(--grey)'};
    background-color: var(--white);
    display: block;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: var(--dark-grey);
      font-family: Montserrat;
    }
  }
`
)

const Label = styled.div(
  ({ textarea }: any) => `
  position: absolute;
  top: ${textarea ? '126px' : '48px'};
  left: 40px;
  color: red;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 0.04em;
  line-height: 1.66;
`
)

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
  placeholder: string
  name: string
  onChange: (object) => void
  errorMessage: string
  textarea: boolean
  number: boolean
}

const Input = ({
  style,
  placeholder,
  name,
  onChange,
  errorMessage,
  textarea,
  number,
}: Props): JSX.Element => {
  const Tag = textarea ? 'textarea' : 'input'

  const [error, setError] = useState(false)

  const handleInputs = (target) => {
    setError(false)
    onChange!({ name: target.name, value: target.value, valid: target.value.length > 0 })
  }

  return (
    <Wrapper {...{ textarea, error }}>
      <Tag
        style={style}
        type={number ? 'number' : 'text'}
        name={name}
        placeholder={placeholder}
        onChange={({ target }) => handleInputs(target)}
        onBlur={({ target }) => setError(target.value.length < 1)}
      />
      {error && <Label {...{ textarea }}>{errorMessage}</Label>}
    </Wrapper>
  )
}

export default Input

Input.defaultProps = {
  style: { marginBottom: 64 },
  errorMessage: 'Este campo no puede estar vacío.',
  onChange: (values) => console.log(values),
  textarea: false,
  number: false,
}
