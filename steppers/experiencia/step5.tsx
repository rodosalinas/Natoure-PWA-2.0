import React, { useEffect, useState } from 'react'
import { Button, Input, Label, Select } from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step5 = ({ onStepChange }: Props): JSX.Element => {
  const [form, setForm] = useState({})
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    e.valid &&
      setForm((prevState) => {
        return {
          ...prevState,
          [e.name]: e,
        }
      })
  }

  const handleClick = () => {
    const data = Object.keys(form).reduce((acc, key) => {
      return { ...acc, [key]: form[key].value }
    }, {})
    onStepChange(data, 6)
  }

  useEffect(() => {
    const dataArr = Object.values(form)
    if (dataArr.length === 3) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <Label title="¿Cada cuánto se repite la experiencia?" />
      <Select
        name="repetition"
        options={[
          'Diariamente',
          'Semanalmente',
          'Quincenalmente',
          'Mensualmente',
          'Anuanmente',
          'Nunca',
        ]}
        onChange={handleChange}
      />
      <Label title="Ingresa los días/fechas en que se llevará a cabo la experiencia" />
      <Input
        number
        name="experienceDate"
        placeholder="Cada primer domingo del mes"
        onChange={handleChange}
      />
      <Label title="¿A qué hora comienza la experiencia?" />
      <Input number name="experienceHour" placeholder="13:00 hrs" onChange={handleChange} />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step5
