/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/landing/Jumbo'
import Link from 'next/link'
import HorizontalS from '../styles/general/HorizontalSlide'
import FWVideoStryles from '../styles/general/FWVideoStryles'
import { ProfileBar, CategorySection, CountrySelector, InclusiveSec } from '../styles/landing'
import {
  CardWide,
  SectionHeading,
  SearchBar,
  CardDiscoverMap,
  VirtualCards,
  ExperienceCards,
  SustainableCards
} from '../styles/components'
import { OutlineBtn, Box, Divider, NavBar, MarginBottom } from '../styles/general'
import Head from 'next/head'

const mainpage: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)
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
            <img src="https://i.postimg.cc/TYmh7Jp3/natoure-logo.png" alt="logo" />
          </div>
          <div>
            <p>
              Cambia tu forma de viajar, <br /> sé el cambio.{' '}
            </p>
          </div>
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/92592/ec3c6a02-49f8-42c6-b754-858b61defab6.jpeg"
            alt="profile-pic"
          />
        </ProfileBar>
        <CountrySelector>
          <img
            src="https://www.seekpng.com/png/detail/847-8476525_cono-con-bandera-de-mxico-mexico-flag.png"
            alt="flag"
          />
          <small>México</small>
        </CountrySelector>

        <main>
          <h3>Explora</h3>
          <p>experiencias de viaje únicas</p>
        </main>

        <SearchBar placeholder="¿A dónde quieres viajar?" />
      </Jumbo>
      <CategorySection>
        <section>
          <article>
            <div></div>
            <p>Naturaleza</p>
          </article>
          <article>
            <div></div>
            <p>BioCultural</p>
          </article>
          <article>
            <div></div>
            <p>Aventura</p>
          </article>
          <article>
            <div></div>
            <p>Aventura</p>
          </article>
        </section>
        <p>#turismosostenible</p>
      </CategorySection>
      <FWVideoStryles>
        <p>
          <b>Viajando</b> apoyarás a la conservación
        </p>
        <video src="https://www.w3schools.com/html/mov_bbb.mp4"></video>
      </FWVideoStryles>
      <SectionHeading title="Impulsando un turismo incluyente" />
      <InclusiveSec>
        <article>
          <img
            src="https://i.postimg.cc/HJxsv4gf/Card-2-Img.jpg"
            alt="cap"
          />
          <div></div>
          <p>
            Mayor participación activa y <b>liderazgo de mujeres</b>
          </p>
        </article>
        <article>
          <img
            src="https://i.postimg.cc/Yv8CxDJ6/Card-5-Img.jpg"
            alt="cap"
          />
          <div></div>
          <p>
            Integración de <b>pueblos indígenas y comunidades locales</b>
          </p>
        </article>
        <article>
          <img
            src="https://mx.web.img2.acsta.net/r_640_360/newsv7/19/09/12/00/28/3470302.jpg"
            alt="cap"
          />
          <div></div>
          <p>
            <b>Personas con discapacidad</b>
          </p>
        </article>
        <article>
          <img
            src="https://mx.web.img2.acsta.net/r_640_360/newsv7/19/09/12/00/28/3470302.jpg"
            alt="cap"
          />
          <div></div>
          <p>
            <b>Adultos mayores</b>
          </p>
        </article>
        <article>
          <img
            src="https://i.postimg.cc/Yv8CxDJ6/Card-5-Img.jpg"
            alt="cap"
          />
          <div></div>
          <p>
            <b>LGBTT+</b>
          </p>
        </article>
      </InclusiveSec>
      <SectionHeading title="Experiencias populares" linkTitle="Ver todas" />

      <HorizontalS shadow>
        <CardWide
          name="Cosecha en Xochimilco"
          sustainLevel={4.2}
          likes={24}
          location="CDMX"
          duration="2h"
          rating={4.5}
          price="1233"
          distance="2km"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Trajinera_en_canal_Nativitas.jpg/1200px-Trajinera_en_canal_Nativitas.jpg"
        />
        <CardWide
          name="Cosecha en Xochimilco"
          sustainLevel={4.2}
          likes={24}
          location="CDMX"
          duration="2h"
          rating={4.5}
          price="1233"
          distance="2km"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Trajinera_en_canal_Nativitas.jpg/1200px-Trajinera_en_canal_Nativitas.jpg"
        />
        <CardWide
          name="Cosecha en Xochimilco"
          sustainLevel={4.2}
          likes={24}
          location="CDMX"
          duration="2h"
          rating={4.5}
          price="1233"
          distance="2km"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Trajinera_en_canal_Nativitas.jpg/1200px-Trajinera_en_canal_Nativitas.jpg"
        />
      </HorizontalS>

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

      <SectionHeading title="Turismo virtual" linkTitle="ver más" />

      <HorizontalS marginLeft="16px">
        <VirtualCards
          experiences={[
            {
              title: 'El proceso del café',
              type: 'Webinar',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://mx.hola.com/imagenes/cocina/recetas/20191001150255/recetas-para-celebrar-dia-internacional-cafe/0-724-583/portada-cafe-m.jpg',
              likes: 23,
              price: 50,
              category: 'Procesos Naturales',
            },
            {
              title: 'El proceso del café',
              type: 'Webinar',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://mx.hola.com/imagenes/cocina/recetas/20191001150255/recetas-para-celebrar-dia-internacional-cafe/0-724-583/portada-cafe-m.jpg',
              likes: 23,
              price: 50,
              category: 'Procesos Naturales',
            },
            {
              title: 'El proceso del café',
              type: 'Webinar',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://mx.hola.com/imagenes/cocina/recetas/20191001150255/recetas-para-celebrar-dia-internacional-cafe/0-724-583/portada-cafe-m.jpg',
              likes: 23,
              price: 50,
              category: 'Procesos Naturales',
            },
          ]}
        />
      </HorizontalS>
      <SectionHeading title="Cerca de ti" linkTitle="Ver todas" />
      <HorizontalS marginLeft="16px">
        <ExperienceCards
          experiences={[
            {
              title: 'Recorrido por el sendero',
              place: 'Webinar',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://mx.hola.com/imagenes/cocina/recetas/20191001150255/recetas-para-celebrar-dia-internacional-cafe/0-724-583/portada-cafe-m.jpg',
              likes: 23,
              price: 50,
              sustainable: 4.0,
              location: 'a 7 hrs de tu ubicación',
            },
            {
              title: 'Recorrido por el sendero',
              place: 'Webinar',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://mx.hola.com/imagenes/cocina/recetas/20191001150255/recetas-para-celebrar-dia-internacional-cafe/0-724-583/portada-cafe-m.jpg',
              likes: 23,
              price: 50,
              sustainable: 4.0,
              location: 'a 7 hrs de tu ubicación',
            },
            {
              title: 'Recorrido por el sendero',
              place: 'Webinar',
              duration: '2 horas',
              rating: 4.5,
              image:
                'https://mx.hola.com/imagenes/cocina/recetas/20191001150255/recetas-para-celebrar-dia-internacional-cafe/0-724-583/portada-cafe-m.jpg',
              likes: 23,
              price: 50,
              sustainable: 4.0,
              location: 'a 7 hrs de tu ubicación',
            },
          ]}
        />
      </HorizontalS>
      <Box margin={54}>
        <OutlineBtn btnType="primary">Ver más </OutlineBtn>
      </Box>
      <SectionHeading title="Destinos sostenibles" linkTitle="Ver todas" />
      <SustainableCards
        experiences={[
          {
            name: 'cuetzalan',
            image:
              'https://d3tf9yuhsp2bpn.cloudfront.net/cuetzalan_tu_experiencia_120190625070601.jpg',
            link: '',
            spell: ['cuet', 'za', 'lan'],
          },
          {
            name: 'cuetzalan',
            image:
              'https://i.postimg.cc/xcJZ5Xht/Bacalar-Img.png',
            link: '',
            spell: ['Ba', 'ca', 'lar'],
          },
          {
            name: 'cuetzalan',
            image:
              'https://i.postimg.cc/qh3KYGGm/Calakmul-Img.png',
            link: '',
            spell: ['tulum'],
          },
          {
            name: 'cuetzalan',
            image:
              'https://i.postimg.cc/ZCGMMThZ/Bustamante-1-Img.jpg',
            link: '/',
            spell: ['Busta', 'mante'],
          },
        ]}
      />
      <Divider top={47} bottom={88} />
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
      <Divider top={47} bottom={88} />
      <SectionHeading title="Lo mejor para viajar en grupo" linkTitle="Ver todas" />
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
      <Divider top={47} bottom={88} />
      <SectionHeading title="Vive experiencias nativas" linkTitle="Ver todas" />
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
      <SectionHeading title="Gastronomia Sostenible" linkTitle="Ver todas" />

      <HorizontalS shadow>
        <CardWide
          name="Gastronomia Sostenible"
          sustainLevel={4.2}
          likes={24}
          location="CDMX"
          duration="2h"
          rating={4.5}
          price="1233"
          distance="2km"
          image="https://i.postimg.cc/T1M492Jc/Gastronomia-2-Img.png"
        />
      </HorizontalS>
    </MarginBottom>
  )
}

export default mainpage
