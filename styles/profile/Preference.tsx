
import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt, AiOutlineCloseCircle } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { ProfileBar, CountrySelector, InclusiveSec } from '../../styles/landing'
import CategorySection from './CategorySection'
import { FaPen, FaPlusCircle } from "react-icons/fa";
import { BsPlusCircle } from 'react-icons/bs';

export interface ExperieceElement {
    description: string
    person: string
    image: string
    sustain: number
  }


const Footer = styled.section`
display: flex;
align-items: center;
margin-left: 20px;
p {
  font-size: 15px;
  font-weight: bold;
  color: #2c375a;
  margin-left: 15px;
  }
  span {
    font-size: 20px;
    font-weight: bolder;
    color: gray;
    margin-left: 15px;
  }
`


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
  font-family: Montserrat;
}
 width 100%;
 height: auto;
 display: flex;
 flex-direction: column;
 margin-top: 10px;
 img {
    width: 116px;
    height: 116px;
    border: solid 2px black;
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
 .link {
     font-size: 12px;
     text-decoration: underline;
     color: #2c375a;
 }
 .fields{
     text-align: left;
     width: 80%;
     margin: auto;
 }
 .sustain {
     font-size: 12px;
 }
 .fieldOne {
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
 }
 .fieldName {
     font-size: 10px;
     color: gray;
 }
 .fieldDes {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
   font-size: 14px;
   color: #2c375a;
}
 .aventura {
     display: flex;
     align-items: center;
     justify-content: space-around;
     background-color: #fa4775;
     height: 25px;
     width: 106px;
     color: white;
     border-radius: 12.5px;
     border: none;
 }

 .naturaleza {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #82e293;
    height: 25px;
    width: 106px;
    color: white;
    border-radius: 12.5px;
    border: none;
}

.cabañas {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f7b500;
    height: 25px;
    width: 106px;
    color: white;
    border-radius: 12.5px;
    border: none;
}

.individual {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #65afff;
    height: 25px;
    width: 106px;
    font-size: 10px;
    color: white;
    border-radius: 12.5px;
    border: none;
}

.camping {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #8500f7;
    height: 25px;
    width: 106px;
    color: white;
    border-radius: 12.5px;
    border: none;
}

.mar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: transparent;
    height: 25px;
    width: 106px;
    color: black;
    border-radius: 12.5px;
    border: solid 1px #af9eef;
}

.bosque {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: transparent;
    height: 25px;
    width: 106px;
    color: black;
    border-radius: 12.5px;
    border: solid 1px #fa4775;
}
 
`

export const Preference = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
         <div className="fields">  
            <p className="fieldName">Preferencias de Experiencia</p>
            <div className="fieldOne">
                <div>
            <p className="fieldDes"><button className="aventura">Aventura  <AiOutlineCloseCircle /></button>
            <button className="naturaleza">Naturaleza  <AiOutlineCloseCircle /></button></p>
            </div>
            </div>
         </div><br />
         <hr className="divisor"></hr><br />
         

         <div className="fields">  
            <p className="fieldName">Preferencias de Hospedaje</p>
            <div className="fieldOne">
                <div>
            <p className="fieldDes">
            <button className="cabañas">Cabañas <AiOutlineCloseCircle /></button>
            <button className="individual">Habitacion Individual <AiOutlineCloseCircle /></button>
            <button className="camping">Camping <AiOutlineCloseCircle /></button>
            </p>
            </div>
            <div>
            
            </div>
            </div>
         </div><br />
         <hr className="divisor"></hr><br />

         <div className="fields">  
            <p className="fieldName">Tipo de Destinos preferidos</p>
            <div className="fieldOne">
                <div>
            <p className="fieldDes">
                <button className="mar">Mar <AiOutlineCloseCircle /></button>
                <button className="bosque">Bosque <AiOutlineCloseCircle /></button>
            </p>
            </div>
            <div>
         
            </div>
            </div>
         </div><br />
         <hr className="divisor"></hr><br />
         <Footer>
        <span><BsPlusCircle /></span><p>Agrega una nueva preferencia</p>
        </Footer>

      </Card>
    )
  }

  export default Preference