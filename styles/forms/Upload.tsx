import React, { useState } from 'react'
import styled from 'styled-components'
import { BsCardImage } from 'react-icons/bs'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px var(--green-natoure);
  border-style: dashed;
  border-radius: 8px;
  width: calc(85vw - 4px);
  height: 230px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

const Button = styled.label`
  padding: 10.5px 18px;
  width: 160px;
  background-color: var(--blue);
  border: none;
  border-radius: 8px;
  color: var(--white);
  font-family: Roboto;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  color: #ffffff;
`

const Input = styled.input`
  opacity: 0;
  position: absolute;
  bottom: 38px;
  height: 40px;
  width: 196px;
`

const Icon = styled.div`
  font-weight: normal;
  font-size: 90px;
  color: var(--green-natoure);
`

const Label = styled.div`
  position: absolute;
  top: 236px;
  left: 16px;
  color: red;
  font-size: 12px;
  font-family: Roboto;
  letter-spacing: 0.04em;
  line-height: 1.66;
`

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
  name: string
  onChange: (object) => void
  errorMessage: string
}

const Upload = ({ style, name, onChange, errorMessage }: Props): JSX.Element => {
  const [error, setError] = useState(false)

  const handleInputs = (target) => {
    setError(false)
    onChange!({ name: target.name, value: target.files, valid: target.files.length > 0 })
  }

  return (
    <Wrapper style={style}>
      <Icon>
        <BsCardImage />
      </Icon>
      <Button htmlFor="#upload">Cargar archivo</Button>
      <Input
        id="upload"
        type="file"
        name={name}
        multiple
        onChange={({ target }) => handleInputs(target)}
        onBlur={({ target }) => setError(target.files.length < 1)}
      />
      {error && <Label>{errorMessage}</Label>}
    </Wrapper>
  )
}

export default Upload

Upload.defaultProps = {
  style: { marginTop: 12, marginBottom: 64 },
  onChange: (values) => console.log(values),
  errorMessage: 'No se eligió ningún archivo.',
}
