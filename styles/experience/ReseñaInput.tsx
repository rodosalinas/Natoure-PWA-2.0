import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";


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
 .firstDiv {
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
     align-items: center;
     margin-bottom: 15px;
 }
 .secondDiv {
     width: 80%;
     margin: auto;
 }
 input {
     width: 80%;
     height: 100px;
 }

 button {
     width: 150px;
     height: 45px;
     background-color: var(--green-natoure);
     border: 1px;
     border-radius: 10px;
     color: white;
     font-weight: bold;
 }

 
`

export const ReseñaInput = () => {
    return (
      <Card>
          <div className="firstDiv">
            <input placeholder="Escribe una reseña.."></input>
          </div>
          <div className="secondDiv">
              <button>Publicar</button>
          </div>
      </Card>
    )
  }

  export default ReseñaInput