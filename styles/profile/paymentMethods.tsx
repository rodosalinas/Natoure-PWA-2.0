import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface PaymentElement {
    image: string
    name: string
  }

  export interface IPaymentElementProps {
      metodos: PaymentElement[]
  }

  const CardsCollection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
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
 flex-direction: row;
 align-items: center;
 margin-top: 10px;
 margin-right: 20px;
 img {
     width: 150px;
     height: 85px;
     border-radius: 25px;
 }
 b {
     margin-right: 10px;
     font-size: 16px;
 }
 p {
     font-size: 13px;
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
     width: 80%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     margin-bottom: 15px;
     color: #2c375a;
 }
 .secondDiv {
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 15px;
    color: #2c375a;
}
 .list {
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     color: #2c375a;

 }

 .props {
     color: var(--green-natoure);
 }

 .divisorDiv {
     width: 100%;
     display: flex;
     justify-content: center;
     text-align: center;
 }


 
`

export const PaymentCard = (props: PaymentElement): JSX.Element => {
    return (
        <>
      <Card>
          <div className="firstDiv">
            <div>
            <img src={props.image} alt="avatar"/>
            </div>
            <div>
                <b>{props.name}</b>
            </div>
          </div>  
          <div className="secondDiv">
          </div>
      </Card>
     
        </>
    )
  }

  export default function PaymentCards(props: IPaymentElementProps): JSX.Element {
    return (
        <CardsCollection>
          {props.metodos.map((metodo, i) => {
            return <PaymentCard key={i} {...metodo} />
          })}
        </CardsCollection>
    )
  }