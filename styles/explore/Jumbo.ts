import styled from 'styled-components'

export default styled.div`
  min-height: 10px;
  max-height: auto;
  width: 100vw;
  height: auto;
  max-width: 100vw;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-color: white;
  padding: 57px 6vw 0 6vw;
  color: var(--dark-blue);
  display: flex;
  flex-direction: column;
  .here {
    border-bottom: 3px solid var(--green-natoure);
    padding-bottom: 5px;
    color: black;
  }
  &::before {
    content: '';
    width: 100%;
    height: auto;
    position: absolute;
    color: var(--dark-blue);
    background-color: white;
    opacity: 0.32;
    top: 0;
    right: 0;
  }
  & > * {
    z-index: 2;
  }
  hr {
    width: 357px;
    height: 2px;
    margin: 12px 0 0;
    border: solid 0.5px rgba(44, 55, 90, 0.36);
  }
  main {
    text-align: center;
    h3 {
      font-size: 24px;
      margin: 0;
      font-weight: bold;
      text-decoration: underline;
    }
    p {
      margin: 0;
      font-size: 14px;
      font-weight: 100;
    }
  }
`
