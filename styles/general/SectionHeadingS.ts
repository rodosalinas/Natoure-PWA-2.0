import styled from 'styled-components'

export default styled.div`
  margin-top: 70px;
  margin-bottom: 30px;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--dark-blue);
  &::before {
    content: ' ';
    width: 6px;
    height: 19px;
    background-color: var(--green-natoure);
    position: absolute;
    left: 4.5vw;
    border-radius: 3px;
  }
  h4 {
    margin: 0;
    padding-left: 8vw;
  }
  a {
    padding-right: 4.5vw;
    color: var(--light-green);
  }
`
