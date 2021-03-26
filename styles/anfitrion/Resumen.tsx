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

  .title {
    margin-left: 20px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.78px;
    color: #06bc68;
    margin-bottom: 5px;
  }

  .title2 {
    margin-left: 20px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.68px;
  color: #2c375a;
  margin-bottom: 5px;
  }

  .firstCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
  }

  .secondContainer {
    width: 90%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
  }

  .firstDiv {
      width: 100%;
      display: flex;
      justify-content: left;
      flex-direction: column;
      text-align: left;
  }

  .secondDiv {
      display: flex;
      flex-direction: column;
  }

  .bgDivGreen {
      width: 85vw;
      height: 135px;
      margin-left: 20px;
      border-radius: 8px;
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
      background-color: #06bc68;
      display: flex;
      justify-content: space-around;
      color: white
  }

  .month {
    font-family: Montserrat;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  
  letter-spacing: -0.03px;
  color: #ffffff;
  }

  .earn {
  font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.21;
  letter-spacing: -0.03px;
  color: #ffffff;
  }

  .earnNmbr {
    font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.05px;
  color: #ffffff;
  }

  .totaltxt {
    font-family: Montserrat;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: -0.03px;
  color: #ffffff;
  }

  .totalnmbr {
    font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.05px;
  color: #ffffff;
  }

  .bgCard1 {
    margin-top: 40px;
  }

  .bgCard1>p {
    
  }

  .bgCard2 {
    margin-top: 40px;
  }

  .bgCard2>p {
    margin-bottom: 5px;
  }

  .bgDivGreen2 {
    width: 116px;
    height: 121px;
    margin-left: 20px;
    border-radius: 8px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
    background-color: #06bc68;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

.bgDivGreen3 {
    width: 232px;
    height: 121px;
    margin-left: 10px;
    border-radius: 8px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
    background-color: #06bc68;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
}

.bgDivGreen3>p {
  margin-top: 15px;
}

  .thirdDiv {
    width: 25%;
    font-size: 30px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.fourthDiv {
    width: 100%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}


  .green {
      font-weight: bold;
      color: #06bc68;
  }

  .blue {
    font-weight: bold;
    color: #2c375a;
  
    .closeIcon {
        color: white;
    }

   
}
 
`

export const Resumen = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div className="firstCont">
        <div className="firstDiv">

            <p className="title">
                 Ejidos de Xochimilco y San Gregorio Atlalpulco
            </p>

            <p className="title2">
                 Éste es un resumen de tu último periodo:
            </p>
             <div className="bgDivGreen">
                <div className="bgCard1">
                  <p className="month">{props.mes}</p>
                  <p className="earn">Ganancia total:</p>
                  <p className="earnNmbr">{props.ganancia}</p>
                </div>
                <div className="bgCard2">
                <p className="totaltxt">Total de <br></br> reservaciones:</p>
                  <p className="totalnmbr">{props.reservaciones}</p>
                </div>
             </div>         
        </div>
        </div>
        <div className="secondContainer">
            <div className="bgDivGreen2">
              <p>Posición en <br></br>el Ranking:</p>
              <p>#{props.ranking}</p>
            </div>   
            <div className="bgDivGreen3">
                <p>Tu calificacion:</p>
                <p>{props.sostenibilidad} Sostenibilidad</p>
                <p>{props.servicio} Servicio</p>
            </div>    
        </div>
      </Card>
    )
  }

  export default Resumen