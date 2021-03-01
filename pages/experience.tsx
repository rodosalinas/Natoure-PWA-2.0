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
import ResumeExp from '../styles/experience/ResumeExp';
import LearnCard from '../styles/experience/learnCard';
import PinkCard from '../styles/experience/pinkCard';
import BioCard from '../styles/experience/bioCard'
import InterestCard from '../styles/experience/interestCard'
import ReseñaCard from '../styles/experience/reseñaCard'
import ReseñaCards from '../styles/experience/reseñaCard'
import ReseñaInput from '../styles/experience/ReseñaInput'
import { TagCard } from '../styles/experience/tags';
import Activities from '../styles/experience/Activities'
import Include from '../styles/experience/Include'
import Gallery from '../styles/experience/Gallery';
import BestMonths from '../styles/experience/BestMonths';
import CardExplore from '../styles/components/Cards/CardExplore'
import Atributes from '../styles/experience/Atributes'
import Detailed from '../styles/experience/Detailed'
import Weather from '../styles/experience/Weather';
import Rules from '../styles/experience/Rules'
import FloraFaunaCards from '../styles/experience/FloraFauna'


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
      image="https://i.postimg.cc/Vk7F9yqM/Xochimilco-Yolcan.jpg"
      />
      <HorizontalS>
      <TagCard 
      
      />
      </HorizontalS>
      <ResumeExp 
        title="Resumen de la Experiencia"
        poblacion="Zapotecas"
        description="Podremos disfrutar de un día en contacto con la naturaleza, observando aves, ajolotes, 
        paisajes y + el trabajo en una chinampa, además de aprender acerca de las técnicas agrícolas. 
        Un chef nos preparará alimentos con ingredientes locales mientras observamos el paisaje y nos deleitamos 
        con el canto de las aves."
      />
      <hr></hr>
      <Activities 
        title="Actividades que se realizan en la experiencia"
      />
      <Include 
        title="¿Qué incluye?"
        title2="¿Qué no incluye?"
      />
    <hr></hr>
    <Gallery 

    />

      <InterestCard 
          difficulty="3"
          age="+ de 18"
          duration="1hora"
          people="1,200 personas"
          language="Español / Ingles"
      />

    <BestMonths 
      title="Mejores meses para realizar esta actividad"
    />

<SectionHeading title="¿Qué vas a comer?"  />
    <HorizontalS>  
        <CardExplore
          name="Gastronomia Imperdible"
          sustainLevel={4.2}
          likes={24}
          description="Podrás explorar todos los lugares en los que se preparan estos platillos y conocer…"
          location="CDMX"
          image="https://i.postimg.cc/T1M492Jc/Gastronomia-2-Img.png"
        />
      </HorizontalS>

    <Atributes 
      title="Atributos de la Experiencia"
    />

    <Weather
      title="Clima"
      clima="Parcialmente nublado"
    />

    <Detailed 
      title="Descripción detallada"
      
    />

 <SectionHeading title="Flora" />
    <HorizontalS>
    <FloraFaunaCards 
      species={[
        {
          title: 'Pitaya',
          image:
            'https://i.pinimg.com/originals/0b/75/87/0b7587370813c0919921378c3ad43dac.jpg',
         
        },
        {
          title: 'Champiñones',
          image:
            'https://cdn.shopify.com/s/files/1/0080/1076/0255/products/champinones_1.jpg?v=1554191943',
        },
        {
          title: 'Lirio',
          image:
            'https://paramijardin.s3.fr-par.scw.cloud/2019/07/DSCN9494-800x6001-e1562847060616-782x445.jpg',
        },
      ]}
    />
    </HorizontalS>

    <SectionHeading title="Fauna" />
    <HorizontalS>
    <FloraFaunaCards 
      species={[
        {
          title: 'Chipe trepador ',
          image:
            'https://1.bp.blogspot.com/-CbY7edQEy44/WR5KX-at7CI/AAAAAAAAa6U/5UWkiAAq3p8cDyukzUI87cO9LlI0H7mtgCLcB/s1600/A2A2.jpg',
         
        },
        {
          title: 'Zopilote Aura',
          image:
            'https://inaturalist-open-data.s3.amazonaws.com/photos/24284/large.jpg?1545407160',
        },
        {
          title: 'Piranga Roja',
          image:
            'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/193674981/1200',
        },
      ]}
    />
    </HorizontalS>

    <Rules 

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

export default experience