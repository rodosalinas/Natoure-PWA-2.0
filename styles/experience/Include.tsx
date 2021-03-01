import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    title: string
    title2: string
    description: string 
    poblacion: string
    clima: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100vw;
  height: auto;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  b {
    font-size: 12px;
    color: white;
  }
  .title {
      font-weight: bold;
  }
  p {
    color: #2c375a;
  }
  div {
    width: 90%;
    padding: 5px;
    text-align: center;
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
      width: auto;
      height: 36px;
      margin: 0px 7px 5px 0;
      padding: 7px 19px 8px;
      background-color: #06bc68;
      border: none;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      text-align: center;
      font-size: 16px;
  }

  .icon {
    font-size: 20px;
  }

  .buttons {
      display: flex;
      align-items: center;
  }

  ul {
      margin-bottom: 20px;
  }

  li {
      margin-left: 40px;
  }
 
`

export const Include = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p className="title">{props.title}</p><br />
            <p>{props.description}</p>
            <ul>
                <li>Preparar una de las mejores sopas de la gastronomía mexicana de la mano de doña Julia</li>
                <li>La historia de uno de los platillos más tradicionales de la región</li>
                <li>Una técnica culinaria prehispánica</li>
                <li>Cocinar de manera vegana con insumos locales</li>
            </ul><br />
            <p className="title">{props.title2}</p><br />
            <ul>
                <li>Preparar una de las mejores sopas de la gastronomía mexicana de la mano de doña Julia</li>
                <li>La historia de uno de los platillos más tradicionales de la región</li>
                <li>Una técnica culinaria prehispánica</li>
                <li>Cocinar de manera vegana con insumos locales</li>
            </ul>
          </div>
        <div className="secondDiv">
            <hr></hr>
        </div>
      </Card>
    )
  }

  export default Include