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
import Heading from '../styles/experience/headingcard'
import Resume from '../styles/experience/resumeCard';
import LearnCard from '../styles/experience/learnCard';


const experience: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)




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
      <NavBar />
      <Heading 
      title="Restauración Ecológica y Desarrollo." 
      rating={5}
      sustainable={4.3}
      likes={26}
      duration= "2 hrs"
      />
      <Resume 
        title="Resumen de la Experiencia Virtual"
        poblacion="Zapotecas"
        description="Podremos disfrutar de un día en contacto con la naturaleza, observando aves, ajolotes, paisajes y + el trabajo en una chinampa, además de aprender acerca de las técnicas agrícolas. Un chef nos preparará alimentos con ingredientes locales mientras observamos el paisaje y nos deleitamos con el canto de las aves."
      />
      <hr></hr>
      <LearnCard
        title="¿Qué aprenderás?"
      />

    </MarginBottom>
  )
}

export default experience