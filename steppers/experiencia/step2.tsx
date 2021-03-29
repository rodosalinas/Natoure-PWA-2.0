import React, { useEffect, useState } from 'react'
import { BsReplyFill } from 'react-icons/bs'
import {
  Button,
  Disclaimer,
  GreenTab,
  Input,
  Label,
  Select,
  SmallText,
  Switch,
} from '../../styles/forms'

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
    if (dataArr.length === 14) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <Label title="¿Qué incluye esta experiencia?" />
      <Input
        name="experienceIncludes"
        placeholder="Ingresa uno o más campos"
        onChange={handleChange}
      />
      {/* CHIPS INPUT */}
      <Label title="¿Qué no incluye esta experiencia?" />
      <Input
        name="experienceNotIncludes"
        placeholder="Ingresa uno o más campos"
        onChange={handleChange}
      />
      {/* CHIPS INPUT */}
      <Label optional title="Ropa sugerida para el viajero" />
      <Input
        name="sugestedClothes"
        placeholder="Ingresa uno o más campos"
        onChange={handleChange}
      />
      {/* CHIPS INPUT */}
      <Label title="Idiomas en que se da la experiencia" />
      <Input
        name="experienceNotIncludes"
        placeholder="Ingresa uno o más campos"
        onChange={handleChange}
      />
      {/* CHIPS INPUT */}
      <Label title="Esta actividad se realiza mejor en cierta temporada del año" />
      <Switch name="bestSeason" first="Sí" last="No" onChange={handleChange} />
      <Label title="¿Cuáles son los mejores meses para realizar esta actividad?" />
      <Input name="bestMonths" placeholder="Ingresa uno o más campos" onChange={handleChange} />
      {/* CHIPS INPUT */}
      <Label title="¿Para qué rango de edad se recomienda esta experiencia?" />
      <Input name="ageRange" placeholder="Ingresa el rango" onChange={handleChange} />
      <Label title="Nivel de dificultad de la experiencia" />
      {/* CHECKBOXES */}
      <Label title="Número máximo de participantes" />
      <div
        style={{ display: 'flex', width: '85vw', margin: '0 auto 64px auto', alignItems: 'center' }}
      >
        <Input
          number
          style={{ width: 48, marginRight: '18px' }}
          name="maxPersons"
          placeholder="4"
          onChange={handleChange}
        />
        <SmallText black title="Personas" style={{}} />
      </div>
      <GreenTab style={{ marginBottom: 32 }} title="Precio por persona" />
      <SmallText black title="Monto neto que recibirás sin IVA" />
      <div style={{ display: 'flex', width: '85vw', margin: '0 auto' }}>
        <Input
          number
          style={{ width: 48, margin: '0 18px 64px 0' }}
          name="personPayment"
          placeholder="$ 1,600"
          onChange={handleChange}
        />
        <Select
          style={{ width: '100%' }}
          name="currency"
          options={['MXN', 'USD', 'EUR']}
          onChange={handleChange}
        />
      </div>
      <GreenTab style={{ marginBottom: 32 }} title="Precio publicado para tu experiencia" />
      <SmallText black title="Precio + IVA + Comisión Natoure" />
      <div style={{ display: 'flex', width: '85vw', margin: '0 auto' }}>
        <Input
          number
          style={{ width: 48, margin: '0 18px 64px 0' }}
          name="personCost"
          placeholder="$ 1,368"
          onChange={handleChange}
        />
        <Select
          style={{ width: '100%' }}
          name="currency"
          options={['MXN', 'USD', 'EUR']}
          onChange={handleChange}
        />
      </div>
      <Label title="¿Tu precio podría cubrir el costo de más de un viajero?" />
      <Switch name="canPay" first="Sí" last="No" onChange={handleChange} />
      <Disclaimer
        style={{ marginBottom: 64 }}
        text={
          <>
            Al seleccionar esta opción tu experiencia entrará en promoción para hacerla más
            atractiva para que los viajeros se organicen en grupos de hasta 5 personas, esto nace al
            analizar todos los datos de ventas que hemos tenido y dado que la probabilidad nos
            indica que en promedio viajan 1.69 personas por cada reserva hecha, de esta manera la
            promoción funciona de la siguiente manera, si viaja: <br />
            una persona recibirás: <i>$1,000</i>
            <br />
            dos personas recibirás: <i>$1,900</i>
            <br />
            tres personas recibirás: <i>$2,700</i>
            <br />
            cuatro personas recibirás: <i>$3,400</i>
            <br />
            cinco personas recibirás: <i>$4,000</i>
          </>
        }
      />
      <div style={{ display: 'flex', width: '85vw', margin: '0 auto 64px auto' }}>
        <div
          style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
        >
          <BsReplyFill style={{ color: 'var(--green-natoure)', fontSize: 80, marginRight: 16 }} />
          <SmallText
            black
            style={{ width: '100%' }}
            title="Tu experiencia aparecerá con esta etiqueta cuando esté en promoción"
          />
        </div>
        <img src="/icons/promo.jpg" alt="promo" />
      </div>
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step2
