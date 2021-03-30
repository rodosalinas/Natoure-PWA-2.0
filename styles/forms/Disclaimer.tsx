import React from 'react'
import styled from 'styled-components'
import { BsFillExclamationCircleFill } from 'react-icons/bs'

const Wrapper = styled.div`
  width: calc(90vw - 32px);
  margin-right: auto;
  margin-left: auto;
  padding: 24px 16px;
  border-radius: 8px;
  background-color: var(--light-grey);
`

const TextBold = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: var(--black);
  letter-spacing: 0.56px;
  margin: 4px 4px 0 8px;
`

const Alert = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`

const Text = styled.span`
  font-size: 14px;
  color: var(--black);
  letter-spacing: 0.56px;
`

const Link = styled.a`
  font-size: 14px;
  color: var(--black);
  letter-spacing: 0.56px;
`

type Props = {
  bold?: string
  text: string | JSX.Element
  link?: string
  href?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
}

const Disclaimer = ({ bold, text, link, href, style }: Props): JSX.Element => {
  return (
    <Wrapper style={style}>
      {bold && (
        <Alert>
          <BsFillExclamationCircleFill />
          <TextBold>{bold}</TextBold>
        </Alert>
      )}
      <Text>{text}</Text>
      {link && <Link href={href}>{link}</Link>}
    </Wrapper>
  )
}

export default Disclaimer
