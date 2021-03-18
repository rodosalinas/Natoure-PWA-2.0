/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/explore/Jumbo'
import Link from 'next/link'
import HorizontalS from '../styles/general/HorizontalSlide'
import { ProfileBar, CategorySection, InclusiveSec } from '../styles/explore'
import {
  SectionHeading,
  SearchBar,
  CardDiscoverMap,
  VirtualCards,
  ExperienceCards,
  SustainableCards
} from '../styles/components'
import { OutlineBtn, Box, Divider, MarginBottom } from '../styles/general'
import Head from 'next/head'
import FilterBar from '../styles/components/FilterBar'
import CardExplore from '../styles/components/Cards/CardExplore'
import NavBar from '../styles/components/NavBar'
import ProfileDrawer from '../styles/components/ProfileDrawer'
import AddProduct from '../styles/anfitrion/addProduct'

const productos: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)

  const [gastronomia, setGastronomia] = React.useState(true);
  const [hospedaje, setHospedaje] = React.useState(false);
  const [experiencia, setExperiencia] = React.useState(false);
  const [expVirtual, setVirtual] = React.useState(false);

  const handleGastronomia = () => {
      setVirtual(false)
      setExperiencia(false)
      setHospedaje(false)
      setGastronomia(true)
  }

  const handleHospedaje = () => {
    setVirtual(false)
    setExperiencia(false)
    setGastronomia(false)
    setHospedaje(true)
}

const handleExperiencia = () => {
    setVirtual(false)
    setHospedaje(false)
    setGastronomia(false)
    setExperiencia(true)
}

const handleEVirtual = () => {
    setExperiencia(false)
    setGastronomia(false)
    setHospedaje(false)
    setVirtual(true)
}

    const gastronomiaS = (
        <>
        <NavBar></NavBar>
      <Jumbo>
        <ProfileBar>
          <div>
            <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
          </div>
          <div>
            <p>
              Mis Productos
            </p>
          </div>
          <ProfileDrawer />
          <hr />
        </ProfileBar>
        <FilterBar placeholder="Busca por ubicación, nombre…" />
        <HorizontalS>
        <p onClick={handleGastronomia}><span className="here">Gastronomia</span></p>
          <p onClick={handleHospedaje}>Hospedaje</p>
          <p onClick={handleExperiencia}>Experiencia</p>
          <p onClick={handleEVirtual}>Exp Virtual</p>
        </HorizontalS>
      </Jumbo>
<AddProduct 
    product="Una nueva Gastronomia"
/>


            </>
      
    )

    const hospedajeS = (
      <>
 <NavBar></NavBar>
        <Jumbo>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
                Mis Productos
              </p>
            </div>
            <ProfileDrawer />

            <hr />
          </ProfileBar>
          <FilterBar placeholder="Busca por ubicación, nombre…" />
          <HorizontalS>
        <p onClick={handleGastronomia}>Gastronomia</p>
          <p onClick={handleHospedaje}><span className="here">Hospedaje</span></p>
          <p onClick={handleExperiencia}>Experiencia</p>
          <p onClick={handleEVirtual}>Exp Virtual</p>
        </HorizontalS>
        </Jumbo>
        <AddProduct 
    product="Una nuevo Hospedaje"
/>
        </>
      )

      const experienciaS = (
        <>
    <NavBar></NavBar>
        <Jumbo>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
                Mis Productos
              </p>
            </div>
            <ProfileDrawer />
            <hr />
          </ProfileBar>
          <FilterBar placeholder="Busca por ubicación, nombre…" />
          <HorizontalS>
        <p onClick={handleGastronomia}>Gastronomia</p>
          <p onClick={handleHospedaje}>Hospedaje</p>
          <p onClick={handleExperiencia}><span className="here">Experiencia</span></p>
          <p onClick={handleEVirtual}>Exp Virtual</p>
        </HorizontalS>
        </Jumbo>
        <AddProduct 
    product="Una nueva Experiencia"
/>
        </>
      )

      const expVirtualS = (
        <>
    <NavBar></NavBar>
        <Jumbo>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
                Mis Productos
              </p>
            </div>
            <ProfileDrawer />
            <hr />
          </ProfileBar>
          <FilterBar placeholder="Busca por ubicación, nombre…" />
          <HorizontalS>
        <p onClick={handleGastronomia}>Gastronomia</p>
          <p onClick={handleHospedaje}>Hospedaje</p>
          <p onClick={handleExperiencia}>Experiencia</p>
          <p onClick={handleEVirtual}><span className="here">Exp Virtual</span></p>
        </HorizontalS>
        </Jumbo>
        <AddProduct 
    product="Una nueva Experiencia Virtual"
/>
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
      {gastronomia ? gastronomiaS : hospedaje ? hospedajeS : experiencia ? experienciaS : expVirtual ? expVirtualS : <p>Loading...</p>}
        </MarginBottom>
  )
}

export default productos