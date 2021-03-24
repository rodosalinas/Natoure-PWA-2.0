import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { ProfileBar, CountrySelector, InclusiveSec } from '../../styles/landing'
import CategorySection from './CategorySection'
import { FaPen, FaPlusCircle } from "react-icons/fa";

export interface ExperieceElement {
    description: string
    person: string
    image: string
    sustain: number
  }


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
 margin-top: 10px;
 img {
    width: 64px;
    height: 64px;
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
     width: 70%;
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
    font-size: 14px;
    color: #2c375a;
 }

 
`

export const ProfileCard = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <p><img src={props.image} alt="image"></img></p>
            <a href="#"><p className="link">Cambiar foto</p></a><br />
            <b><p>{props.person}</p></b>
            <a href="#"><p className="link">Editar Nombre</p></a><br />
            <br></br>       
           </div>
      </Card>
    )
  }

  export default ProfileCard