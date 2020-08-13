/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/landing/Jumbo'
import ProfileBar from '../styles/landing/Profilebar'
import CountrySelector from '../styles/landing/CountrySelector'
import SearchBar from '../styles/components/Searchbar'
import CategorySectionn from '../styles/landing/CategorySection'
import FWVideoStryles from '../styles/general/FWVideoStryles'
import SectionHeading from '../styles/components/SectionHeading'
import InclusiveSec from '../styles/landing/InclusiveSec'

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
      <CategorySectionn>
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
      </CategorySectionn>
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
      <SectionHeading title="Experiencias populares" linkTitle="ver más" />
    </>
  )
}

export default index
