import React from 'react'
import styled from 'styled-components'

export interface CardElements {
  name: string
  image: string
  link: string
}

export interface IVirtualCardProps {
  experiences: CardElements[]
}

const CardsStyles = styled.section`
  width: 100%;
  display: flex;
`

const Card = styled.article``

export default function VirtualCard(props: IVirtualCardProps): JSX.Element {
  return (
    <CardsStyles>
      {props.experiences.map((destination, i) => {
        return (
          <Card key={i}>
            <a href={destination.link}>
              <img src={destination.image} alt={destination.name} />
              <p>{destination.name}</p>
            </a>
          </Card>
        )
      })}
    </CardsStyles>
  )
}
