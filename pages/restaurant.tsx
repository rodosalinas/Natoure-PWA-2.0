/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import HorizontalS from '../styles/general/HorizontalSlide'
import {
  SectionHeading,
} from '../styles/components'
import { MarginBottom } from '../styles/general'
import Head from 'next/head'
import NavBar from '../styles/components/NavBar'
import Heading from '../styles/experience/headingcard'
import ReseñaCards from '../styles/experience/reseñaCard'
import ReseñaInput from '../styles/experience/ReseñaInput'
import { TagCard } from '../styles/restaurants/tags';
import Gallery from '../styles/experience/Gallery';
import Reserve from '../styles/restaurants/reserve'
import Caracteristicas from '../styles/restaurants/caracteristicas'
import FoodCard from '../styles/components/Cards/FoodCard'


const restaurant: React.FC = () => {
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
      title="El recaudo" 
      rating={5}
      sustainable={4.3}
      likes={26}
      duration= "2 hrs"
      image="https://media-cdn.tripadvisor.com/media/photo-s/17/35/0a/8a/todos-impulsamos-el-consumo.jpg"
      />
      <HorizontalS>
      <TagCard 
      
      />
      </HorizontalS>
      
      <Gallery 
  
      />

      <Reserve />

      <HorizontalS>
      <Caracteristicas />
      </HorizontalS>

      <hr></hr>

      <HorizontalS shadow>
        <FoodCard
          experiences={[
            {
              title: 'Capirotada',
              image:
                'https://laroussecocina.mx/wp-content/uploads/2018/01/Capirotada-001-Larousse-Cocina.jpg',
             
            },
            {
              title: 'Pan Bustamannte',
              image:
                'https://info7rm.blob.core.windows.net.optimalcdn.com/images/2016/11/12/620057_panbustamante-focus-0-0-600-315.jpg',
            },
          ]}
        />
    </HorizontalS>


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


    </MarginBottom>
  )
}

export default restaurant