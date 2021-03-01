import styled from 'styled-components'
import React from 'react';
import { BsFileRichtext } from "react-icons/bs";

export interface ExperieceElement {
    title: string
    description: string 
    poblacion: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  margin-top: 20px;
  margin-bottom: 20px;
  margin: auto;
  border-radius: 18px;
  width: 85%;
  height: auto;
  background-color: #2c375a;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  b {
    font-size: 12px;
    color: white;
  }
  .title {
      color: white;
      margin-left: 20px;
      margin-top: 20px;
      font-weight: bold;
  }
  p {
    color: #2c375a;
  }
  div {
    width: 90%;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 12px;
    color: #2c375a;
  }
  .firstDiv {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }
  .secondDiv {
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 158px;
      height: 45px;
      margin: 0px 7px 5px 0;
      padding: 7px 19px 8px;
      background-color: #06bc68;
      border-radius: 8px;
      border: solid 2px #06bc68;
      color: white;
      font-weight: bold;
      text-align: center;
      font-size: 12px;
  }

  .icon {
    font-size: 20px;
  }

  .buttons {
      display: flex;
      align-items: center;
  }

  .more {
    width: 360px;
    height: 44px;
    background-color: #06bc68;
    color: white;
    margin-left: 20px;
    margin-top: 40px;
    border-radius: 22px;
  }

  ol {
      margin: auto;
      color: white;
      text-align: left;
      font-size: 16px;
  }

  li {
      margin-bottom: 10px;
  }
  
  p {
      margin-top: 20px;
      color: white;
  }


  .list {
      display: flex;
      flex-direction: column;
    width: 65%;
    margin: auto;
    margin-bottom: 15px;
  }

  .headIcon {
      font-size: 60px;
  }

`

export const Discover = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <p className="title">Normas</p><br />            
        <div className="list">
            <p className="headIcon"><BsFileRichtext /></p>
        <p className="title">Revisa nuestros cursos</p><br /> 
         <p>Te ofrecemos los recursos necesarios para que puedas aprender a mejorar el nivel de tus productos</p> 
         <p><button>Comienza a aprender</button></p>
        </div>
      </Card>
    )
  }

  export default Discover