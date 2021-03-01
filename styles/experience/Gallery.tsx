import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FaWhatsappSquare, FaEnvelope } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    title: string
    title2: string
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
  width: 100vw;
  height: auto;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  div {
    width: 90%;
    padding: 5px;
    text-align: center;
  }
  .firstDiv {
    display: flex;
    flex-wrap: wrap;
    text-align: left;
  }
  .secondDiv {
    width: 100%;
    min-height: 50px;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-bottom: 20px;
  }

  .video {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 266px;
      width: 100%;
      font-size: 100px;
      color: #ffffff;
      background-image: url("https://i.postimg.cc/wBPKzqwq/videobg.jpg");
      background-size: cover;
  }

  img {
      width: 173px;
      height: 115px;
      margin-right: 10px;
  }
 
`

export const Gallery = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
          <div className="firstDiv">
            <div className="video">
                <AiOutlinePlayCircle />
            </div>
          </div>
        <div className="secondDiv">
            <img src="https://i.postimg.cc/wBPKzqwq/videobg.jpg"></img>
            <img src="https://i.postimg.cc/wBPKzqwq/videobg.jpg"></img>
            <img src="https://i.postimg.cc/wBPKzqwq/videobg.jpg"></img>
            <img src="https://i.postimg.cc/wBPKzqwq/videobg.jpg"></img>
            <img src="https://i.postimg.cc/wBPKzqwq/videobg.jpg"></img>
        </div>
            <hr></hr>
      </Card>
    )
  }

  export default Gallery