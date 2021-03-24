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
import PagosC from '../styles/anfitrion/pagosCompleto'
import NavAnfi from '../styles/components/NavAnfitrion';

const pgosdetails: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)

  const [completados, setCompletados] = React.useState(true);
  const [pendientes, setPendientes] = React.useState(false);

  const handleCompletados = () => {
      setPendientes(false)
      setCompletados(true)
  }

  const handlePendientes = () => {
    setCompletados(false)
    setPendientes(true)
}

    const renderCompletados = (
        <>
        <NavAnfi></NavAnfi>
      <Jumbo>
        <ProfileBar>
          <div>
            <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
          </div>
          <div>
            <p>
              Mis Pagos
            </p>
          </div>
          <ProfileDrawer />
          <hr />
        </ProfileBar>
        <HorizontalS>
        <p onClick={handleCompletados}><span className="here">Completados</span></p>
          <p onClick={handlePendientes}>Pendientes </p>
        </HorizontalS>
      </Jumbo>
      <PagosC 
            image="https://upload.wikimedia.org/wikipedia/commons/9/95/Trajinera.JPG"
            title="Cosecha en Xochimilco"
            date="5 jun 2020"
            priceingreso="$0.00"
            total="$0.00"
        />


            </>
      
    )

    const renderPendientes = (
      <>
 <NavBar></NavBar>
        <Jumbo>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
                Mis Pagos
              </p>
            </div>
            <ProfileDrawer />

            <hr />
          </ProfileBar>
          <HorizontalS>
          <p onClick={handleCompletados}>Completados</p>
          <p onClick={handlePendientes}><span className="here">Pendientes</span></p>
        </HorizontalS>
        </Jumbo>
        <PagosC 
            image="https://upload.wikimedia.org/wikipedia/commons/9/95/Trajinera.JPG"
            title="Cosecha en Xochimilco"
            date="5 jun 2020"
            priceingreso="$0.00"
            total="$0.00"
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
      {completados ? renderCompletados : pendientes ? renderPendientes : <p>Loading...</p>}
        </MarginBottom>
  )
}

export default pagosDetails