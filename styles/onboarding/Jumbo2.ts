import styled from 'styled-components'

export default styled.div`
  min-height: 450px;
  max-height: 624px;
  width: 100vw;
  height: 50vh;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  color: white;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 224px;
  background-image: url('https://i.ibb.co/WBFXQJy/Video-Img.jpg');
  &::before {
    content: '';
    width: 100%;
    height: 624px;
    position: absolute;
    background-color: #2c375a;
    background-size: cover;
    opacity: 0.6;
    top: 0;
    right: 0;
  }
  & > * {
    z-index: 2;
  }
  main {
    margin-top: 20%;
    text-align: center;
    h3 {
      font-size: 24px;
      font-weight: bold;
      text-decoration: underline;
      margin-top: 40vh;
    }
    div {
        margin: 10% 10% 10% 10%;
        width: 45%;
        height: 5%;
        align: center;
        padding: 13px 70px 13px 72px;
        border-radius: 8px;
        box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
        background-color: #06bc68;
    }
    p {
      margin-top: 1;
      font-size: 16px;
      font-weight: 100;
      span {
          color: #06bc68;
          font-weight: bold;
      }
      
    }
  }
`
