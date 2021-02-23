
import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt, AiOutlineCloseCircle, AiOutlineArrowRight } from "react-icons/ai";
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


/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--green-natoure);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: gray;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
 
`

export const Configuracion = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
         <div className="fields">  
            <div className="fieldOne">
                <div>
            <p className="fieldDes"> 
                <b>Notificaciones</b>
            <div>
            <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
            </label>
            </div>
            </p>
            </div>
            </div>
         </div><br />
         <hr className="divisor"></hr><br />
         

         <div className="fields">  
            <div className="fieldOne">
                <div>
            <p className="fieldDes"> 
                <b>Idioma</b>
            <div>
                <select name="language" id="language">
                <option value="español">Español</option>
                <option value="ingles">Ingles</option>
                <option value="frances">Frances</option>
                <option value="aleman">Aleman</option>
                </select>
            </div>
            </p>
            </div>
            </div>
         </div><br />
         <hr className="divisor"></hr><br />

         <div className="fields">  
            <div className="fieldOne">
                <div>
            <p className="fieldDes"> 
                <b>Tipo de Moneda</b>
            <div>
                <select name="coin" id="coin">
                <option value="dolar">Dolar</option>
                <option value="mxn">Peso Mexicano</option>
                <option value="eur">Euro</option>
                </select>
            </div>
            </p>
            </div>
            </div>
         </div><br />
         <hr className="divisor"></hr><br />

         <div className="fields">  
            <div className="fieldOne">
                <div>
            <p className="fieldDes"> 
                <b>Terminos y condiciones</b>
                <b><AiOutlineArrowRight /></b>
            </p>
            </div>
            </div>
         </div><br />
         <hr className="divisor"></hr><br />

         <Footer>
        <span></span><p>Cerrar Sesion</p>
        </Footer>

      </Card>
    )
  }

  export default Configuracion