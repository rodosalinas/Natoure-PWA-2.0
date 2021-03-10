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
  width: 100vw;
  height: 40vh;
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
      width: 350px;
      height: 44px;
      background-color: #06bc68;
      border: none;
      border-radius: 25px;
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
 
`

export const ResumeExp = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p className="title">{props.title}</p><br />
            <p>{props.description}</p>
          </div>
        <div className="secondDiv">
        <span className="buttons"><button><span className="btnspn">Personaliza tu visita con nosotros</span></button></span>
        </div>
      </Card>
    )
  }

  export default ResumeExp