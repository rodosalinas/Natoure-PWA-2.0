import React, { useEffect, useState } from 'react'
import { Button, Disclaimer, GreenTab, Label, SectionText, Upload } from '../../styles/forms'

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
    if (dataArr.length === 2) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <GreenTab title="Video o foto de presentación" />
      <Label title="Sube tu archivo" />
      <Upload name="mainPhoto" onChange={handleChange} />
      <SectionText title='Es la forma de presentarte con los natouristas y de mostrar el trabajo que hacen como organización. Los videos se muestran en tu perfil de "ANFITRIÓN"' />
      <SectionText title="Consejos...." />
      <GreenTab title="Tu galería" />
      <Label title="Sube más fotos para mostrar en tu galería" />
      <Upload name="photos" onChange={handleChange} />
      <SectionText title="Muestrale al mundo quienes son a través de imágenes o de un vídeo de máximo 2 minutos." />
      <SectionText title="Consejos...." />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step5
