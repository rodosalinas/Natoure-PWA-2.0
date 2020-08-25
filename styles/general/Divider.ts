import styled from 'styled-components'

export default styled.div<{ top: number; bottom: number }>`
  height: 1px;
  border-bottom: solid 0.5px rgba(44, 55, 90, 0.36);
  margin-top: ${(props) => props.top}px;
  margin-bottom: ${(props) => props.bottom}px;
  width: 86%;
  margin-left: 7%;
`
