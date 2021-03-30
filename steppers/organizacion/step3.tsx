import React, { useEffect, useState } from 'react'
import {
  Button,
  Disclaimer,
  GreenTab,
  Input,
  Label,
  SmallText,
  Switch,
  Upload,
} from '../../styles/forms'

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
    if (dataArr.length === 6) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <Disclaimer
        text="El e-mail será el principal medio de contacto con Natoure, en el recibirás avisos cada vez que un natourista reserve una de tus experiencias."
        style={{ marginTop: 48, marginBottom: 48 }}
      />
      <Label title="E-mail de tu organización" />
      <Input name="orgMail" placeholder="mail@organizacion.com" onChange={handleChange} />
      <Label title="Número de Teléfono" />
      <Input
        number
        style={{ marginBottom: 24 }}
        name="orgNumber"
        placeholder="(+52)"
        onChange={handleChange}
      />
      <SmallText title="¿Este número cuenta con Whatsapp?" />
      <Switch name="haveWA" first="Sí" last="No" onChange={handleChange} />
      <Label optional title="Redes sociales" />
      <Input
        style={{ marginBottom: 24 }}
        name="orgFB"
        placeholder="facebook.com/"
        onChange={handleChange}
      />
      <Input
        style={{ marginBottom: 24 }}
        name="orgIG"
        placeholder="instagram.com/"
        onChange={handleChange}
      />
      <Input name="orgWeb" placeholder="www.tusitioweb.com/" onChange={handleChange} />
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step3
