import styled from 'styled-components'

export default styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  padding-bottom: 30px;
  box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
  & > * {
    flex-shrink: 0;
    margin: 0 0 0 30px;
  }
`
