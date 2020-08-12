import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Jumbo from '../styles/landing/Jumbo'
import ProfileBar from '../styles/landing/Profilebar'
import CountrySelector from '../styles/landing/CountrySelector'
import SearchBar from '../styles/components/Searchbar'
import CategorySectionn from '../styles/landing/CategorySection'

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
    </>
  )
}

export default index
