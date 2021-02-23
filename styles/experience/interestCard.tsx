import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    difficulty: string
    age: string
    duration: string
    people: string
    language: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
}
 width 100%;
 height: auto;
 display: flex;
 flex-direction: row;
 justify-content: center;
 margin-top: 10px;
 img {
    width: 116px;
    height: 116px;
    border-radius: 50%;
 }
 b {
     margin-right: 10px;
     font-size: 16px;
 }
 p {
     font-size: 13px;
 }
 .titleSize{
     font-size: 15px;
     color: #2c375a;
 }
 .personLetter {
     color: var(--green-natoure);
 }
 .desBox {
     width: 85%;
     color: #2c375a;
 }
 .firstDiv {
     width: 80%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: space-between;
     margin-bottom: 15px;
     color: #2c375a;
 }
 .list {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     color: #2c375a;

 }

 .props {
     color: var(--green-natoure);
 }

 
`

export const interestCard = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p><b>Datos de Interes</b></p><br />
            <div className="list">
            <p>Dificultad</p><p className="props">{props.difficulty}</p>
            </div>
            <div className="list">
            <p>Edad Recomendada</p><p className="props">{props.age}</p>
            </div>
            <div className="list">
            <p>Duración</p><p className="props">{props.duration}</p>               
            </div>
            <div className="list">
            <p>Han tomado la experiencia</p>   <p className="props">{props.people}</p>            
            </div>
            <div className="list">
            <p>Idiomas</p> <p className="props">{props.language}</p>   
            </div>
          </div>
      </Card>
    )
  }

  export default interestCard