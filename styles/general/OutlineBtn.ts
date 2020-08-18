import styled from 'styled-components'

type BtnProps = {
  btnType: 'primary' | 'secondary'
}

export default styled('button')<BtnProps>`
  width: 218px;
  height: 44px;
  border-radius: 22px;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.07;
  letter-spacing: -0.03px;
  color: var(--dark-blue);
  background-color: transparent;
  width: 216px;
  height: 44px;
  border-radius: 8px;
  box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px ${(props) => (props.btnType === 'primary' ? 'var(--green-natoure)' : 'red')};
`
