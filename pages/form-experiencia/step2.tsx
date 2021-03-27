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

const Step2: React.FC = () => {
  return (
    <>
      <Heading
        title="Registra tu experiencia"
        stepName="Detalles de la experiencia"
        step={2}
        total={7}
      />
      <SectionHeading title="Define los detalles de tu experiencia" />
      <Label title="¿Qué incluye esta experiencia?" />
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
        text="Desayuno"
      />
      <Button
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Equipo especial"
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
        text="Almuerzo"
      />
      <ButtonOutlined
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Productos locales"
      />
      <Label title="¿Qué no incluye esta experiencia?" />
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
        text="Guía personalizado"
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
        text="Hospedaje"
      />
      <ButtonOutlined
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Comida"
      />
      <Label optional title="Ropa sugerida para el viajero" />
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
        text="Botas"
      />
      <Button
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Abrigo"
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
        text="Guantes"
      />
      <ButtonOutlined
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Pantalón de mezclilla"
      />
      <Label title="Idiomas en que se da la experiencia" />
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
        text="Español"
      />
      <Button
        style={{
          width: 'max-content',
          paddingRight: 12,
          paddingLeft: 12,
          marginBottom: 24,
          marginLeft: 32,
        }}
        text="Inglés"
      />
      <Label title="Esta actividad se realiza mejor en cierta temporada del año" />
      <div style={{ display: 'flex', marginLeft: 32, marginBottom: 48 }}>
        <Switch first="NO" last="SÍ" />
      </div>

      <Label title="¿Cuáles son los mejores meses para realizar esta actividad?" />
      <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
      <Label title="¿Para qué rango de edad se recomienda esta experiencia?" />
      <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
      <Label title="Nivel de dificultad de la experiencia" />
      <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
      <Label title="Número máximo de participantes" />
      <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
      <GreenTab style={{ marginBottom: 64 }} title="Precio por persona" />
      <SmallText title="Precio por persona" />
      <SmallText title="Monto neto que recibirás sin IVA" />
      <Input style={{ marginBottom: 64 }} placeholder="$ 1,600 MXN" />
      <GreenTab style={{ marginBottom: 64 }} title="Precio publicado para tu experiencia" />
      <SmallText title="Precio + IVA + Comisión Natoure" />
      <Input style={{ marginBottom: 64 }} placeholder="$ 1,368 MXN" />
      <Label title="¿Tu precio podrái cubrir el costo de más de un viajero?" />
      <Select style={{ marginBottom: 64 }} name="Selecciona de la lista" />
      <div style={{ marginBottom: 54 }}>
        <Disclaimer text="Al seleccionar esta opción tu experiencia entrará en promoción para hacerla más atractiva para que los viajeros se organicen en grupos de hasta 5 personas, esto nace al analizar todos los datos de ventas que hemos tenido y dado que la probabilidad nos indica que en promedio viajan 1.69 personas por cada reserva hecha, de esta manera la promoción funciona de la siguiente manera:" />
      </div>
      {/* <div style={{ marginBottom: 54 }}>
        <Disclaimer text="Si viaja una persona recibiras:" />
      </div> */}
      <Button style={{ marginBottom: 64 }} text="Continuar" />
    </>
  )
}

export default Step2
