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
      background-color: white;
      border: solid 1px #06bc68;
      border-radius: 8px;
      color: #2c375a;
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

export const BestMonths = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p className="title">{props.title}</p><br />
            <p>{props.description}</p>
            <span className="buttons"><button><span className="btnspn">Abril</span></button></span>
            <span className="buttons"><button><span className="btnspn">Mayo </span></button></span>
            <span className="buttons"><button><span className="btnspn">Noviembre</span></button></span>
            
          </div>
        <div className="secondDiv">
            <hr></hr>
        </div>
      </Card>
    )
  }

  export default BestMonths