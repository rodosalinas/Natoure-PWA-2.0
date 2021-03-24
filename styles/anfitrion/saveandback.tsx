import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { FaCloudUploadAlt } from "react-icons/fa";

export interface ExperieceElement {
    title: string
    description: string 
    name: string
    poblacion: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  margin-top: 20px;
  margin-bottom: 70px;
  width: 100vw;
  height: auto;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  
  button {
      height: 40px;
      width: 280px;
      background-color: #06bc68;
      border: none;
      border-radius: 8px;
      color: white;
      margin-bottom: 10px;
  }

  .p2 {
    height: 40px;
    width: 280px;
    background-color: white;
    border: none;
    border-radius: 8px;
    color: white;
    margin-bottom: 10px; 
  }


 
`

export const SaveandBack = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
         <p><button>Guardar</button></p>
         <p className="p2"><button>Regresar</button></p>
         
      </Card>
    )
  }

  export default SaveandBack