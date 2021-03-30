import styled from 'styled-components'
import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'

export interface ExperieceElement {
  title: string
  description: string
  name: string
  poblacion: string
}

const Card = styled.section`
  * {
    margin: 0;
    padding: 0;
  }
  margin-top: 20px;
  margin-bottom: 70px;
  width: 100vw;
  height: auto;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  .firstDiv {
    display: flex;
    justify-content: left;
    align-items: center;
    color: white;
    text-align: left;
    height: 64px;
    width: 90vw;
    background-color: #06bc68;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-bottom: 20px;
  }
  & p {
    margin-left: 10px;
    font-weight: bold;
  }

  .dashedContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 2px #06bc68;
    border-style: dashed;
    border-radius: 8px;
    width: 75vw;
    height: 230px;
  }

  .notdata {
    font-weight: normal;
    font-size: 90px;
    color: #06bc68;
  }

  button {
    height: 40px;
    width: 80%;
    background-color: #65afff;
    border: none;
    border-radius: 8px;
    color: white;
  }

  .p1 {
    font-family: Montserrat;
    font-size: 16px;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
  }

  .p2 {
    width: 80px;
    height: 18px;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #06bc68;
  }

  input {
    width: 70vw;
    height: 24px;
    margin: 16px 0 0 12px;
    padding: 13px 22px 12px 18px;
    border-radius: 8px;
    border: solid 1px #ced0da;
    background-color: #ffffff;
    margin-bottom: 45px;
  }
`

export const AddingFiles = (props: ExperieceElement): JSX.Element => {
  return (
    <Card>
      <div className="firstDiv">
        <p>{props.title}</p>
      </div>
      <p className="p2">(Opcional)</p>
      <br></br>
      <p>
        <input placeholder="Buscar"></input>
      </p>
      <p className="p1">Sube el documento que avala tu certificacion:</p>
      <div className="dashedContainer">
        <p className="notdata">
          <FaCloudUploadAlt />
        </p>
        <button>Cargar archivo</button>
      </div>
    </Card>
  )
}

export default AddingFiles
