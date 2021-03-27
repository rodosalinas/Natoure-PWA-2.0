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

const Step4: React.FC = () => (
  <>
    <Heading title="Registra tu experiencia" stepName="Ubicación" step={4} total={7} />
    <SectionHeading title="Registra dónde se ubica la experiencia" />
    <Label title="Señala el lugar en donde recogeras al viajero" />
    <Input style={{ marginBottom: 64 }} placeholder="Ingresa la dirección" />
    <Label title="Describe cómo llegar al punto de encuentro" />
    <div style={{ marginTop: 12, marginBottom: 24 }}>
      <Disclaimer text="Recuerda que muchos de los participantes en tu experiencia no conocen el lugar, sé lo más claro posible con las indicaciones. Menciona avenidas principales o lugares conocidos que los ayuden a ubicarse mejor." />
    </div>
    <Textarea style={{ marginBottom: 64 }} placeholder="Máximo 500 caracteres" />
    <Button style={{ marginBottom: 64 }} text="Continuar" />
  </>
)

export default Step4
