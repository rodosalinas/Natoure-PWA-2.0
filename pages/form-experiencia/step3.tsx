import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../../styles/explore/Jumbo'
import HorizontalS from '../../styles/general/HorizontalSlide'
import FWVideoStryles from '../../styles/general/FWVideoStryles'
import Link from 'next/link'
import { ProfileBar, CategorySection, InclusiveSec } from '../../styles/explore'
import {
  SearchBar,
  CardDiscoverMap,
  VirtualCards,
  ExperienceCards,
  SustainableCards,
  CardWide,
} from '../../styles/components'
import Head from 'next/head'
import CardExplore from '../../styles/components/Cards/CardExplore'
import NavBar from '../../styles/components/NavBar'
import ProfileDrawer from '../../styles/components/ProfileDrawer'
import PaymentCards from '../../styles/profile/paymentMethods'
import AddPaymentCards from '../../styles/profile/AddPayment'
import ProfileCard from '../../styles/anfitrion/ProfileData'
import Preference from '../../styles/profile/Preference'
import Configuracion from '../../styles/profile/Configuracion'
import Resume from '../../styles/anfitrion/ResumeUs'
import AddingCard from '../../styles/anfitrion/addingCard'
import {
  Button,
  ButtonOutlined,
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
import AddingFiles from '../../styles/anfitrion/addingFiles'
import SaveandBack from '../../styles/anfitrion/saveandback'

const Step3: React.FC = () => {
  return (
    <>
      <Heading
        title="Registra tu experiencia"
        stepName="Detalles complementarios"
        step={3}
        total={7}
      />
      <SectionHeading title="Define los detalles de tu experiencia" />
      <Label title="¿En esta experiencia se consumen bebidas alcohólicas?" />
      <div style={{ display: 'flex', marginLeft: 32, marginBottom: 48 }}>
        <Switch first="NO" last="SÍ" />
      </div>
      <Label title="Atributos extra de la experiencia" />
      <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
      <Label title="¿En esta experiencia pueden participar personas con discapacidad?" />
      <div style={{ display: 'flex', marginLeft: 32, marginBottom: 48 }}>
        <Switch first="NO" last="SÍ" />
      </div>
      <Label title="Elige etiquetas para que los usuarios puedan encontrar tu experiencia" />
      <SmallText title="Puedes elegir más de uno" />
      <Select style={{ marginBottom: 24 }} name="Selecciona de la lista" />
      <Button
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Viaje de familia"
      />
      <Button
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Voluntariado"
      />
      <SmallText title="Tags relacionadas" />
      <ButtonOutlined
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Adultos mayores"
      />
      <ButtonOutlined
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Parejas"
      />
      <GreenTab style={{ marginBottom: 64 }} title="Atractivos de la experiencia" />
      <Label title="Fauna" />
      <Upload style={{ marginBottom: 64 }} />
      <Label title="Flora" />
      <Input style={{ marginBottom: 24 }} placeholder="Nombre común" />
      <Input style={{ marginBottom: 24 }} placeholder="Nombre científico" />
      <SmallText title="¿Esta especie es prioritaria?" />
      <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
      <SmallText title="Sube fotos de la especie" />
      <Upload style={{ marginBottom: 64 }} />
      <SmallText title="Formatos aceptados: mpg, mpedg, gif, png de máximo 100 Mb" />
      <ButtonOutlined style={{ marginBottom: 64 }} text="Guardar" />
      <Label optional title="¿Durante esta experiencia sevisita algún atractivo natural?" />
      <SmallText title="Puedes elegir más de uno" />
      <Input style={{ marginBottom: 64 }} placeholder="Buscar" />
      <Button style={{ marginBottom: 64 }} text="Continuar" />
    </>
  )
}

export default Step3
