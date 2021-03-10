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
  }



const Card = styled.section`
* {
  margin: 0;
  padding: 0;
} 
  position: fixed;
  z-index: 9999;
  width: 278px;
  height: 72px;
  border-radius: 8px;
  left: 10px;
  bottom: 83px;
  background-color: #2c375a;
  background-size: 100vw 50vh; 
  background-repeat: no-repeat;
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
    display: flex;
    flex-direction: column;
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

export const FixedHead = (props: ExperieceElement): JSX.Element => {
    return (
      <Card>
        <div>
          
          <p className="rating">
            <span></span>
            <span></span>
          <span role="img" aria-label="heart">
             Sustainable: 🥬 {props.sustainable}
            </span>
            <span></span>
            <span></span>
          </p>
          <p>
            <span>Rating:</span> ⭑ {props.rating}

          </p>
        </div>
      </Card>
    )
  }

  export default FixedHead