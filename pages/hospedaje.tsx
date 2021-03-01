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
import Heading from '../styles/hospedaje/Heading'
import ReseñaCards from '../styles/experience/reseñaCard'
import ReseñaInput from '../styles/experience/ReseñaInput'
import { TagCard } from '../styles/restaurants/tags';
import Gallery from '../styles/experience/Gallery';
import Reserve from '../styles/restaurants/reserve'
import Caracteristicas from '../styles/restaurants/caracteristicas'
import FoodCard from '../styles/components/Cards/FoodCard'
import Resume from '../styles/hospedaje/Resume'
import InterestCard from '../styles/experience/interestCard'
import {
    ExperienceCards,
  
  } from '../styles/components'


const hospedaje: React.FC = () => {
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
      title="Cabañas Loma Alta" 
      rating={5}
      sustainable={4.3}
      likes={26}
      duration= "2 hrs"
      image="https://media-cdn.tripadvisor.com/media/photo-s/17/35/0a/8a/todos-impulsamos-el-consumo.jpg"
      />

      <Resume 
        title="Acerca de Nosotros"
        description="El establecimiento Cabañas Los Achicuales se encuentra en Cuetzalán del Progreso y 
         cuenta con restaurante, bar, salón compartido y jardín.
         Cuenta con cocina compartida y terraza. Cuenta con piscina al aire libre, conexión Wi-Fi gratuita y 
         aparcamiento privado gratuito."
      />  

    <InterestCard 
    difficulty="3"
    age="+ de 18"
    duration="1hora"
    people="1,200 personas"
    language="Español / Ingles"
    />
    <SectionHeading title="Galeria" />
      <Gallery 
  
      />


      <Reserve />

      <hr></hr>
      <SectionHeading title="Nuestra gastronomia" />
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

export default hospedaje