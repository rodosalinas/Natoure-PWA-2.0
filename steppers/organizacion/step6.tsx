import React, { useEffect, useState } from 'react'
import { Button, SectionText } from '../../styles/forms'

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
    onStepChange(data, 6)
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
      <SectionText title="Si estás listo para publicar acepta los términos y condiciones y presiona el botón de abajo para que podamos aprobar tu registro." />
      <SectionText
        style={{ margin: '48px auto 64px auto' }}
        title="Acepto los términos y condiciones como anfitrión en la plataforma de Natoure."
      />
      {/* CHECKBOXES */}
      <Button unable={!validForm} onClick={handleClick} text="Publicar" />
    </>
  )
}

export default Step6
