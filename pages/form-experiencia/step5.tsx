import React from 'react'
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
  Textarea,
  Upload,
} from '../../styles/forms'

const Step5: React.FC = () => (
  <>
    <Heading title="Registra tu experiencia" stepName="Calendario" step={5} total={7} />
    <SectionHeading title="Registra las fechas para tu experiencia" />
    <Label title="Frecuencia de la Experiencia" />
    <Select name="Personalizado" />
    <Label title="Repetir" />
    <Select name="Mensualmente" />
    <Label title="Elige los días del mes en que se llevará a cabo la experiencia" />
    <Select name="Primer" />
    <Select name="domingo" />
    <SmallText title="( p/e el primer domingo del mes )" />
    <Button text="Continuar" />
  </>
)

export default Step5
