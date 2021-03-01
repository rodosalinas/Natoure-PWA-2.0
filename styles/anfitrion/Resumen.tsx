import styled from 'styled-components'
import React from 'react';
import { FaRegBell, FaWindowClose } from "react-icons/fa";
import ProfileDrawer from '../components/ProfileDrawer';
import { GrFormClose } from "react-icons/gr";


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
  width: 100%;
  height: auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  .firstCont {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .secondContainer {
    width: 90%;
    height: auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
      width: 50px;
  }

  .firstDiv {
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: center;
  }

  .secondDiv {
      display: flex;
      flex-direction: column;
  }

  .bgDivGreen {
      width: 361px;
      height: 135px;
      margin: auto;
      border-radius: 8px;
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
      background-color: #06bc68;
  }

  .bgDivGreen2 {
    width: 116px;
    height: 121px;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
    background-color: #06bc68;
}

.bgDivGreen3 {
    width: 232px;
    height: 121px;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
    background-color: #06bc68;
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
            <p>
                 Ejidos de Xochimilco y San Gregorio Atlalpulco
            </p>
            <p>
                 Éste es un resumen de tu último periodo: 
            </p>
             <div className="bgDivGreen">

             </div>         
        </div>
        </div>
        <div className="secondContainer">
            <div className="bgDivGreen2">

            </div>   
            <div className="bgDivGreen3">

            </div>    
        </div>
      </Card>
    )
  }

  export default Resumen