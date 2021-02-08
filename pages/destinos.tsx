/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/explore/Jumbo'
import HorizontalS from '../styles/general/HorizontalSlide'
import FWVideoStryles from '../styles/general/FWVideoStryles'
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
import { OutlineBtn, Box, Divider, NavBar, MarginBottom } from '../styles/general'
import Head from 'next/head'
import FilterBar from '../styles/components/FilterBar'
import CardExplore from '../styles/components/Cards/CardExplore'

const destinos: React.FC = () => {
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

    const natural = (
        <>
      <Jumbo>
      <NavBar>
          <Link href="/mainpage">
          <button><img src="https://i.postimg.cc/CzG6fGbp/Screenshot-2021-01-14-at-14-29-27.png" alt="inicio" /></button>
          </Link>
          <Link href="/explora">
          <button><img src="https://i.postimg.cc/9DDNM6Xz/Screenshot-2021-01-14-at-14-12-20.png" alt="explora" /></button>
          </Link>
          <Link href="travels">
          <button><img src="https://i.postimg.cc/jLgFRxbG/Screenshot-2021-01-14-at-14-12-57.png" alt="mis viajes" /></button>
          </Link>
          <Link href="/destinos">
          <button><img src="https://i.postimg.cc/WhbyRDQG/Screenshot-2021-01-14-at-14-13-09.png" alt="destinos" /></button>
          </Link>
          <div>
          <button ><img src="https://i.postimg.cc/K45Ws7sc/Screenshot-2021-01-14-at-14-13-18.png" alt="Anfitriones" /> </button>
          </div>
        </NavBar>
        <ProfileBar>
          <div>
            <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
          </div>
          <div>
            <p>
              Destinos
            </p>
          </div>
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
            alt="profile-pic"
          />
          <hr />
        </ProfileBar>
        <FilterBar placeholder="Busca por ubicación, nombre…" />
        <p onClick={handleNatural}><span className="here">Areas Naturales</span></p>
          <p onClick={handleSustain}>Destinos sostenibles</p>
          <p onClick={handleRoutes}>Rutas</p>
      </Jumbo>
      <SectionHeading title="Áreas Naturales Imperdibles" linkTitle="Ver todas"  />
      <SustainableCards
        experiences={[
          {
            name: 'Calakmul',
            image:
              'https://i.postimg.cc/qh3KYGGm/Calakmul-Img.png',
            link: '',
            spell: ['Calakmul'],
          },
          {
            name: 'El Pinacate',
            image:
              'https://i.postimg.cc/1V0qR52w/Pinacate-Img.jpg',
            link: '',
            spell: ['El','Pinacate'],
          },
          {
            name: 'Reserva de la Mariposa Monarca',
            image:
              'https://i.postimg.cc/tYy6SWn5/Reserva-de-la-mariposa-monarca-Img.jpg',
            link: '',
            spell: ['tulum'],
          },
          {
            name: 'Iztacihuatl-Popocatepetl',
            image:
              'https://i.postimg.cc/dZcCKTHJ/iztacihuatl-Popocatepetl-Img.jpg',
            link: '/',
            spell: ['Iztacihuatl-', 'Popocatepetl'],
          },
        ]}
      />
<hr></hr>
<CardDiscoverMap
        cards={[
          {
            title: 'Conoce el primer Mapa de Conservación y Viajes del mundo',
            category: 'Conservación',
            description: 'Vive experiencias de viaje únicas que impulsan economías locales.',
            btnText: 'Ver Mapa',
            bg:
              'https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg',
            icon:
              'https://icons-for-free.com/iconfiles/png/512/location+maker+map+icon-1320166084997417306.png',
          },
        ]}
      />

<SectionHeading title="Las más sostenibles" linkTitle="Ver todas"  />
      <SustainableCards
        experiences={[
          {
            name: 'Calakmul',
            image:
              'https://i.postimg.cc/qh3KYGGm/Calakmul-Img.png',
            link: '',
            spell: ['Calakmul'],
          },
          {
            name: 'El Pinacate',
            image:
              'https://i.postimg.cc/1V0qR52w/Pinacate-Img.jpg',
            link: '',
            spell: ['El','Pinacate'],
          },
          {
            name: 'Reserva de la Mariposa Monarca',
            image:
              'https://i.postimg.cc/tYy6SWn5/Reserva-de-la-mariposa-monarca-Img.jpg',
            link: '',
            spell: ['tulum'],
          },
          {
            name: 'Iztacihuatl-Popocatepetl',
            image:
              'https://i.postimg.cc/dZcCKTHJ/iztacihuatl-Popocatepetl-Img.jpg',
            link: '/',
            spell: ['Iztacihuatl-', 'Popocatepetl'],
          },
        ]}
      />
<hr></hr>

<SectionHeading title="Lo más popular" linkTitle="Ver todas"  />
      <SustainableCards
        experiences={[
          {
            name: 'Calakmul',
            image:
              'https://i.postimg.cc/qh3KYGGm/Calakmul-Img.png',
            link: '',
            spell: ['Calakmul'],
          },
          {
            name: 'El Pinacate',
            image:
              'https://i.postimg.cc/1V0qR52w/Pinacate-Img.jpg',
            link: '',
            spell: ['El','Pinacate'],
          },
          {
            name: 'Reserva de la Mariposa Monarca',
            image:
              'https://i.postimg.cc/tYy6SWn5/Reserva-de-la-mariposa-monarca-Img.jpg',
            link: '',
            spell: ['tulum'],
          },
          {
            name: 'Iztacihuatl-Popocatepetl',
            image:
              'https://i.postimg.cc/dZcCKTHJ/iztacihuatl-Popocatepetl-Img.jpg',
            link: '/',
            spell: ['Iztacihuatl-', 'Popocatepetl'],
          },
        ]}
      />
<hr></hr>



            </>
      
    )

    const sustain = (
        <Jumbo>
        <NavBar>
            <Link href="/mainpage">
            <button><img src="https://i.postimg.cc/CzG6fGbp/Screenshot-2021-01-14-at-14-29-27.png" alt="inicio" /></button>
            </Link>
            <Link href="/explora">
            <button><img src="https://i.postimg.cc/9DDNM6Xz/Screenshot-2021-01-14-at-14-12-20.png" alt="explora" /></button>
            </Link>
            <Link href="travels">
            <button><img src="https://i.postimg.cc/jLgFRxbG/Screenshot-2021-01-14-at-14-12-57.png" alt="mis viajes" /></button>
            </Link>
            <div>
            <button><img src="https://i.postimg.cc/WhbyRDQG/Screenshot-2021-01-14-at-14-13-09.png" alt="destinos" /></button>
            </div>
            <div>
            <button ><img src="https://i.postimg.cc/K45Ws7sc/Screenshot-2021-01-14-at-14-13-18.png" alt="Anfitriones" /> </button>
            </div>
          </NavBar>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
                Destinos
              </p>
            </div>
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
              alt="profile-pic"
            />
            <hr />
          </ProfileBar>
          <FilterBar placeholder="Busca por ubicación, nombre…" />
          <p onClick={handleNatural}>Areas Naturales</p>
          <p onClick={handleSustain}><span className="here">Destinos sostenibles</span></p>
          <p onClick={handleRoutes}>Rutas</p>
        <SectionHeading title="Tus reservas" linkTitle="Ver todas" />
  
        
          <CardExplore
            name="Gastronomia Imperdible"
            sustainLevel={4.2}
            likes={24}
            description="Podrás explorar todos los lugares en los que se preparan estos platillos y conocer…"
            location="CDMX"
            image="https://i.postimg.cc/T1M492Jc/Gastronomia-2-Img.png"
          />
        </Jumbo>
      )

      const routes = (
        <Jumbo>
        <NavBar>
            <Link href="/mainpage">
            <button><img src="https://i.postimg.cc/CzG6fGbp/Screenshot-2021-01-14-at-14-29-27.png" alt="inicio" /></button>
            </Link>
            <Link href="/explora">
            <button><img src="https://i.postimg.cc/9DDNM6Xz/Screenshot-2021-01-14-at-14-12-20.png" alt="explora" /></button>
            </Link>
            <Link href="travels">
            <button><img src="https://i.postimg.cc/jLgFRxbG/Screenshot-2021-01-14-at-14-12-57.png" alt="mis viajes" /></button>
            </Link>
            <div>
            <button><img src="https://i.postimg.cc/WhbyRDQG/Screenshot-2021-01-14-at-14-13-09.png" alt="destinos" /></button>
            </div>
            <div>
            <button ><img src="https://i.postimg.cc/K45Ws7sc/Screenshot-2021-01-14-at-14-13-18.png" alt="Anfitriones" /> </button>
            </div>
          </NavBar>
          <ProfileBar>
            <div>
              <img src="https://i.postimg.cc/MpBhXfrw/Screenshot-2021-01-21-at-13-25-30.png" alt="logo" />
            </div>
            <div>
              <p>
                Destinos
              </p>
            </div>
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
              alt="profile-pic"
            />
            <hr />
          </ProfileBar>
          <FilterBar placeholder="Busca por ubicación, nombre…" />
          <p onClick={handleNatural}>Areas Naturales</p>
          <p onClick={handleSustain}>Destinos sostenibles</p>
          <p onClick={handleRoutes}><span className="here">Rutas</span></p>
        <SectionHeading title="Tus reservas" linkTitle="Ver todas" />
  
        
          <CardExplore
            name="Gastronomia Imperdible"
            sustainLevel={4.2}
            likes={24}
            description="Podrás explorar todos los lugares en los que se preparan estos platillos y conocer…"
            location="CDMX"
            image="https://i.postimg.cc/T1M492Jc/Gastronomia-2-Img.png"
          />
        </Jumbo>
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
      {renderNatural ? natural : renderSustain ? sustain : renderRoutes ? routes : <p>Loading...</p>}
        </MarginBottom>
  )
}

export default destinos