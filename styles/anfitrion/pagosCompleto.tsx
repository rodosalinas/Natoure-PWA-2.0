import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { printSourceLocation } from 'graphql';

export interface ExperieceElement {
    title: string
    date: string
    priceingreso: string
    image: string
    total: string
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

  .date {
      color: #06bc68;
      margin-left: 10px;
  }
  p {
    color: #2c375a;
  }
  div {
    width: 95%;
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

  .btnDiv {
    margin-left: 5px;
}


.el {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #2c375a;
}

.list {
    margin-bottom: 15px;
}

.tileContainer {
    width: 100%;
    display: flex;
}

.secondContainer {
    text-align: left;
}

.thirdCont {
    text-align: left;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}

.totalCont {
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
}

.details {
    margin: auto;
    margin-bottom: 20px;
    font-size: 13px;
    color: #06bc68;
    text-decoration: underline;
}

img {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-right: 10px;
}
 
`

export const PagosC = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p className="date">{props.date}</p><br />
            <div className="tileContainer">
            <span><img src={props.image}></img></span> 
            <div className="secondContainer">
             <span><b>Experiencia</b></span>
             <div className="thirdCont">
                <p>{props.title}</p>
                <span><b>+860mxn</b></span>
             </div>
            </div>

            </div>
          </div>
          <div className="list">

            <div className="el">
                <span>- Ingresos para la organización local</span> <span>{props.priceingreso}</span>
            </div>

            <div className="el">
                <span>- Cupón de descuento</span> <span>$0.00</span>
            </div>

            <div className="el">
                <span>- Seguro de viajes</span> <span>$0.00</span>  
            </div>

            <div className="el">
                <span>- Costo de ingreso al AIC</span> <span>$0.00</span>    
            </div>

            <div className="el">
                <span>- Pasaporte de conservación</span> <span>$0.00</span>   
            </div>

            <div className="el">
                <span>- Transporte redondo</span> <span>$0.00</span>    
            </div>
            
            <div className="el">
                <span>- Comisión bancaria </span> <span>$0.00</span> 
            </div>
            
            <div className="el">
                <span>- Comisión Natoure </span> <span>$0.00</span>   
            </div>
            
            <div className="el">
                <span>- Impuestos</span> <span>$0.00</span>    
            </div>
          </div>
          <br></br>
          <hr></hr>
          <div className="totalCont">
            <b>Total:</b><b>{props.total}</b>
          </div>
          <p className="details">Ver menos detalles</p>

          <div className="tileContainer">
            <span><img src={props.image}></img></span> 
            <div className="secondContainer">
             <span><b>Webinar</b></span>
             <div className="thirdCont">
                <p>{props.title}</p>
                <span><b>+550mxn</b></span>
             </div>
            </div>
            </div>

            <p className="details">Ver mas detalles</p>

            <div className="tileContainer">
            <span><img src={props.image}></img></span> 
            <div className="secondContainer">
             <span><b>Experiencia</b></span>
             <div className="thirdCont">
                <p>{props.title}</p>
                <span><b>+750mxn</b></span>
             </div>
            </div>
            </div>

            <p className="details">Ver mas detalles</p>
      </Card>
    )
  }

  export default PagosC