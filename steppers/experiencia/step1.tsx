import React, { useEffect, useState } from 'react'

import {
  Button,
  Disclaimer,
  GreenTab,
  Input,
  Label,
  SectionText,
  Select,
  Switch,
  Upload,
} from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step1 = ({ onStepChange }: Props): JSX.Element => {
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
    onStepChange(data, 2)
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
      <SectionText title="Rellena los siguientes campos con información acerca de tu experiencia, así los viajeros podrán saber más." />
      <Disclaimer
        bold="Nota importante:"
        text="Los datos personales recabados estarán protegidos, por favor revisa nuestra "
        link="politica de privacidad."
        href="/politica"
        style={{ marginTop: 48, marginBottom: 48 }}
      />
      <Label title="Nombre de la experiencia" />
      <Input name="experienceName" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Label title="Resumen de la experiencia" />
      <Disclaimer
        style={{ marginTop: 12, marginBottom: 24 }}
        text="Escribe de forma breve lo que harán los participantes de tu experiencia, los objetivos de la misma y que ofrece esta experiencia que la hace única."
      />
      <Input
        name="experienceResume"
        placeholder="Máximo 1000 caracteres"
        textarea
        onChange={handleChange}
      />
      <Label optional title="¿Qué actividades se realizan en esta experiencia?" />
      <Input
        name="experienceActivities"
        placeholder="Ingresa una o más actividades"
        onChange={handleChange}
      />
      {/* CHIPS INPUT */}
      <Label title="¿Esta es una experiencia recurrente o se da una sola vez?" />
      <Select
        name="experienceRecurrent"
        options={['Recurrente', 'Una sola vez']}
        onChange={handleChange}
      />
      <Label title="¿Cuál es el período de duración de tu experiencia?" />
      <div style={{ display: 'flex', width: '85vw', margin: '0 auto' }}>
        <Input
          number
          style={{ width: 48, margin: '0 24px 64px 0' }}
          name="experienceTime"
          placeholder="1 día"
          onChange={handleChange}
        />
        <Switch name="daysHours" first="Días" last="Horas" onChange={handleChange} />
      </div>
      <Disclaimer
        style={{ marginBottom: 48 }}
        text="Ponle un nombre a cada día de tu experiencia y describe brevemente las actividades que se realizarán cada día"
      />
      <GreenTab title="Día 1" />
      <Label title="Título del día" />
      <Input name="experienceDayName" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Label title="Descripción del día" />
      <Input
        name="experienceDayDescription"
        placeholder="Máximo 1000 caracteres"
        textarea
        onChange={handleChange}
      />
      <Label title="Sube algunas fotos o videos" />
      <Upload name="experiencePhotos" onChange={handleChange} />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step1
