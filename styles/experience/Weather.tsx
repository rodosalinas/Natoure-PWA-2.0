import styled from 'styled-components'
import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";

export interface ExperieceElement {
    title: string
    description: string 
    poblacion: string
    clima: string
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
      font-weight: bold;
      margin-left: 20px;
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
  .secondDiv {
      display: flex;
      flex-direction: column;
      align-items: center;
  } & p {
      font-weight: normal;
      margin-bottom: 10px;
      font-weight: none;
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
      font-size: 80px;
  }

  .green {
      font-weight: bold;
      color: #06bc68;
  }

  .days {
      display: flex;
      flex-direction: column;
      font-size: 50px;
      font-weight: normal;
  }

  .days2 {
    font-weight: normal;
    font-size: 13px;
}


 
`

export const Weather = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
            <p className="title">{props.title}</p><br />            
        <div className="secondDiv">
            <span className="buttons"><TiWeatherPartlySunny /></span><br></br>
            <p>{props.clima}</p>
            <p>27º C / 81º F</p>
            <p><span className="green">Hoy:</span> viernes 15 de mayo</p>
        </div>
        <div className="firstDiv">
            <div className="days">
                <TiWeatherPartlySunny />
                <p className="days2">Sab</p>
            </div>
            <div className="days">
                <TiWeatherPartlySunny /> 
                <p className="days2">Dom</p>  
            </div>
            <div className="days">
                <TiWeatherPartlySunny />   
                <p className="days2">Lun</p>
            </div>
            <div className="days">
                <TiWeatherPartlySunny />
                <p className="days2">Mar</p>
            </div>
        </div>
      </Card>
    )
  }

  export default Weather