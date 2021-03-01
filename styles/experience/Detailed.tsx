import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
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
  flex-direction: column;
  justify-content: center;
  b {
    font-size: 12px;
    color: white;
  }
  .title {
      margin-left: 20px;
      font-weight: bold;
  }
  p {
    color: #2c375a;
  }
  div {
    width: 90%;
    padding: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    font-size: 12px;
    color: #2c375a;
  }
  .firstDiv {
    display: flex;
    flex-wrap: wrap;
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
      width: 56px;
      height: 56px;
      margin: 0px 7px 5px 0;
      padding: 7px 19px 8px;
      background-color: white;
      border: solid 2px #06bc68;
      border-radius: 50%;
      color: #2c375a;
      font-weight: bold;
      text-align: center;
      font-size: 12px;
  }

  .icon {
    font-size: 20px;
  }

  .buttons {
      display: flex;
      align-items: center;
  }

  .more {
    width: 360px;
    height: 44px;
    background-color: #06bc68;
    color: white;
    margin-left: 20px;
    margin-top: 40px;
    border-radius: 22px;
  }
 
`

export const Detailed = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
            <p className="title">{props.title}</p><br />            
          <div className="firstDiv">
          </div>
        <div className="secondDiv">
            <span className="buttons"><button><span className="btnspn">Día 1</span></button></span>
        </div>
        <div>
            <span className="buttons"><span className="btnspn">Empezamos nuestra aventura al amanecer con un recorrido en trajinera, 
            observando aves, disfrutando del 
            paisaje, mientras degustamos una bebida caliente con un 
            refrigerio.</span></span>
        </div>
        <div>
            <span className="buttons"><button><span className="btnspn">Día 2</span></button></span>
        </div>
        <div>
            <span className="buttons"><span className="btnspn">Haremos una parada en donde podremos observar con tranquilidad la fauna.</span></span>
        </div>
        <div>
            <span className="buttons"><button><span className="btnspn">Día 3</span></button></span>
        </div>
        <div>
            <span className="buttons"><span className="btnspn">Iremos a una chinampa demostrativa donde 
            degustaremos una comida con ingredientes locales a cargo de un chef.</span></span>
        </div>
        <p><button className="more">Ver más</button></p>
      </Card>
    )
  }

  export default Detailed