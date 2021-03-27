import React from 'react'
import styled from 'styled-components'
import { FaImage } from 'react-icons/fa'

type Props = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 2px var(--green-natoure);
  border-style: dashed;
  border-radius: 8px;
  width: 85vw;
  height: 230px;
  margin-left: auto;
  margin-right: auto;
`

const Button = styled.button`
  height: 40px;
  width: 254px;
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

const Icon = styled.div`
  font-weight: normal;
  font-size: 90px;
  color: var(--green-natoure);
`

const Upload = ({ style }: Props): JSX.Element => {
  return (
    <Container style={style}>
      <Icon>
        <FaImage />
      </Icon>
      <Button>Cargar archivo</Button>
    </Container>
  )
}

export default Upload
