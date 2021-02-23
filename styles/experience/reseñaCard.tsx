import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    image: string
    name: string
    time: number
    reseña: string
  }

  export interface IExperienceElementProps {
      reseñas: ExperieceElement[]
  }

  const CardsCollection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`
 
const Card = styled.section`
* {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
}
 width 100%;
 height: auto;
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-top: 10px;
 img {
    width: 116px;
    height: 116px;
    border-radius: 50%;
 }
 img {
     width: 60px;
     height: 60px;
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
     flex-direction: row;
     justify-content: flex-start;
     align-items: center;
     margin-bottom: 15px;
     color: #2c375a;
 }
 .secondDiv {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
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

 .divisorDiv {
     width: 100%;
     display: flex;
     justify-content: center;
     text-align: center;
 }


 
`

export const ReseñaCard = (props: ExperieceElement): JSX.Element => {
    return (
        <>
      <Card>
          <div className="firstDiv">
            <div>
            <img src={props.image} alt="avatar"/>
            </div>
            <div>
                <b>{props.name}</b>
                <p>Hace {props.time} min</p>
            </div>
          </div>  
          <div className="secondDiv">
            <p>{props.reseña}</p>
          </div>
      </Card>
        <div className="divisorDiv">
          <hr className="divisor"></hr>
        </div>
        </>
    )
  }

  export default function ReseñaCards(props: IExperienceElementProps): JSX.Element {
    return (
        <CardsCollection>
          {props.reseñas.map((reseña, i) => {
            return <ReseñaCard key={i} {...reseña} />
          })}
        </CardsCollection>
    )
  }