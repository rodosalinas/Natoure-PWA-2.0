import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { MdRestaurantMenu, MdAccessible } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { FaPaw, FaFontAwesomeFlag, FaHandPointer } from "react-icons/fa";
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
  flex-direction: row;
  justify-content: center;
  b {
    font-size: 12px;
    color: white;
  }
  .title {
      font-weight: bold;
      text-align: left;
  }
  p {
    color: #2c375a;
  }
  div {
    margin: auto;
    width: 100%;
    padding: 5px;
    text-align: center;
  }
  .firstDiv {
    margin-left: 10px;
    display: flex;
    text-align: left;
  }
  .secondDiv {
      display: flex;
      justify-content: space-around;
      align-items: center;
  }
  button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 118px;
      height: 130px;
      margin: 0px 7px 5px 0;
      padding: 7px 19px 8px;
      background-color: #ebc969;
      border: none;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      text-align: center;
      font-size: 16px;
  }

  .icon {
    font-size: 20px;
  }

  .buttons {
      display: flex;
      align-items: center;
  }
 
`

export const Caracteristicas = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div>
            <p className="title">{props.title}</p><br />
            </div>
          <div className="firstDiv">
            <span className="buttons"><button><span className="btnspn"><FaPaw /><br></br> Pet Friendly</span></button></span>
            <span className="buttons"><button><span className="btnspn"><MdRestaurantMenu /><br></br> Menu Vegano</span></button></span>
            <span className="buttons"><button><span className="btnspn"><IoLanguage /><br></br> Guia Bilingue</span></button></span>
            <span className="buttons"><button><span className="btnspn"><FaFontAwesomeFlag /><br></br> LGBT</span></button></span>
            <span className="buttons"><button><span className="btnspn"><FaHandPointer /><br></br> Guia para Sordomudos</span></button></span>
            <span className="buttons"><button><span className="btnspn"><MdAccessible /><br></br> Accesibilidad para silla de ruedas</span></button></span>
            <span className="buttons"><button><span className="btnspn"><MdAccessible /><br></br> Apta para adultos mayores</span></button></span>
          </div>
      </Card>
    )
  }

  export default Caracteristicas