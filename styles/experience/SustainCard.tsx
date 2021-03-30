import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt, AiOutlineClockCircle } from "react-icons/ai";
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    title: string
    description: string 
    sustain: number
    rating: number
    duration: string
    price: number
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  margin-bottom: 20px;
  width: 100vw;
  height: 120px;
  background-color: #2c375a;
  border-radius: 8px;
  position: sticky;
  top: 0;
  display: flex;
  z-index: 9999;
 .firstdiv {
   width: 50%;
  font-size: 10px;
  font-weight: 600;
  color: white;
  padding-left: 20px;
  padding-top: 20px;
 }
 .firstdiv>p {
  margin-bottom: 10px;
}
 .seconddiv {
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 button {
  width: 126px;
  height: 48px;
  border-radius: 8px;
  background-color: #fa4775;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
 }

 .duration {
    font-weight: bold;
    font-size: 20px;
    margin-left: 10px;
 }

 .link {
  color: #06bc68;
  text-decoration: underline;
 }


`

export const SustainCard = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div className="firstdiv">
          <p>{props.title} <span className="link">Ver perfil</span></p> 
          <p>Sustain: {props.sustain}</p>
          <p>Rating: {props.rating} <span className="duration"><AiOutlineClockCircle /> </span> {props.duration}</p>
        </div>
        <div className="seconddiv">
          <button>
           <p>
             <b>
           ${props.price}
             </b>
           </p>
           <p>
            Reserva ahora
           </p>
         </button>
        </div>
      </Card>
    )
  }

  export default SustainCard