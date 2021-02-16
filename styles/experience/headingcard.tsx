import styled from 'styled-components'
import React from 'react';
import { AiOutlineArrowLeft, AiOutlinePlayCircle, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export interface ExperieceElement {
    title: string
    owner: string
    sustainable: number //TODO: check if the name it's ok
    likes: number
    rating: number
    place: string
    location: string
    duration: string
  }


const Card = styled.section`
* {
  margin: 0;
  padding: 0;
}
  width: 100vw;
  height: 50vh;
  background-color: #2c375a;
  background-image: url('https://i.postimg.cc/SsH6gybL/Cocina-Tradicional-Img.jpg');
  background-size: 100vw 37vh; 
  background-repeat: no-repeat;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
  b {
    font-size: 12px;
    color: white;
  }
  p {
    color: white;
  }
  div {
    width: 95%;
    padding: 5px;
    text-align: center;
  }
  .firstDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .secondDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .rating {
    display: flex;
    justify-content: space-around;
  }
  .arrowIco {
    font-size: 30px;
  }
  .hearth {
    font-size: 20px;
  }
  .play {
    font-size: 60px;
  }
  .link {
    font-size: 12px;
    color: var(--green-natoure);
    text-decoration: underline solid 1px var(--green-natoure);
  }
`

export const Heading = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div className="firstDiv">
          <p className="arrowIco">
            <AiOutlineArrowLeft />
          </p>
          <p className="likes">
          <span className="hearth"><AiOutlineShareAlt/></span><br />
            <span className="hearth" role="img" aria-label="heart">
              <AiOutlineHeart />
            </span>
            <br />
            {props.likes}
          </p>
        </div>
        <div className="secondDiv">
          <p>
          <span className="play"><AiOutlinePlayCircle /></span><br />
          </p>
          <p>
          <span>
           {props.duration}
          </span>
          </p>
        </div>
        <div>
          <p>
            <b>{props.title} </b><span className="link">Ver Perfil</span>
          </p>
          <span>{props.location}</span>
          
          <p className="rating">
            <span></span>
            <span></span>
          <span role="img" aria-label="heart">
              🥬 {props.sustainable}
            </span>
            <span>{props.place}</span> ⭑ {props.rating}
            <span></span>
            <span></span>
          </p>
        </div>
      </Card>
    )
  }

  export default Heading