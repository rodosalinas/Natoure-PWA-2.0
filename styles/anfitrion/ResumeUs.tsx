import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
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
    text-align: center;
  }
  .firstDiv {
    text-align: left;
  }
  .secondDiv {
      display: flex;
      justify-content: space-around;
      align-items: center;
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

export const ResumeUs = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p className="title">{props.title}</p><br />
            <p>{props.description}</p>
          </div>
      </Card>
    )
  }

  export default ResumeUs