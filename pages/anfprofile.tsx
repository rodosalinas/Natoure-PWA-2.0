/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/explore/Jumbo'
import HorizontalS from '../styles/general/HorizontalSlide'
import Link from 'next/link'
import { ProfileBar, CategorySection, InclusiveSec } from '../styles/explore'
import {
  SectionHeading,
  SearchBar,
  CardDiscoverMap,
  VirtualCards,
  ExperienceCards,
  SustainableCards
} from '../styles/components'
import NavBar from '../styles/components/NavBar'
import { OutlineBtn, Box, Divider, MarginBottom } from '../styles/general'
import Head from 'next/head'
import FilterBar from '../styles/components/FilterBar'
import CardExplore from '../styles/components/Cards/CardExplore'
import  FoodCard  from '../styles/components/Cards/FoodCard'
import RestaurantCard from '../styles/components/Cards/RestaurantCard'
import ProfileDrawer from '../styles/components/ProfileDrawer'
import ProfHeading from '../styles/anfitrion/ProfHeading'
import Resumen from '../styles/anfitrion/Resumen'
import Discover from '../styles/restaurants/discover'
import Gallery from '../styles/restaurants/Gallery'

const explora: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)

  const [renderNatural, setNatural] = React.useState(true);
  const [renderSustain, setSustain] = React.useState(false);
  const [renderRoutes, setRoutes] = React.useState(false);

  const handleNatural = () => {
      setSustain(false)
      setRoutes(false)
      setNatural(true)
  }

  const handleSustain = () => {
      setNatural(false)
      setRoutes(false)
    setSustain(true)
  }

  const handleRoutes = () => {
    setSustain(false)
    setNatural(false)
    setRoutes(true)
  }

  console.log(data)
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
      <NavBar></NavBar>

      <ProfHeading 

      />

      <Resumen />

      <SectionHeading title="Descubre lo que hay para tí" />

      <Discover 

      />

      <SectionHeading title="Mejora tus productos con estos tips" />  

      <Gallery />

    </MarginBottom>
  )
}

export default explora
