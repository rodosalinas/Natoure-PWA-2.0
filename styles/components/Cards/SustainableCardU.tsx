import React from 'react'
import styled from 'styled-components'
import { GoLocation } from "react-icons/go"

export interface CardElements {
  name: string
  image: string
  link: string
  spell: string[]
  place: string
  time: string
}

export interface IVirtualCardProps {
  experiences: CardElements[]
}

const CardsStyles = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & > *:nth-child(1),
  & > *:nth-child(1) {
    margin-bottom: 20px;
  }
`

const Card = styled.article`
  width: 168px;
  height: 272px;
  flex-shrink: 0;
  border-radius: 8px;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
  position: relative;
  &::after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 33%,
      rgba(0, 0, 0, 0.55) 70%,
      rgba(0, 0, 0, 0.39)
    );
    z-index: 1;
  }
  a {
    text-decoration: none;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
    p {
      width: 100%;
      z-index: 2;
      position: absolute;
      top: 50%;
      font-family: Montserrat;
      font-size: 15px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 0.92;
      letter-spacing: -0.08px;
      color: #ffffff;
      padding: 16px 8px;
      margin: 0;
      text-transform: uppercase;
    }
    .place {
    z-index: 2;
      position: absolute;
      top: 65%;
      font-family: Montserrat;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.38;
  letter-spacing: -0.03px;
  color: #ffffff;
      padding: 16px 8px;
      margin: 0;
      text-transform: uppercase;
    }
    .time {
        z-index: 2;
          position: absolute;
          top: 75%;
          font-family: Montserrat;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.38;
  letter-spacing: -0.03px;
  color: #ffffff;
          padding: 16px 8px;
          margin: 0;
          text-transform: lowercase;
        }
  }
`

export default function SustainableCardsU(props: IVirtualCardProps): JSX.Element {
  return (
    <CardsStyles>
      {props.experiences.map((destination, i) => {
        return (
          <Card key={i}>
            <a href={destination.link}>
              <img src={destination.image} alt={destination.name} />
              <p>
                {destination.spell.map((part) => (
                  <>
                    {part} <br />
                  </>
                ))}
              </p>
              <p className="place">
                <GoLocation /> {destination.place}
              </p>
                <p className="time">
                {destination.time}
                </p>
            </a>
          </Card>
        )
      })}
    </CardsStyles>
  )
}
