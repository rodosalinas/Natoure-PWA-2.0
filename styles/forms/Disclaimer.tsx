import React from 'react'
import styled from 'styled-components'

type Props = {
  bold?: string
  text: string
  link?: string
  href?: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style?: object
}

const Container = styled.div`
  width: calc(90vw - 32px);
  margin-right: 16px;
  margin-left: 16px;
  padding: 24px 16px;
  border-radius: 8px;
  background-color: var(--light-grey);
`

const Oval = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6.5px 3px 6.5px;
  background-color: var(--black);
  border-radius: 50%;
  color: var(--white);
  position: absolute;
`

const TextBold = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: var(--black);
  letter-spacing: 0.56px;
  margin-right: 4px;
  margin-left: 22px;
`

const Alert = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-top: -4px !important;
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

const SectionHeading = ({ bold, text, link, href, style }: Props): JSX.Element => {
  return (
    <Container style={style}>
      {bold && (
        <Alert>
          <Oval>¡</Oval>
          <TextBold>{bold}</TextBold>
        </Alert>
      )}
      <Text>{text}</Text>
      {link && <Link href={href}>{link}</Link>}
    </Container>
  )
}

export default SectionHeading
