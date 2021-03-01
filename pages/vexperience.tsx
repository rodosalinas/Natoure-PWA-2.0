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
import NavBar from '../styles/components/NavBar'
import Heading from '../styles/experience/headingcard'
import Resume from '../styles/experience/resumeCard';
import LearnCard from '../styles/experience/learnCard';
import PinkCard from '../styles/experience/pinkCard';
import BioCard from '../styles/experience/bioCard'
import InterestCard from '../styles/experience/interestCard'
import ReseñaCards from '../styles/experience/reseñaCard'
import ReseñaInput from '../styles/experience/ReseñaInput'


const vexperience: React.FC = () => {
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
      image="https://i.postimg.cc/SsH6gybL/Cocina-Tradicional-Img.jpg"
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
     <PinkCard 
        price="45 "
        description="Viaja desde casa ahora"
     />
    <BioCard 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKZOZYWjsYDQ58v1lWvOmcPbE9JCTCZBFQmw&usqp=CAU"
        person="Doña Julia"
        description="Podremos disfrutar de un día en contacto con la naturaleza, 
        observando aves, ajolotes, paisajes y conociendo el trabajo en una chinampa, 
        además de aprender acerca de las técnicas agrícolas."
    />
    <hr></hr>
    <InterestCard 
        difficulty="3"
        age="+ de 18"
        duration="1hora"
        people="1,200 personas"
        language="Español / Ingles"
    />

    <SectionHeading title="Reseñas" />
    <ReseñaCards 
        reseñas={
            [
                {
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_ceMPdXaOgqSuRyvhuidswtXMUdv4G_2Yw&usqp=CAU',
                    name: 'Samantha Gutierrez',
                    time: 3,
                    reseña: "Estamos realizando un documental que explora la cultura de Xochimilco contemporánea a través de la vida de dos jóvenes que",
                },
                {
                    image: 'https://www.tekcrispy.com/wp-content/uploads/2018/10/avatar.png',
                    name: 'Armando Flores',
                    time: 7,
                    reseña: 'Estamos realizando un documental que explora la cultura de Xochimilco contemporánea a través de la vida de dos jóvenes que…'
                }
            ]
        }
    />
    <ReseñaInput 
        
    />

<SectionHeading title="Más experiencias que brindamos" linkTitle="Ver todas" />
      <HorizontalS marginLeft="16px">
        <ExperienceCards
          experiences={[
            {
              title: 'Recorrido por el sendero',
              place: 'Guanajuato',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://i.postimg.cc/hGvb7FTP/Screenshot-2021-01-14-at-15-26-25.png',
              likes: 23,
              price: 50,
              sustainable: 4.0,
              location: 'a 7 hrs de tu ubicación',
            },
            {
              title: 'Conociendo las tradiciones',
              place: 'Oaxaca',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://i.postimg.cc/RZDJyWJ4/oaxaca.jpg',
              likes: 23,
              price: 50,
              sustainable: 4.7,
              location: 'a 7 hrs de tu ubicación',
            },
          ]}
        />
      </HorizontalS>
      <SectionHeading title="Experiencias relacionadas (cercanas)" linkTitle="Ver todas" />
      <HorizontalS marginLeft="16px">
        <ExperienceCards
          experiences={[
            {
              title: 'Recorrido por el sendero',
              place: 'Guanajuato',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://i.postimg.cc/hGvb7FTP/Screenshot-2021-01-14-at-15-26-25.png',
              likes: 23,
              price: 50,
              sustainable: 4.0,
              location: 'a 7 hrs de tu ubicación',
            },
            {
              title: 'Conociendo las tradiciones',
              place: 'Oaxaca',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://i.postimg.cc/RZDJyWJ4/oaxaca.jpg',
              likes: 23,
              price: 50,
              sustainable: 4.7,
              location: 'a 7 hrs de tu ubicación',
            },
          ]}
        />
      </HorizontalS>


    </MarginBottom>
  )
}

export default vexperience