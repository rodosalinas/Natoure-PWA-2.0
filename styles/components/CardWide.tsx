/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import styled from 'styled-components'

interface Props {
  sustainLevel: number
  likes: number
  location: string
  name: string
  rating: number
  price: string
  duration: string
  distance: string
  image: string
}

const CardStyles = styled.div`
  width: 315px;
  height: 274px;
  border-radius: 8px;
  overflow: hidden;
  div:nth-child(1) {
    width: 100%;
    height: 201px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    b {
      position: absolute;
      top: 10px;
      margin: 0;
      color: white;
      font-size: 13px;
    }
    #sust {
      left: 10px;
    }
    b:last-child {
      right: 10px;
    }
  }
  div:nth-child(2) {
    font-size: 13px;
    height: 73px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 10px;
    p {
      margin: 0;
    }
    span {
      color: var(--light-green);
      font-weight: 900;
      margin: 0 8px;
    }
    #name {
      font-size: 14px;
    }
  }
`

const CardWide = ({
  sustainLevel,
  likes,
  location,
  name,
  rating,
  price,
  duration,
  distance,
  image,
}: Props): JSX.Element => {
  return (
    <CardStyles>
      <div>
        <img src={image} alt={name} />
        <b id="sust">🥬 &nbsp; {sustainLevel}</b>
        <b>
          {' '}
          ♥️ <br />
          {likes}
        </b>
      </div>
      <div>
        <p>
          📍&nbsp; <b>{location}</b> &nbsp; <span>a {distance} de tu ubicación</span>
        </p>
        <p>
          <b id={name}>{name}</b> &nbsp; ⭑ {rating}
        </p>
        <p>
          <b>$ {price}</b>
          <span>·</span>
          {duration}
        </p>
      </div>
    </CardStyles>
  )
}

export default CardWide
