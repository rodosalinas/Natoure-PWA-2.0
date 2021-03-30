import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    title: string
    sustainable: number //TODO: check if the name it's ok
    likes: number
    rating: number
    duration: string
    image: string
    place: string
    time: string
  }



const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  width: 100vw;
  height: 40vh;
  background-size: 100vw 100%; 
  background-repeat: no-repeat;
  opacity: 0.9;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  b {
    font-size: 12px;
    color: white;
  }
  p {
    color: white;
  }
  .arrowIco {
    position: absolute;
    left: 20px;
    top: 30px;
    font-size: 35px;
    font-weight: bold;

  }
  .hearth {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 20px;
  }
  .share {
    position: absolute;
    right: 30px;
    top: 23px;
    font-size: 20px;
  }

  .play {
    position: absolute;
    right: 42%;
    top: 15%;
    font-size: 70px;
  }
  .firstDiv {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .secondDiv {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    margin-left: 20px;
  }
  .secondDiv>p{
    margin-bottom: 5px;
    font-weight: bold;
  }
  button { 
  width: 87px;
  height: 25px;
  margin: 3px 0;
  border-radius: 12.5px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
  background-color: #faab47;
  border: none;
  color: white;
  }

  .place {
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.38;
  letter-spacing: -0.03px;
  }
`

export const Heading = (props: ExperieceElement): JSX.Element => {
    return (
      <Card style={{backgroundImage: `url(${props.image})`}}>
        <div className="firstDiv">
          <p className="arrowIco">
            <AiOutlineArrowLeft />
          </p>
          <p className="likes">
            <span className="hearth" role="img" aria-label="heart">
          <span className="share"><AiOutlineShareAlt/></span><br />
              <AiOutlineHeart /><br></br>{props.likes}
            </span>
            <br />
            
          </p>
          <p>
          <span className="play"><AiOutlinePlayCircle /></span><br />
          </p>
        </div>
        <div className="secondDiv">
          <p className="place">
          {props.place} a {props.time} de tu ubicacion
          </p>
          <p>
          {props.title} 
          </p>
          <button>BioCultural</button>
        </div>
      </Card>
    )
  }

  export default Heading