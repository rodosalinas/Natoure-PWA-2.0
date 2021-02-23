import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt, AiOutlinePlus } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsPlusCircle } from 'react-icons/bs';

export interface PaymentElement {
    name: string
  }

  export interface IPaymentElementProps {
      addpayments: PaymentElement[]
  }

  const CardsCollection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  .title {
      font-size: 15px;
      font-weight: bold;
      color: #2c375a;
    }
`

const Title = styled.section`
p {
  font-size: 15px;
  font-weight: bold;
  color: #2c375a;
  margin-left: 15px;
  }
`

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
 flex-direction: row;
 justify-content: space-around;
 text-align: left;
 margin-top: 10px;
 b {
     margin-right: 10px;
     font-size: 16px;
 }
 p {
     font-size: 15px;
     font-weight: bold;
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
     width: 50%;
     display: flex;
     flex-direction: row;
     justify-content: left;
     align-items: center;
     margin-bottom: 15px;
     text-align: left;
     color: #2c375a;
     margin-left: 50px;
 }
 .secondDiv {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    margin-left: 50px;
    text-align: left;
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

export const AddPaymentCard = (props: PaymentElement): JSX.Element => {
    return (
        <>
      <Card>
          <div className="firstDiv">
            <div>
           
            </div>
            <div>
                {props.name}
            </div>
          </div>  
          <div className="secondDiv">
            <AiOutlinePlus />
          </div>
      </Card>
        <div className="divisorDiv">
          <hr className="divisor"></hr>
        </div>
        </>
    )
  }

  export default function AddPaymentCards(props: IPaymentElementProps): JSX.Element {
    return (
        <>
        <Title>
        <p className="title">Agregar Metodo de pago</p>
        </Title>
        <CardsCollection>
          {props.addpayments.map((payment, i) => {
            return <AddPaymentCard key={i} {...payment} />
          })}
        </CardsCollection>
        <br />
        <Footer>
        <span><BsPlusCircle /></span><p>Agregar un codigo de promocion</p>
        </Footer>
        </>
    )
  }