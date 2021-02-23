import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    price: string 
    description: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
}
 width 100%;
 height: 50px;
 background-color: #fa4775;
 display: flex;
 flex-direction: row;
 b {
     color: white;
     margin-right: 10px;
 }
 .firstDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
 }

 
`

export const PinkCard = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <span><b>${props.price}</b></span><p> {props.description}</p>
          </div>
      </Card>
    )
  }

  export default PinkCard