import styled from 'styled-components'

export default styled.div`
  display: flex;
  width: 100%;
  height: 51px;
  border-bottom: 1px solid white;
  align-items: center;
  padding: 0 0 8px 0;
  div:first-child {
    width: 21px;
    height: 25px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
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
  p {
    font-weight: bold;
    font-size: 15px;
    margin: 0;
    line-height: 18px;
  }
  & > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    justify-self: flex-end;
    border: 2px solid var(--dark-blue);
  }
`
