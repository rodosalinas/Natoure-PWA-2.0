/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/landing/Jumbo'
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
} from '../styles/components'

const index: React.FC = () => {
  const { data } = useQuery(gql`
    {
      getAllNotes {
        title
      }
    }
  `)
  console.log(data)
  return (
    <>
      <Jumbo>
        <ProfileBar>
          <div></div>
          <div>
            <p>
              Cambia tu forma de viajar, <br /> sé el cambio{' '}
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
            src="https://mx.web.img2.acsta.net/r_640_360/newsv7/19/09/12/00/28/3470302.jpg"
            alt="cap"
          />
          <div></div>
          <p>
            Mayor participación activa y <b>liderazgo de mujeres</b>
          </p>
        </article>
        <article>
          <img
            src="https://mx.web.img2.acsta.net/r_640_360/newsv7/19/09/12/00/28/3470302.jpg"
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
            src="https://mx.web.img2.acsta.net/r_640_360/newsv7/19/09/12/00/28/3470302.jpg"
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
    </>
  )
}

export default index
