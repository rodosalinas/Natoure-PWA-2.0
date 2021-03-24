import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsFillXCircleFill, BsArrowLeftShort } from "react-icons/bs";

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
 display: flex;
 justify-content: space-around;
 align-items: center;
 text-align: center;
  margin-bottom: 20px;
  width: 100vw;
  height: 164px;
  background-color: #2c375a;

  p {
      text-align: center;
      color: white;
      font-size: 40px;
  }

  .asd {
      font-size: 15px;
  }

  .xcode{
      font-size: 25px;
  }

 
`

export const HeadingCert = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div>
          <p>
           <BsArrowLeftShort />
          </p>
          </div>
          <div>
          <p className="asd">
          Reconocimientos y <br></br>
Certificaciones
              </p>
          </div>
          <div>
              <p className="xcode">
              <BsFillXCircleFill />
              </p>
              
          </div>
      </Card>
    )
  }

  export default HeadingCert