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

const travels: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)

  const [renderFavourite, setFavourite] = React.useState(true);
  const [renderReserved, setReserved] = React.useState(false);
  const [renderHistory, setHistory] = React.useState(false);

  const handleFavourite = () => {
      setReserved(false)
      setHistory(false)
      setFavourite(true)
  }

  const handleReserved = () => {
      setFavourite(false)
      setHistory(false)
    setReserved(true)
}

const handleHistory = () => {
    setFavourite(false)
    setReserved(false)
    setHistory(true)
}

    const favourite = (
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
              Mis viajes
            </p>
          </div>
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
            alt="profile-pic"
          />
          <hr />
        </ProfileBar>
        <FilterBar placeholder="Busca por ubicación, nombre…" />
        <p onClick={handleFavourite}><span className="here">Favoritos</span></p>
          <p onClick={handleReserved}>Reservados</p>
          <p onClick={handleHistory}>Historial</p>
      </Jumbo>
            <SectionHeading title="Tus experiencias (3)"  />

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
            <hr></hr>

            <SectionHeading title="Tus Hospedajes (3)"  />

            <HorizontalS marginLeft="16px">
             <ExperienceCards
                experiences={[
                  {
                    title: 'Hospedaje en la montaña',
                    place: 'Guanajuato',
                    duration: '2 horas',
                    rating: 4.5,
                    image:
                            'https://cdn.mexicodestinos.com/hoteles/hotel-mision-guanajuato-fachada-princ.jpg',
                    likes: 23,
                    price: 860,
                    sustainable: 4.0,
                    location: 'a 7 hrs de tu ubicación',
                    },
      {
        title: 'Hostal rancho alto',
        place: 'Oaxaca',
        duration: '2 horas',
        rating: 4.5,
        image:
          'https://i1.wp.com/blog.vivaaerobus.com/wp-content/uploads/2020/03/Lugares-para-visitar-en-Oaxaca.jpg?resize=1050%2C589&ssl=1',
        likes: 23,
        price: 2400,
        sustainable: 4.7,
        location: 'a 7 hrs de tu ubicación',
      },
      {
          title: 'Hotel la corona',
          place: 'Chiapas',
          duration: '2 horas',
          rating: 4.5,
          image:
            'https://media-cdn.tripadvisor.com/media/photo-s/08/80/80/ed/hotel-b-o.jpg',
          likes: 23,
          price: 50,
          sustainable: 4.7,
          location: 'a 7 hrs de tu ubicación',
        },
    ]}
  />
</HorizontalS>
<hr></hr>
            </>
      
    )

    const historial = (
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
                Historial
              </p>
            </div>
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
              alt="profile-pic"
            />
            <hr />
          </ProfileBar>
          <FilterBar placeholder="Busca por ubicación, nombre…" />
          <p onClick={handleFavourite}>Favoritos</p>
          <p onClick={handleReserved}>Reservados</p>
          <p onClick={handleHistory}><span className="here">Historial</span></p>
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

      const reserved = (
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
                reserved
              </p>
            </div>
            <img
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
              alt="profile-pic"
            />
            <hr />
          </ProfileBar>
          <FilterBar placeholder="Busca por ubicación, nombre…" />
          <p onClick={handleFavourite}>Favoritos</p>
          <p onClick={handleReserved}><span className="here">Reservados</span></p>
          <p onClick={handleHistory}>Historial</p>
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
      {renderFavourite ? favourite : renderHistory ? historial : renderReserved ? reserved : <p>Loading...</p>}
        </MarginBottom>
  )
}

export default travels