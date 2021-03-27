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
import AddingFiles from '../../styles/anfitrion/addingFiles'
import SaveandBack from '../../styles/anfitrion/saveandback'

const Step6: React.FC = () => {
  return (
    <>
      <Heading title="Registra tu experiencia" stepName="Fotos y videos" step={6} total={7} />
      <SectionHeading title="Sube fotos y videos de la experiencia" />
      <GreenTab title="Video o foto de presentación" />
      <Disclaimer text='Esta foto o video será lo primero que el viajero vea al entrar al perfil de tu experiencia, debe ser una imagen "increíble" que lo enganche y lo haga sentir que tu experiencia es imperdible.' />
      <Label title="Sube tu archivo" />
      <Upload />
      <SmallText title="Formatos aceptados: mpg, mpedg, gif, png de máximo 100 Mb" />
      <Label title="Sube más fotos para cargar en tu galería" />
      <Upload />
      <SmallText title="Formatos aceptados: mpg, mpedg, gif, png de máximo 100 Mb" />
      <div style={{ marginTop: 40, marginBottom: 64 }}>
        <Disclaimer text="Tu galeria de fotos es la forma perfecta para que el viajero pueda ver un poco de lo que él vivirá durante tu experiencia. Sube tantas fotos o videos como concideres necesario." />
      </div>
      <Label title="Consejos" />
      <Button text="Continuar" />
    </>
  )
}

export default Step6
