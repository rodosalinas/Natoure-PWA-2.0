import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
`

const Cta = styled.button(
  ({ unable }: any) => `
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
  opacity: ${unable ? '0.6' : '1'}
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
  text: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
  onClick?: () => void
  errorMessage: string
  unable: boolean
}

const Button = ({ text, style, onClick, errorMessage, unable }: Props): JSX.Element => {
  const [error, setError] = useState(false)

  const handleClick = () => {
    if (unable) {
      setError(true)
    } else {
      onClick()
    }
  }

  useEffect(() => {
    setError(false)
  }, [unable])

  return (
    <Wrapper>
      <Cta style={style} onClick={handleClick} {...{ unable }}>
        {text}
      </Cta>
      {error && <Label>{errorMessage}</Label>}
    </Wrapper>
  )
}

export default Button

Button.defaultProps = {
  style: { marginBottom: 96 },
  unable: false,
  text: 'Continuar',
  errorMessage: 'Completa el formulario para continuar',
}
