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
    flex-direction: row;
    align-items: center;
  }

  .secondContainer {
    width: 100%;
    height: 58px;
    background-color: #2c375a;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
      width: 50px;
  }

  .firstDiv {
      width: 50px;
  }

  .secondDiv {
      display: flex;
      flex-direction: column;
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

export const ProfHeading = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div className="firstCont">
        <div className="firstDiv">
            <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
        </div>
        <div className="secondDiv">
            <p className="blue"> 
                Llega a miles de viajeros
            </p>
            <p className="green">
                de forma simple y segura
            </p>
        </div>
        <div className="thirdDiv">
            <p>
                <FaRegBell />
            </p>
            <p>
                <ProfileDrawer />
            </p>
        </div>
        </div>
        <div className="secondContainer">
            <div className="fourthDiv">
                <p>
                   Queremos <b>conocerte mejor</b>
                </p>
                <p>
                    <button className="greenB">Completa tu perfil</button>
                </p>
                <p>
                    <FaWindowClose />
                </p>
            </div>
        </div>
      </Card>
    )
  }

  export default ProfHeading