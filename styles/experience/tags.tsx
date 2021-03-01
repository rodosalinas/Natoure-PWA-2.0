import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    image: string
    name: string
    time: number
    tag: string
  }

  export interface IExperienceElementProps {
      tags: ExperieceElement[]
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
 .firstDiv {
     width: 80%;
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
     align-items: center;
     margin-bottom: 15px;
     color: #2c375a;
 }

 .btnDiv {
     margin-left: 5px;
 }

 button {
     width: 148px;
     height: 32px;
     border-radius: 16px;
     border: none;
     color: white;
     font-weight: bold;
 }

 .journey {
     background-color: #5ddfbf;
 }

 .woods {
    background-color: #5d8edf;
 }

 .viaje {
     background-color: #ae5ddf;
 }
 
`

export const TagCard = (props: ExperieceElement): JSX.Element => {
    return (
        <>
      <Card>
          <div className="firstDiv">
            <div className="btnDiv">
                <button className="journey">Viaje en Familia</button>
            </div>
            <div className="btnDiv">
                <button className="woods">Amantes del bosque</button>
            </div>
            <div className="btnDiv"> 
                <button className="viaje">Viajes</button>
            </div>
          </div>  
      </Card>
        </>
    )
  }

  export default function TagCards(props: IExperienceElementProps): JSX.Element {
    return (
        <CardsCollection>
          {props.tags.map((tag, i) => {
            return <TagCard key={i} {...tag} />
          })}
        </CardsCollection>
    )
  }