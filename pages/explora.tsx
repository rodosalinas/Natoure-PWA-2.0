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
      <Jumbo>
   
        <ProfileBar>
          <div>
            <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
          </div>
          <div>
            <p>
              Explora
            </p>
          </div>
          <ProfileDrawer />
          <hr />
        </ProfileBar>
        <FilterBar placeholder="Busca por ubicación, nombre…" />
        <HorizontalS>
          <p onClick={handleNatural}><span className="here">Experiencias</span></p>
          <p onClick={handleSustain}>Gastronomia</p>
          <p onClick={handleRoutes}>Hospedaje</p>
          <p onClick={handleRoutes}>Turismo Virtual</p>
        </HorizontalS>
      </Jumbo>
      <SectionHeading title="Gastronomia Impedible" linkTitle="Ver todas" />

      <HorizontalS shadow>
        <CardExplore
          name="Gastronomia Imperdible"
          sustainLevel={4.2}
          likes={24}
          description="Podrás explorar todos los lugares en los que se preparan estos platillos y conocer…"
          location="CDMX"
          image="https://i.postimg.cc/T1M492Jc/Gastronomia-2-Img.png"
        />
      </HorizontalS>
      <hr></hr>
      <SectionHeading title="Restaurants mas sostenibles" linkTitle="Ver todas" />
      <RestaurantCard
        experiences={[
          {
            title: 'El Recaudo',
            rating: 4.5,
            place: 'Puebla',
            image:
              'https://media-cdn.tripadvisor.com/media/photo-s/17/35/0a/8a/todos-impulsamos-el-consumo.jpg',
            description: 'Gastronomia regional',
            likes: 200,
          },
          {
            title: 'Prado alto',
            rating: 4.5,
            place: 'Guerrero',
            image:
              'https://media-cdn.tripadvisor.com/media/photo-s/0d/91/53/66/un-delicioso-lomo-saltado.jpg',
            description: 'Recetas Prehispanicas',
            likes: 200,
          },
          {
            title: 'Casso',
            rating: 4.5,
            place: 'CDMX',
            image:
              'https://cdn1.matadornetwork.com/blogs/2/2018/08/festival-de-enchiladas-shutterstock_783543961-940x622.jpg',
            description: 'Gastronomia regional',
            likes: 200,
          },
          {
            title: 'El Recaudo',
            rating: 4.5,
            place: 'Puebla',
            image:
              'https://i.postimg.cc/qh3KYGGm/Calakmul-Img.png',
            description: 'Gastronomia regional',
            likes: 200,
          },
        ]}
      />
      <hr></hr>
      <SectionHeading title="Cerca de tí" linkTitle="Ver todas" />
      <RestaurantCard
        experiences={[
          {
            title: 'El Recaudo',
            rating: 4.5,
            place: 'Puebla',
            image:
              'https://media-cdn.tripadvisor.com/media/photo-s/17/35/0a/8a/todos-impulsamos-el-consumo.jpg',
            description: 'Gastronomia regional',
            likes: 200,
          },
          {
            title: 'Prado alto',
            rating: 4.5,
            place: 'Guerrero',
            image:
              'https://media-cdn.tripadvisor.com/media/photo-s/0d/91/53/66/un-delicioso-lomo-saltado.jpg',
            description: 'Recetas Prehispanicas',
            likes: 200,
          },
          {
            title: 'Casso',
            rating: 4.5,
            place: 'CDMX',
            image:
              'https://cdn1.matadornetwork.com/blogs/2/2018/08/festival-de-enchiladas-shutterstock_783543961-940x622.jpg',
            description: 'Gastronomia regional',
            likes: 200,
          },
          {
            title: 'El Recaudo',
            rating: 4.5,
            place: 'Puebla',
            image:
              'https://i.postimg.cc/qh3KYGGm/Calakmul-Img.png',
            description: 'Gastronomia regional',
            likes: 200,
          },
        ]}
      />
      <hr></hr>
      <SectionHeading title="Los más visitados" linkTitle="Ver todas" />
      <RestaurantCard
        experiences={[
          {
            title: 'El Recaudo',
            rating: 4.5,
            place: 'Puebla',
            image:
              'https://media-cdn.tripadvisor.com/media/photo-s/17/35/0a/8a/todos-impulsamos-el-consumo.jpg',
            description: 'Gastronomia regional',
            likes: 200,
          },
          {
            title: 'Prado alto',
            rating: 4.5,
            place: 'Guerrero',
            image:
              'https://media-cdn.tripadvisor.com/media/photo-s/0d/91/53/66/un-delicioso-lomo-saltado.jpg',
            description: 'Recetas Prehispanicas',
            likes: 200,
          },
          {
            title: 'Casso',
            rating: 4.5,
            place: 'CDMX',
            image:
              'https://cdn1.matadornetwork.com/blogs/2/2018/08/festival-de-enchiladas-shutterstock_783543961-940x622.jpg',
            description: 'Gastronomia regional',
            likes: 200,
          },
          {
            title: 'El Recaudo',
            rating: 4.5,
            place: 'Puebla',
            image:
              'https://i.postimg.cc/qh3KYGGm/Calakmul-Img.png',
            description: 'Gastronomia regional',
            likes: 200,
          },
        ]}
      />
      
      <hr></hr>
      <SectionHeading title="Platillos tipicos" linkTitle="Ver todas" />

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
    </MarginBottom>
  )
}

export default explora
