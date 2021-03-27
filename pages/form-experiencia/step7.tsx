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

const Step7: React.FC = () => {
  return (
    <>
      <Heading title="Registra tu experiencia" stepName="Confirmación" step={7} total={7} />
      <SectionHeading title="Confirma tus datos" />
      <SectionText title="Si estas listo para publicar, confirma las condiciones de abajo y presiona el botón de enviar mi registro para finalizar." />
      <SectionText title="Confirmo que soy propietario y/o tengo las licencias de uso así como que mi experiencia cumple con las legislaciones y leyes locales." />
      <Button text="Publicar" />
    </>
  )
}

export default Step7
