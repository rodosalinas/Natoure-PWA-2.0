import styled from 'styled-components'

type BtnProps = {
  btnType: 'primary' | 'secondary' | 'third'
}

export default styled('button')<BtnProps>`
  width: 218px;
  height: 44px;
  border-radius: 22px;
  box-shadow: -2px 4px 12px 0 rgba(0, 0, 0, 0.31);
  color: white;
  border: none;
  font-weight: bold;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.07;
  letter-spacing: -0.03px;
  color: #ffffff;
  background-color: ${(props) => (props.btnType === 'primary' ? 'var(--green-natoure)' : 'secondary' ? 'var(--fb-blue)': 'third' ? 'var(--fb-blue)':null)};
`
