import React from 'react'
import styled from 'styled-components'

export interface ExperieceElement {
  title: string
  likes: number
  rating: number
  place: string
  image: string
  description: string
}

export interface IExperienceCardsProps {
  experiences: ExperieceElement[]
}

const CardsCollection = styled.section`
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
  width: 160px;
  height: 317px;
  flex-shrink: 0;
  flex-wrap: wrap;
  color: var(--dark-blue);
  div:first-child {
    background-color: greenyellow;
    height: 201px;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .likes {
      position: absolute;
      top: 9px;
      right: 9px;
      margin: 0;
      font-size: 13px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.03px;
      color: #ffffff;
      /* TODO:  size of the icon (span)*/
    }
    .sustainable {
      position: absolute;
      top: 9px;
      left: 9px;
      margin: 0;
      font-size: 13px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: -0.03px;
      color: #ffffff;
    }
    & > span {
      position: absolute;
      bottom: 11px;
      left: 7px;
      background-color: #fa4775;
      border-radius: 12.5px;
      box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
      font-size: 12px;
      font-weight: bold;
      height: 25px;
      min-width: 137px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
    }
  }
  div:last-child {
    padding: 0 5px;
    p:first-child {
      margin: 0;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      padding-right: 16px;
      height: 31px;
      display: flex;
      align-items: center;
      span {
        font-size: 13px;
        font-weight: bold;
        font-stretch: normal;
      }
    }
    & > span {
      color: var(--green-natoure);
      font-weight: 100%;
      width: 100%;
      font-size: 13px;
      display: block;
    }
    & > b {
      min-height: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: -0.03px;
      font-size: 13px;
    }
    p:last-child {
      height: 31px;
      margin: 0 0 12px 0;
      /* margin-top: 11px; */
      display: flex;
      align-items: center;
      font-size: 12px;
      span {
        font-weight: 900;
        font-size: 15px;
        color: var(--green-natoure);
        margin-left: 6px;
        margin-right: 8px;
      }
    }
  }
`

export const ExperienceCard = (props: ExperieceElement): JSX.Element => {
  return (
    <Card>
      <div>
        <img src={props.image} alt={props.title} />
        <p className="likes">
          <span role="img" aria-label="heart">
            🤍
          </span>
          <br />
          {props.likes}
        </p>
        <p className="sustainable">
          {/* TODO: aun no esta posicionado */}
          <span role="img" aria-label="heart">
            🥬
          </span>
        </p>
      </div>
      <div>
        <p>
          <span>{props.title}</span> ⭑ {props.rating}
        </p>
        <span></span>
        <b>{props.place}</b>
        <p>
          {props.description}
          <span>·</span> 
        </p>
      </div>
    </Card>
  )
}

export default function ExperienceCards(props: IExperienceCardsProps): JSX.Element {
  return (
    <CardsCollection>
      {props.experiences.map((experience, i) => {
        return <ExperienceCard key={i} {...experience} />
      })}
    </CardsCollection>
  )
}
