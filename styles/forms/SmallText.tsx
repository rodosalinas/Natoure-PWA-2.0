import React from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
  black: boolean
}

const Wrapper = styled.div(
  ({ black }: any) => `
  font-size: 14px;
  color: ${black ? 'var(--black)' : 'var(--dark-grey)'};
  width: 84vw;
  margin-left:auto;
  margin-right:auto;
  `
)

const SmallText = ({ title, style, black }: Props): JSX.Element => {
  return (
    <Wrapper style={style} {...{ black }}>
      {title}
    </Wrapper>
  )
}

export default SmallText

SmallText.defaultProps = {
  style: { marginBottom: 12 },
  black: false,
}
