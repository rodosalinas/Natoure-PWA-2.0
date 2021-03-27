import React from 'react'
import Link from 'next/link'

import {
  Button,
  Disclaimer,
  Heading,
  GreenTab,
  Input,
  Label,
  SectionHeading,
  SectionText,
  Select,
  SmallText,
  Switch,
  Textarea,
  Upload,
} from '../../styles/forms'

const Step1: React.FC = () => (
  <>
    <Heading title="Registra tu experiencia" stepName="Tu experiencia" step={1} total={7} />
    <SectionHeading title="Comienza a crear tu experiencia" />
    <SectionText title="Rellena los siguientes campos con información acerca de tu experiencia, así los viajeros podrán saber más." />
    <Disclaimer
      bold="Nota importante:"
      text="Los datos personales recabados estarán protegidos, por favor revisa nuestra "
      link="politica de privacidad."
      href="/politica"
      style={{ marginTop: 48, marginBottom: 48 }}
    />
    <Label title="Nombre de la experiencia" />
    <Input style={{ marginBottom: 64 }} placeholder="Ingresa el nombre" />
    <Label title="Resumen de la experiencia" />
    <Disclaimer
      style={{ marginTop: 12, marginBottom: 24 }}
      text="Escribe de forma breve lo que harán los participantes de tu experiencia, los objetivos de la misma y que ofrece esta experiencia que la hace única."
    />
    <Textarea style={{ marginBottom: 64 }} placeholder="Máximo 1000 caracteres" />
    <Label optional title="¿Qué actividades se realizan en esta experiencia?" />
    <SmallText title="Puedes elegir más de uno" />
    <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
    <Label title="Esta es una experiencia recurrente o se da una solo vez" />
    <Select style={{ marginBottom: 64 }} name="Recurrente" />
    <Label title="¿Cuál es el período de duración de tu experiencia?" />
    <div style={{ display: 'flex', width: '85vw' }}>
      <Input style={{ width: 48, marginBottom: 64 }} placeholder="1 día" />
      <Switch first="Días" last="Horas" />
    </div>
    <Disclaimer
      style={{ marginBottom: 48 }}
      text="Ponle un nombre a cada día de tu experiencia y describe brevemente las actividades que se realizarán cada día"
    />
    <GreenTab style={{ marginBottom: 64 }} title="Día 1" />
    <Label title="Título del día" />
    <Input style={{ marginBottom: 64 }} placeholder="Ingresa el nombre" />
    <Label title="Descripción del día" />
    <Textarea style={{ marginBottom: 64 }} placeholder="Máximo 1000 caracteres" />
    <Label title="Sube algunas fotos o videos" />
    <Upload style={{ marginTop: 24, marginBottom: 64 }} />
    <Button href="/form-experiencia/step2" style={{ marginBottom: 64 }} text="Continuar" />
  </>
)

export default Step1
