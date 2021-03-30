import React, { useEffect, useState } from 'react'
import { Button, Disclaimer, Input, Label, Select, Switch } from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step2 = ({ onStepChange }: Props): JSX.Element => {
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
    onStepChange(data, 3)
  }

  useEffect(() => {
    const dataArr = Object.values(form)
    if (dataArr.length === 9) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <Label title="Estado / Departamento" />
      <Input name="orgState" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Label title="Municipio" />
      <Input name="orgMunicipio" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Label optional title="¿Estas cerca de un área de conservación?" />
      <Disclaimer
        style={{ marginTop: 12, marginBottom: 24 }}
        text="Un Área de Importancia de Conservación (AIC) es un espacio natural o restaurado, el cual se encuentra bajo una jurisdicción Internacional, nacional, estatal, municipal y/o local, administrado de manera pública, privada, en cogestión o de forma comunitaria. También se consideran todos los territorios indígenas y autónomos, así como territorios que brindan conectividad para que los servicios y bienes ecosistémicos se mantengan en el tiempo."
      />
      <Switch name="consarea" first="Sí" last="No" onChange={handleChange} />
      <Label title="¿Dónde esta ubicada tu organización?" />
      <Input name="orgAddress" placeholder="Ingresa tu dirección" onChange={handleChange} />
      {/* MAPA */}
      <Label title="Describe cómo llegar (asumiendo que un viajero va por su cuenta)" />
      <Input name="arrive" placeholder="Máximo 1000 caracteres" textarea onChange={handleChange} />
      <Label title="Elige el destino sostenible más cercano a ti" />
      <Select
        name="destino"
        options={['Opción 1', 'Opción 2', 'Opción 3']}
        onChange={handleChange}
      />
      <Label title="¿Cuál es la población o ciudad más cercana?" />
      <Input name="nearCity" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Label title="¿Cuál es el aeropuerto más cercano?" />
      <Input name="nearAirport" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Label title="¿Cuál es la terminal de bus más cercana?" />
      <Input name="nearBus" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step2
