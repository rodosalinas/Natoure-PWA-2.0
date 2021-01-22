import styled from 'styled-components'

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 51px;
  border-bottom: 1px solid white;
  align-items: center;
  color: var(--dark-blue);
  padding: 0 0 8px 0;
  div:first-child {
    width: 21px;
    height: 25px;
    display: flex;
    align-items: center;
    img {
      width: 150%;
    }
  }
  div:nth-child(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 9px;
    flex-grow: 1;
  }
  hr {
    width: 357px;
    height: 2px;
    margin: 1px 0 0;
    border: 0;
    border-top: solid 2px rgba(44, 55, 90, 0.36);
  }
  p {
    font-weight: bold;
    font-size: 20px;
    align-items: center;
    margin: 0;
    line-height: 18px;
  }
  & > img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    justify-self: flex-end;
    border: 2px solid var(--dark-blue);
  }
`
