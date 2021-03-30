import React, { useEffect, useState } from 'react'
import { Button, SectionText } from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step7 = ({ onStepChange }: Props): JSX.Element => {
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
    if (dataArr.length === 8) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <SectionText title="Si estás listo para publicar, confirma las condiciones de abajo y presiona el botón de Publicar para finalizar." />
      <SectionText
        style={{ margin: '48px auto 64px auto' }}
        title="Confirmo que soy propietario y/o tengo las licencias de uso, así como que mi experiencia cumple con las legislaciones y leyes locales."
      />
      {/* CHECKBOXES */}
      <Button unable={!validForm} onClick={handleClick} text="Publicar" />
    </>
  )
}

export default Step7
