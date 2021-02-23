import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    description: string
    person: string
    image: string
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
 margin-top: 10px;
 img {
    width: 116px;
    height: 116px;
    border-radius: 50%;
 }
 b {
     margin-right: 10px;
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
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     margin-bottom: 15px;
 }

 
`

export const bioCard = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p><img src={props.image} alt="image"></img></p>
            <p><b className="titleSize">Conoce a <span className="personLetter">{props.person}</span></b></p>
            <br></br>
            <p className="desBox">
                {props.description}
            </p>
          </div>
      </Card>
    )
  }

  export default bioCard