/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/explore/Jumbo'
import HorizontalS from '../styles/general/HorizontalSlide'
import FWVideoStryles from '../styles/general/FWVideoStryles'
import Link from 'next/link'
import { ProfileBar, CategorySection, InclusiveSec } from '../styles/explore'
import {
  SectionHeading,
  SearchBar,
  CardDiscoverMap,
  VirtualCards,
  ExperienceCards,
  SustainableCards,
  CardWide,
} from '../styles/components'
import { OutlineBtn, Box, Divider, MarginBottom } from '../styles/general'
import Head from 'next/head'
import CardExplore from '../styles/components/Cards/CardExplore'
import NavBar from '../styles/components/NavBar'
import ProfileDrawer from '../styles/components/ProfileDrawer'
import PaymentCards from '../styles/profile/paymentMethods'
import AddPaymentCards from '../styles/profile/AddPayment'
import ProfileCard from '../styles/anfitrion/ProfileData'
import Preference from '../styles/profile/Preference';
import Configuracion from '../styles/profile/Configuracion'
import Resume from '../styles/anfitrion/ResumeUs'
import AddingCard from '../styles/anfitrion/addingCard'
import HeadingCert from '../styles/anfitrion/HeadingCert'
import AddingFiles from '../styles/anfitrion/addingFiles'
import SaveandBack from '../styles/anfitrion/saveandback'


const Certificados: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)

  const [renderProfile, setProfile] = React.useState(true);
  const [renderPayment, setPayment] = React.useState(false);
  const [renderPreferences, setPreferences] = React.useState(false);
  const [renderConfig, setConfig] = React.useState(false);

  const handleProfile = () => {
      setPayment(false)
      setPreferences(false)
      setConfig(false)
      setProfile(true)
  }

  const handlePayment = () => {
      setProfile(false)
      setPreferences(false)
      setConfig(false)
      setPayment(true)
}


const handleConfig = () => {
    setProfile(false)
    setPayment(false)
    setPreferences(false)
    setConfig(true)
}

    const profile = (
        <>
        <NavBar></NavBar>


        <HeadingCert 
        
        />
        
        <SectionHeading 
            title="¿Tienes alguna certificación, reconocimiento o distintivo que desees agregar?"
        />

      <AddingFiles 
        title="Certificaciones"
      />

      <AddingFiles 
        title="Reconocimientos"
      />

    <AddingFiles 
        title="Distintivos"
      />

      <SaveandBack />


            </>
      
    )

    const payment = (
      <>
       <NavBar></NavBar>
        <Jumbo>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
              Mi Organizacion
              </p>
            </div>
            <ProfileDrawer />
            <hr />
          </ProfileBar>
  
          <HorizontalS>
          <p onClick={handleProfile}><span className="here">Datos de mi Perfil</span></p>
          <p onClick={handleConfig}>Configuracion</p>
          </HorizontalS>
          </Jumbo>
  
        <HorizontalS shadow>
            <PaymentCards 
                metodos={[
                    {
                        name: "Paypal",
                        image: "https://logos-marcas.com/wp-content/uploads/2020/04/PayPal-emblema.jpg"
                    },
                    {
                        name: "MasterCard",
                        image: "https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
                    },
                    {
                        name: "Visa",
                        image: "https://tentulogo.com/wp-content/uploads/VISA-FB.jpg"
                    },
                ]}
            />
        </HorizontalS>
        <AddPaymentCards 
            addpayments={[
                {
                    name: "Tarjeta de Credito"
                },
                {
                    name: "Paypal"
                },
            ]}
        />
        </>
      )

      const preferences = (
        <>
         <NavBar></NavBar>
        <Jumbo>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
              Mi Organizacion
              </p>
            </div>
            <ProfileDrawer />
            <hr />
          </ProfileBar>
       
          <HorizontalS>
          <p onClick={handleProfile}>Datos de mi Perfil</p>
          <p onClick={handleConfig}>Configuracion</p>
          </HorizontalS>
          </Jumbo>
        <Preference 
        
        />
        </>
      )


      const config = (
        <>
         <NavBar></NavBar>
        <Jumbo>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
              Mi Organizacion
              </p>
            </div>
            <ProfileDrawer />
            <hr />
          </ProfileBar>
 
          <HorizontalS>
          <p onClick={handleProfile}>Datos de mi Perfil</p>
          <p onClick={handleConfig}><span className="here">Configuracion</span></p>
          </HorizontalS>
          </Jumbo>
        <Configuracion></Configuracion>
        </>
      )


  return (
    <MarginBottom>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Natoure</title>
        <link rel="manifest" href="/manifest.json" />
        <link href="/icons/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      {renderProfile ? profile : renderPayment ? payment : renderPreferences ? preferences : renderConfig ? config : <p>Loading...</p>}
        </MarginBottom>
  )
}

export default Certificados