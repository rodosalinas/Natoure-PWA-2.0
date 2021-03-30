import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const Field = styled.select(
  ({ selected }: any) => `
  width: 85vw;
  padding: 12px 18px;
  border-radius: 8px;
  border: solid 1px var(--grey);
  background-color: var(--white);
  margin-left: auto;
  margin-right: auto;
  display: block;
  color: ${selected === 'default' && 'var(--dark-grey)'};
  font-family: Montserrat;
`
)

const Label = styled.div`
  position: absolute;
  top: 48px;
  left: 40px;
  color: red;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 0.04em;
  line-height: 1.66;
`

type Props = {
  name: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
  options: string[]
  onChange: (object) => void
  errorMessage: string
}

const Select = ({ name, style, options, onChange, errorMessage }: Props): JSX.Element => {
  const [error, setError] = useState(false)
  const [selected, setSelected] = useState('default')

  const handleInputs = (target) => {
    setError(target.value === 'default')
    setSelected(target.value)
    onChange!({ name: target.name, value: target.value, valid: target.value !== 'default' })
  }

  return (
    <Wrapper>
      <Field
        style={style}
        name={name}
        value={selected}
        onChange={({ target }) => handleInputs(target)}
        {...{ selected }}
      >
        <option value="default">Selecciona una opción</option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Field>
      {error && <Label>{errorMessage}</Label>}
    </Wrapper>
  )
}

export default Select

Select.defaultProps = {
  style: { marginBottom: 64 },
  onChange: (values) => console.log(values),
  errorMessage: 'Selecciona una opción válida',
}
