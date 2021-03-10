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
import Heading from '../styles/anfitrion/Heading'
import ResumeExp from '../styles/anfitrion/ResumeExp';
import ReseñaCards from '../styles/experience/reseñaCard'
import ReseñaInput from '../styles/experience/ReseñaInput'
import { TagCard } from '../styles/experience/tags';
import Gallery from '../styles/experience/Gallery';
import CardExplore from '../styles/components/Cards/CardExplore'
import Weather from '../styles/experience/Weather';
import Rules from '../styles/experience/Rules'
import FloraFaunaCards from '../styles/experience/FloraFauna'
import Resume from '../styles/anfitrion/ResumeUs'
import FixedHead from '../styles/anfitrion/FixedHead'


const anfitrion: React.FC = () => {

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
      
           <FixedHead 
           rating={4.5}
           sustainable={4.3}
           />
      <Heading 
      title="Cabañas Loma Alta" 
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
      <ResumeExp 
        title="¿Quiénes somos?"
        poblacion="Zapotecas"
        description="Somos una Asociación Civil, fundada en 2007, con la Misión de generar 
        información científica sobre los procesos biológicos y sociales del sistema 
        lacustre, difundir el conocimiento a través de capacitaciones a usuarios y 
        visitantes, vincular a sociedad con la naturaleza a través de experiencias lúdicas,
         productivas e informativas
         que dejen generen cambios de actitud hacia la conservación de las chinampas."
      />
      <hr></hr>

      <Resume 
        title="¿Qué hacemos?"
        description="Nuestras actividades tienen 3 vertientes, la primera guiar, enseñar y apoyar a estudiantes, profesores e 
        investigadores en sus actividades de aprendizaje sobre el sistema lacustre. La segunda, ofrecer experiencias en la 
        agricultur tradicional chinampera con productores locales como guías en el aprendizaje de métodos agroecológicos y ecotecnias. 
        La tercera vertiente
         se refiere al conocimiento de la zona lacustre mediante actividades cortas y lúdicas sobre su historia, cultura y biodiversidad."
      />  

    <hr></hr>


<SectionHeading title="Experiencias que brindamos"/>
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


      <SectionHeading title="Galeria"/>
    <Gallery 

    />

<SectionHeading title="Nuestros Productos" />
    <HorizontalS>
    <FloraFaunaCards 
      species={[
        {
          title: 'Cojines hechos a mano ',
          image:
            'https://i.pinimg.com/originals/dd/e2/6c/dde26c572dbb85ad8b6c43fd1123b8c0.jpg',
         
        },
        {
          title: 'Murcielago Orejon',
          image:
            'https://canastarosa.s3.amazonaws.com/media/__sized__/market/product/f9bc317bed2e2f32a2cbdbe7b7fcb2d1-crop-c0-5__0-5-280x280-90.jpeg',
        },
      ]}
    />
    </HorizontalS>

    <SectionHeading title="Nuestrtas Experiencias virtuales"/>
      <HorizontalS marginLeft="16px">
        <ExperienceCards
          experiences={[
            {
              title: 'Webinar',
              place: 'Tradiciones gastronómicas',
              duration: '',
              rating: 4.5,
              image:
                'https://saboryestilo.com.mx/wp-content/uploads/2019/08/como-preparar-pozole-rojo-1-1200x720.jpg',
              likes: 23,
              price: 50,
              sustainable: 4.0,
              location: 'a 7 hrs de tu ubicación',
            },
          ]}
        />
      </HorizontalS>

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

      <Weather
        title="Clima"
        clima="Parcialmente nublado"
      />

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



    </MarginBottom>
  )
}

export default anfitrion