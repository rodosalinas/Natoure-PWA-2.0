import React from 'react'
import styled from 'styled-components'

export interface CardElements {
  likes: number
  category: string
  type: 'Webinar' | 'Live'
  rating: number
  title: string
  price: number
  duration: string
  image: string
}

export interface IVirtualCardProps {
  experiences: CardElements[]
}

const CardsStyles = styled.section`
  width: 100%;
  display: flex;
`

const Card = styled.article`
  width: 156px;
  height: 317px;
  margin-right: 24px;
  flex-shrink: 0;
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
    p {
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
      color: white;
    }
  }
  div:last-child {
    p:first-child {
      margin: 9px 0 0 0;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      padding-right: 16px;
      span {
        color: var(--green-natoure);
        font-size: 13px;
        font-weight: bold;
        font-stretch: normal;
      }
    }
    b {
      max-height: 40px;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: -0.03px;
      color: #2c375a;
    }
    p:last-child {
      height: 31px;
      margin-top: 11px;
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

export default function VirtualCard(props: IVirtualCardProps): JSX.Element {
  return (
    <CardsStyles>
      {props.experiences.map((experience, i) => {
        return (
          <Card key={i}>
            <div>
              <img src={experience.image} alt={experience.title} />
              <p>
                <span role="img" aria-label="heart">
                  🤍
                </span>
                <br />
                {experience.likes}
              </p>
              <span>{experience.category}</span>
            </div>
            <div>
              <p>
                <span>{experience.type}</span> ⭑ {experience.rating}
              </p>
              <b>{experience.title}</b>
              <p>
                <b>${experience.price}</b>
                <span>·</span> {experience.duration}
              </p>
            </div>
          </Card>
        )
      })}
    </CardsStyles>
  )
}
