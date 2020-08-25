import styled from 'styled-components'

export default styled.div`
  min-height: 624px;
  max-height: 624px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  padding: 57px 6vw 0 6vw;
  color: white;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 224px;
  background-image: url('https://i.ibb.co/jJpzbG0/simon-migaj-yui-5-vf-k-huzs-unsplash.jpg');
  &::before {
    content: '';
    width: 100%;
    height: 624px;
    position: absolute;
    background-color: #232323;
    opacity: 0.32;
    top: 0;
    right: 0;
  }
  & > * {
    z-index: 2;
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
