import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '../../general'

interface CardInfo {
  category: string
  title: string
  description: string
  btnText: string
  icon: string
  bg: string
}

interface Props {
  cards: [CardInfo]
}

const CardDiscoverStyles = styled.section`
  width: 100%;
  margin-top: 70px;
  min-height: 415px;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  padding: 0 6vw;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  ul {
    position: absolute;
    bottom: 16px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
`

const Li = styled.li`
  width: ${(props: { actual: boolean }) => (props.actual ? '18px' : '6px')};
  opacity: ${(props: { actual: boolean }) => (props.actual ? '1' : '0.7')};
  height: 6px;
  margin: 0 4px;
  border-radius: ${(props: { actual: boolean }) => (props.actual ? '3px' : '50%')};
  background-color: white;
  transition: 0.3s all ease;
`

const Article = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
  background-image: url(${(props: { bg: string }) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding: 129px 32px 32px 32px;
  box-sizing: border-box;
  position: relative;
  span {
    position: absolute;
    min-width: 120px;
    box-sizing: border-box;
    top: 16px;
    right: 16px;
    padding: 6px 11px;
    border-radius: 12.5px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.07);
    background-color: #468f94;
    font-size: 14px;
    font-weight: bold;
  }
  img {
    width: 51px;
    height: 51px;
    margin-bottom: 7px;
  }
  h3 {
    margin: 0 0 16px;
    font-size: 17px;
    text-decoration: underline;
  }
  p {
    margin: 0 0 17px;
    font-weight: 100;
    font-size: 14px;
  }
  button {
    margin-top: 32px;
  }
`

const CardDiscoverMap = ({ cards }: Props): JSX.Element => {
  const [actual, setActual] = useState(0)

  return (
    <CardDiscoverStyles>
      {cards.map((card, i) => (
        <React.Fragment key={i}>
          <Article bg={card.bg}>
            <span>{card.category}</span>
            <img src={card.icon} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Button btnType="primary">{card.btnText}</Button>
          </Article>
          <ul>
            {[0, 1, 2].map((_, i) => (
              <Li key={i} actual={actual === i} onClick={() => setActual(i)}></Li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </CardDiscoverStyles>
  )
}

export default CardDiscoverMap
