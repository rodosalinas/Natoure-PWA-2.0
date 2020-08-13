import styled from 'styled-components'

export default styled.section`
  width: 100%;
  min-height: 376px;
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  flex-wrap: wrap;
  article {
    width: 110px;
    height: 174px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    div {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
    }
    p {
      position: absolute;
      bottom: 20px;
      color: white;
      font-size: 14px;
      width: 100%;
      text-align: center;
    }
  }
`
