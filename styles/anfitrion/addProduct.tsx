import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    product: string
  }



const Card = styled.section`
* {
  margin: 0;
  padding: 0;
} 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85vw;
  height: 184px;
  border-radius: 8px;
  border-style: dashed;
  border-color: #06bc68;
  margin: auto;
  left: 10px;
  bottom: 83px;
  background-size: 100vw 50vh; 
  background-repeat: no-repeat;
  .circle {
      display: flex;
      justify-content: center;
      align-content: center;
      border-radius: 50%;
      background-color: #06bc68;
      width: 50px;
      height: 50px;
      font-weight: bold;
      color: white;
      font-size: 40px;
  }
  button {
    width: 270px;
    height: 40px;
    padding: 9px 22px 10px 24px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: #06bc68;
     margin-top: 20px;
  }
`

export const AddProduct = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div className="circle">
            +
        </div>
        <button>Añade {props.product}</button>
      </Card>
    )
  }

  export default AddProduct