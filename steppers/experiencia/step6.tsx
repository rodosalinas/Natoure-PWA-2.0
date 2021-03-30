import React, { useEffect, useState } from 'react'
import { Button, Disclaimer, GreenTab, Label, Upload } from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step6 = ({ onStepChange }: Props): JSX.Element => {
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
    onStepChange(data, 7)
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
      <div style={{ display: 'flex', marginBottom: 64, justifyContent: 'center' }}>
        <img src="/icons/tips.png" alt="tips" style={{ width: 238 }} />
      </div>{' '}
      <GreenTab title="Video o foto de presentación" />
      <Disclaimer
        style={{ marginBottom: 48 }}
        text='Esta foto o video será lo primero que el viajero vea al entrar al perfil de tu experiencia, debe ser una imagen "increíble" que lo enganche y lo haga sentir que tu experiencia es imperdible.'
      />
      <Label title="Sube tu archivo" />
      <Upload name="mainPhoto" onChange={handleChange} />
      <Label title="Sube más fotos para mostrar en tu galería" />
      <Upload name="photos" onChange={handleChange} />
      <Disclaimer
        style={{ marginTop: 48, marginBottom: 64 }}
        text="Tu galeria de fotos es la forma perfecta para que el viajero pueda ver un poco de lo que él vivirá durante tu experiencia. Sube tantas fotos o videos como consideres necesario."
      />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step6
