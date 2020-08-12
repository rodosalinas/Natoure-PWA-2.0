import styled from 'styled-components'

export default styled.div`
  width: 100%;
  height: 54px;
  border: solid 1px #f0f0f0;
  border-radius: 27px;
  display: flex;
  overflow: hidden;
  background-color: transparent;
  color: white;
  input {
    height: 100%;
    flex-grow: 1;
    border: none;
    color: white;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.13);
  }
  input::placeholder {
    color: white;
    font-size: 13px;
    text-align: center;
  }
  button {
    height: 100%;
    width: 114px;
    border: none;
    color: white;
    background-color: var(--green-natoure);
  }
`
