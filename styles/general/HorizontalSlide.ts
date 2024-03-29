import styled from 'styled-components'

export default styled.div<{ marginLeft?: string; shadow?: boolean }>`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
  /* padding-bottom: 30px; */
  box-shadow: ${(props) => (props.shadow ? '-2px 4px 12px 0 rgba(0, 0, 0, 0.08)' : null)};
  & > * {
    flex-shrink: 0;
    margin: 0 0 0 ${(props) => (props.marginLeft ? props.marginLeft : '30px')};
  }
`
