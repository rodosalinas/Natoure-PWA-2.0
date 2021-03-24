import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

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

  .firstDiv {
    display: flex;
    justify-content: left;
    align-items: center;
    color: white;
    text-align: left;
    height: 64px;
    width: 90vw;
    background-color: #06bc68;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    margin-bottom: 20px;
  } & p {
      margin-left: 10px;
      font-weight: bold;
  }

  .dashedContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: solid 2px #06bc68;
      border-style: dashed; 
      border-radius: 8px;
      width: 75vw;
      height: 230px;    
  } 

  .notdata {
      margin-bottom: 60px;
      font-weight: normal;
      color: #9a9fa8;
  }
  
  button {
      height: 40px;
      width: 80%;
      background-color: #06bc68;
      border: none;
      border-radius: 8px;
      color: white;
  }

 
`

export const AddingCard = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
              <p>
              {props.title}
              </p>
          </div>
         <div className="dashedContainer">
            <p className="notdata">
            Aún no tienes datos para mostrar, agregalos para poder recibir la compensación por tus productos.
            </p>
            <button>+ Añade tus {props.name}</button>
         </div>
         
      </Card>
    )
  }

  export default AddingCard