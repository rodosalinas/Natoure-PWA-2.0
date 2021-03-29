import React, { useEffect, useState } from 'react'
import { Button, GreenTab, Input, Label, Switch, Upload } from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step3 = ({ onStepChange }: Props): JSX.Element => {
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
    onStepChange(data, 4)
  }

  useEffect(() => {
    const dataArr = Object.values(form)
    if (dataArr.length === 8) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <Label title="¿En esta experiencia se consumen bebidas alcohólicas?" />
      <Switch name="alcoholic" first="Sí" last="No" onChange={handleChange} />
      <Label title="Atributos extra de la experiencia" />
      {/* CHECKBOXES */}
      <Label title="¿En esta experiencia pueden participar personas con discapacidad?" />
      <Switch name="disabledPeople" first="Sí" last="No" onChange={handleChange} />
      <Label title="¿Con qué tipo de discapacidad?" />
      {/* CHECKBOXES */}
      <Label title="Agrega etiquetas para que los usuarios puedan encontrar tu experiencia" />
      <Input name="searchTags" placeholder="Ingresa una o más etiquetas" onChange={handleChange} />
      {/* CHIPS INPUT */}
      <GreenTab title="Atractivos de la experiencia" />
      <Label title="Fauna" />
      <Upload name="faunaPhotos" onChange={handleChange} />
      <Label title="Flora" />
      <Upload name="floraPhotos" onChange={handleChange} />
      <Label optional title="¿Durante esta experiencia se visita algún atractivo cultural?" />
      <Switch name="culturalVisit" first="Sí" last="No" onChange={handleChange} />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step3
