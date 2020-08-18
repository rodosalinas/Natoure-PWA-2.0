import styled from 'styled-components'

type BoxProps = {
  margin: number
}

export default styled('div')<BoxProps>`
  width: 100%;
  margin-top: ${(props) => props.margin}px;
  text-align: center;
`
