import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 85vw;
  margin-left: auto;
  margin-right: auto;
`

const Slider = styled.button(
  ({ first, last, active }: any) =>
    `
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  border: none;
  height: 44px;
  width: 136px;
  border-radius: 9999px;
  background: var(--light-grey);
  color: white;
  &:before,
  &:after {
    position: absolute;
    top: 10px;
    z-index: 999;
  }
  &:before {
    content: '${first}';
  }
  &:after {
    content: '${last}';
  }
  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 72px;
    height: 44px;
    border-radius: 9999px;
    background: var(--green-natoure);
  }
  &.active {
    > div {
      left: 64px;
    }
  }
  &.btn-sm {
    &:before,
    &:after {
      line-height: 1.5rem;
      width: 72px;
      text-align: center;
    }
    &:before {
      left: 0;
      color: ${active && 'var(--black)'};
    }
    &:after {
      right: 0;
      color: ${!active && 'var(--black)'};
    }
  }
`
)

type Props = {
  first: string
  last: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object
  name: string
  onChange: (string) => void
}

const Switch = ({ first, last, style, name, onChange }: Props): JSX.Element => {
  const [active, setActive] = useState(false)

  const handleChange = (target) => {
    setActive(!active)
    onChange!({ name: name, value: active ? first : last, valid: true })
  }

  useEffect(() => onChange!({ name: name, value: active ? last : first, valid: true }), [])

  return (
    <Wrapper>
      <Slider
        style={style}
        name={name}
        className={`btn btn-sm btn-toggle ${active && 'active'}`}
        onClick={({ target }) => handleChange(target)}
        {...{ first, last, active }}
      >
        <div />
      </Slider>
    </Wrapper>
  )
}

export default Switch

Switch.defaultProps = {
  style: { marginBottom: 64 },
  onChange: (values) => console.log(values),
}
