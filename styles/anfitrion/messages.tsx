import styled from 'styled-components'
import React from 'react';
import { FaRegBell, FaWindowClose } from "react-icons/fa";
import ProfileDrawer from '../components/ProfileDrawer';
import { GrFormClose } from "react-icons/gr";


export interface ExperieceElement {
    title: string
    description: string 
    mes: string
    ganancia: string
    reservaciones: number
    ranking: number
    sostenibilidad: string
    servicio: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: left;

  .message1 {
    width: 80vw;
    height: 109px;
    padding: 15px 13px 15px 15px;
    border-radius: 6px;
    box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
    border: solid 1px #06bc68;
    background-color: #ffffff;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
  }

  .message2 {
    width: 80vw;
    height: 109px;
    padding: 15px 13px 15px 15px;
    border-radius: 6px;
    box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
  }

  .message3 {
    width: 80vw;
    height: 109px;
    padding: 15px 13px 15px 15px;
    border-radius: 6px;
    box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
  }

  .message4 {
      margin: auto;
  }

  button {
    width: 216px;
    height: 44px;
    padding: 13px 77px 13px 78px;
    border-radius: 8px;
    box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
    border: solid 1px #06bc68;
    background-color: white;
  }

  .userOval {
    width: 49px;
    height: 49px;
    margin: 15px 20px 15px 0;
    padding: 1px 4px 15px 15px;
    background-color: #eeeeee;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    
  }

  .userOval>p {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.84px;
    color: #2c375a;
   
  }

  .contentmessage {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: 0.84px;
    color: #2c375a;
  }

  .headingM1 {
      display: flex;
      width: 100%;
      flex-direction: space-between;
      margin-bottom: 15px;
  }

 
`

export const Messages = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div className="message1">
            <div>
                <div className="userOval">
                AI
                </div>
            </div>

            <div className="contentmessage">
                <div className="headingM1">
                    <p>Andrea Lara</p>  <p>hace un momento</p>
                </div>
                <div>
                    <p>Hola, me gustaria conocer un poco más acerca de los viajes que realizan a la sierra…</p>
                </div>
            </div>
        </div>

        <div className="message2">
        <div>
                <div className="userOval">
                AI
                </div>
            </div>

            <div className="contentmessage">
                <div className="headingM1">
                    <p>Andrea Lara</p>  <p>hace un momento</p>
                </div>
                <div>
                    <p>Hola, me gustaria conocer un poco más acerca de los viajes que realizan a la sierra…</p>
                </div>
            </div>
        </div>

        <div className="message3">
        <div>
                <div className="userOval">
                AI
                </div>
            </div>

            <div className="contentmessage">
                <div className="headingM1">
                    <p>Andrea Lara</p>  <p>hace un momento</p>
                </div>
                <div>
                    <p>Hola, me gustaria conocer un poco más acerca de los viajes que realizan a la sierra…</p>
                </div>
            </div>
        </div>
        <div className="message4">
            <button>Ver Todo</button>
        </div>

        
      </Card>
    )
  }

  export default Messages