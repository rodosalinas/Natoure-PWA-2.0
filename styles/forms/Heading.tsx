import styled from 'styled-components'
import React from 'react'
import { BsX, BsChevronLeft } from 'react-icons/bs'

import ButtonOutlined from './ButtonOutlined'

type Props = {
  title: string
  stepName: string
  step: number
  total: number
}

const Wrapper = styled.section`
  text-align: center;
  width: 100vw;
  height: 164px;
  background-color: var(--dark-blue);
  color: var(--white);
  padding: 32px 0;
`

const Head = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.2px;
  display: flex;
  width: 85vw;
  justify-content: space-between;
  margin: 0 auto 40px auto;
  svg {
    width: 24px;
    height: 24px;
    stroke-width: 1px;
  }
`

const SmallText = styled.p`
  font-family: Montserrat;
  font-size: 12px;
  line-height: 1.5;
  text-align: center;
  color: var(--white);
  margin: 24px 0 12px 0;
`

const Step = styled.div`
  background-color: var(--green-natoure);
  height: 7px;
  width: 36px;
  margin-right: 5px;
  display: inline-block;
`
const Pending = styled.div`
  background-color: var(--green-natoure);
  height: 7px;
  width: 36px;
  margin-right: 5px;
  display: inline-block;
  opacity: 0.39;
`

export const Heading = ({ title, stepName, step, total }: Props): JSX.Element => {
  const steps = []
  for (let i = 1; i <= step; i++) {
    steps.push(<Step key={i} />)
  }

  const pending = []
  for (let i = 1; i <= total - step; i++) {
    pending.push(<Pending key={i} />)
  }

  return (
    <Wrapper>
      <Head>
        <BsChevronLeft />
        {title}
        <BsX />
      </Head>
      <ButtonOutlined text={stepName} />
      <SmallText>
        Paso {step} de {total}
      </SmallText>
      {steps}
      {pending}
    </Wrapper>
  )
}

export default Heading
