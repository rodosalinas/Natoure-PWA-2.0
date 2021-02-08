import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 239px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: var(--dark-blue);
  & > p {
    font-size: 15px;
    font-weight: bold;
  }
  section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 76.06px;
      div {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin-bottom: 7px;
      }
      p {
        font-size: 14px;
        margin: 0;
        text-align: center;
      }
    }
    article:nth-child(1) div {
      background-color: #82e293;
    }
    article:nth-child(2) div {
      background-color: #b6ecf9;
    }
    article:nth-child(3) div {
      background-color: #feeab2;
    }
    article:nth-child(4) div {
      background-color: #d8a8f3;
    }
  }
`
