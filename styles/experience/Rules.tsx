import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

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
      width: 56px;
      height: 56px;
      margin: 0px 7px 5px 0;
      padding: 7px 19px 8px;
      background-color: white;
      border: solid 2px #06bc68;
      border-radius: 50%;
      color: #2c375a;
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

  .list {
    width: 65%;
    margin: auto;
    margin-bottom: 15px;
  }

`

export const Rules = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
            <p className="title">Normas</p><br />            
        <div className="list">
            <ol>
                <li>Contribuye a la conservacion</li>
                <li>Cuida tu patrimonio Natural y cultural</li>
                <li>Maneja responsablemente</li>
                <li>Cuidado con el fuego</li>
                <li>Conoce y respeta a las comunidades locales</li>
                <li>Respeta a los otros visitantes</li>
                <li>Disfruta responsablemente las instalaciones</li>
                <li>Por tu seguridad conoce a los guarda parques</li>
            </ol>
        </div>
      </Card>
    )
  }

  export default Rules