import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    title: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  margin-top: 20px;
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
    text-align: left;
  }
  .firstDiv {
    text-align: left;
    width: 100%;
  }
  button {
      width: 100px;
      height: 30px;
      background-color: #68e1a9;
      border: none;
      border-radius: 25px;
      color: white;
      font-weight: bold;
  }
  .centeredDiv {
      margin-left: 30px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li::before {
    content: "• ";
    color: #68e1a9;
  }
 
`

export const LearnCard = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p className="title">{props.title}</p><br />
            <div className="centeredDiv">
            <ul>
                <li>Preparar una de las mejores sopas de la gastronomía mexicana de la mano de doña Julia</li>
                <li>La historia de uno de los platillos más tradicionales de la región</li>
                <li>Una técnica culinaria prehispánica</li>
                <li>Cocinar de manera vegana con insumos locales</li>
            </ul>
            </div>
          </div>
      </Card>
    )
  }

  export default LearnCard