import styled from 'styled-components'

export default styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 100%;
  height: 54px;
  border: solid 1px #f0f0f0;
  border-radius: 27px;
  display: flex;
  overflow: hidden;
  background-color: transparent;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
  input {
    flex-grow: 1;
    border: none;
    color: black;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.13);
  }
  input::placeholder {
    color: black;
    font-size: 13px;
    text-align: left;
  }
  button {
    height: 100%;
    width: 50px;
    border: none;
    font-size: 20px;
    color: black;
    background-color: transparent;
  }
`
