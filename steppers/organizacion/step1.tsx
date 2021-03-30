import React, { useEffect, useState } from 'react'

import {
  Button,
  Disclaimer,
  Input,
  Label,
  SectionText,
  Select,
  SmallText,
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
    if (dataArr.length === 16) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <SectionText title="Rellena los siguientes campos con información acerca de tu organización, así podras registrate y comenzar a ofrecer productos a los viajeros." />
      <Label title="Agrega una foto o el logo de tu organización" />
      <Upload name="organizationPhotos" onChange={handleChange} />
      <Label title="¿Cuál es el nombre de tu organización?" />
      <Input name="organizationName" placeholder="Ingresa el nombre" onChange={handleChange} />
      <Label title="País" />
      <Select
        name="organizationCountry"
        options={['México', 'Estados Unidos', 'Colombia']}
        onChange={handleChange}
      />
      <Label title="¿Qué tipo de organización son?" />
      <Select name="organizationType" options={['Pública', 'Privada']} onChange={handleChange} />
      <Label title="¿Brindan algún tipo de experiencia turística?" />
      <Switch name="isTouristic" first="Sí" last="No" onChange={handleChange} />
      <Label title="Tipo de experiencias turísticas que brindan" />
      <Input name="tourTypes" placeholder="Ingresa uno o más campos" onChange={handleChange} />
      {/* CHeckboxes*/}
      <Label title="Tipo de actividades que realizan" />
      <Input
        name="activitiesTypes"
        placeholder="Ingresa uno o más campos"
        onChange={handleChange}
      />
      {/* CHeckboxes*/}
      <Label title="¿Cuentan con algún tipo de hospedaje?" />
      <Switch name="hospedaje" first="No" last="Sí" onChange={handleChange} />
      <Label title="¿Cuentan con un restaurant o experiencia gastronómica?" />
      <Switch name="restaurant" first="No" last="Sí" onChange={handleChange} />
      <Label title="¿Cuántas personas conforman su organización?" />
      <div
        style={{ display: 'flex', width: '85vw', margin: '0 auto 64px auto', alignItems: 'center' }}
      >
        <Input
          number
          style={{ width: 48, marginRight: '18px' }}
          name="organizationPeople"
          placeholder="4"
          onChange={handleChange}
        />
        <SmallText black title="Personas" style={{}} />
      </div>
      <Label title="De estas ¿cuántas son mujeres?" />
      <div
        style={{ display: 'flex', width: '85vw', margin: '0 auto 64px auto', alignItems: 'center' }}
      >
        <Input
          number
          style={{ width: 48, marginRight: '18px' }}
          name="organizationWomen"
          placeholder="4"
          onChange={handleChange}
        />
        <SmallText black title="Mujeres" style={{}} />
      </div>
      <Label title="¿Quiénes son? ¿Cuál es su historia?" />
      <Disclaimer
        style={{ marginTop: 12, marginBottom: 24 }}
        text="Cuéntanos que es lo que los motiva, cuál es el cambio que quieren lograr, desde cuándo existen como organización, su experiencia y trayectoria... en fin, todo eso que quieres que el viajero conozca de ustedes."
      />
      <Input
        name="organizationStory"
        placeholder="Máximo 1000 caracteres"
        textarea
        onChange={handleChange}
      />
      <Label optional title="¿Pertenecen a algún pueblo o comunidad indígena?" />
      <Input name="organizationCominity" placeholder="Ingresa el nombre" onChange={handleChange} />
      {/* CHIPS INPUT */}
      <Label optional title="¿Hablan una lengua o dialecto indígena?" />
      <Input name="organizationLang" placeholder="Ingresa el nombre" onChange={handleChange} />
      {/* CHIPS INPUT */}
      <Label title="Nuestras políticas de turismo incluyente" />
      <Input name="organizationPolitics" placeholder="Ingresa el nombre" onChange={handleChange} />
      {/* CHECKBOXES */}
      <Label optional title="Número de inscripción al Registro Nacional de Turismo" />
      <Input name="organizationRegister" placeholder="Ingresa el número" onChange={handleChange} />
      {/* CHECKBOXES */}
      {/* FALTA SECCIÓN DE NORMAS PARA EL VIAJERO */}
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step1
