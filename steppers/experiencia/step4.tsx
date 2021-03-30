import React, { useEffect, useState } from 'react'
import { Button, Disclaimer, Input, Label } from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step4 = ({ onStepChange }: Props): JSX.Element => {
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
    onStepChange(data, 5)
  }

  useEffect(() => {
    const dataArr = Object.values(form)
    if (dataArr.length === 2) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <Label title="Señala el lugar en donde recogerás al viajero" />
      <Input name="address" placeholder="Ingresa la dirección" onChange={handleChange} />
      {/* MAPA */}
      <Label title="Describe cómo llegar al punto de encuentro" />
      <Disclaimer
        style={{ marginTop: 12, marginBottom: 24 }}
        text="Recuerda que muchos de los participantes en tu experiencia no conocen el lugar, sé lo más claro posible con las indicaciones. Menciona avenidas principales o lugares conocidos que los ayuden a ubicarse mejor."
      />
      <Input
        name="addressDetails"
        placeholder="Máximo 1000 caracteres"
        textarea
        onChange={handleChange}
      />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step4
