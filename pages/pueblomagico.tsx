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
import Resume from '../styles/pueblom/Resume'
import InterestCard from '../styles/experience/interestCard'
import FloraFaunaCards from '../styles/experience/FloraFauna'
import CardExplore from '../styles/components/Cards/CardExplore'
import Weather from '../styles/experience/Weather';
import {
    ExperienceCards,
  
  } from '../styles/components'


const pueblomagico: React.FC = () => {
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
      image="https://a0.muscache.com/im/pictures/4e3af419-295d-4d52-a3a2-a36d1a80d0ff.jpg?aki_policy=x_large"
      />

      <Resume 
        title="Nuestra Historia"
        description="Este Pueblo Mágico es conocido como 
        “El jardín de Nuevo León” ya que es el oasis de la región.
         El verdor de los árboles rodea a Bustamante y permite adentrarse en 
         la calma de sus calles que nos recibe para encontrar una arquitectura típica. 

        Los conquistadores españoles trajeron a unas 30 familias Tlaxcaltecas para trabajar en las minas, ellos dieron 
        forma y color al pueblo; a la vez que heredaron al “Señor de Tlaxcala”. Por ello es la última chispa de herencia tlaxcalteca. "
      />  

    <SectionHeading title="Atractivos Naturales" />

    <HorizontalS>

    <FloraFaunaCards 
      species={[
        {
          title: 'Grutas de Bustamante',
          image:
            'https://www.nomada.news/wp-content/uploads/2019/06/Grutas-Palmito-grutas-de-bustamante.jpg',
         
        },
        {
          title: 'Ojo de Agua San Lorenzo',
          image:
            'https://t2.salir.ltmcdn.com/mx/places/3/8/3/img_383_ojo-de-agua-san-lorenzo_0_orig.jpg',
        },
        {
          title: 'Parque Nacional',
          image:
            'https://lh3.googleusercontent.com/proxy/Zj9ZBJNG_Pg7G0oBTU9l-QlxFtt3ejhv26AFarhfj3Z3_NWVMbVCiB8anIqxO9YMxjZK6wZvr9BCSDpmiKXhTQM5tOZx2xtm3JxU9-O2PZ0GmeplH4gcrNkP1aIMvl-j4LVI3cnv7gECFzka-P4EsxdnTDJiTg6QMoRaS9eERsNze9n6anlLjKD_79XNb9Y',
        },
      ]}
    />
    </HorizontalS>

    <SectionHeading title="Atractivos Culturales" />

<HorizontalS>

<FloraFaunaCards 
  species={[
    {
      title: 'Tlaxcala',
      image:
        'https://i0.wp.com/www.turimexico.com/wp-content/uploads/2015/05/tlaxcala.jpg?fit=500%2C375&ssl=1',
     
    },
    {
      title: 'San miguel Arcangel',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61YNZTiJ53L._AC_SX425_.jpg',
    },
    {
      title: 'Festival ',
      image:
        'https://d500.epimg.net/cincodias/imagenes/2020/05/17/legal/1589748176_922084_1589748407_noticia_normal.jpg',
    },
  ]}
/>
</HorizontalS>

<SectionHeading title="Gaastronomia imperdible"  />
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
        <Weather
          title="Clima"
          clima="Parcialmente nublado"
        />

    <SectionHeading title="Flora" />
    <HorizontalS>
    <FloraFaunaCards 
      species={[
        {
          title: 'Pitaya',
          image:
            'https://i.pinimg.com/originals/0b/75/87/0b7587370813c0919921378c3ad43dac.jpg',
         
        },
        {
          title: 'Champiñones',
          image:
            'https://cdn.shopify.com/s/files/1/0080/1076/0255/products/champinones_1.jpg?v=1554191943',
        },
        {
          title: 'Lirio',
          image:
            'https://paramijardin.s3.fr-par.scw.cloud/2019/07/DSCN9494-800x6001-e1562847060616-782x445.jpg',
        },
      ]}
    />
    </HorizontalS>


    <SectionHeading title="Fauna" />
    <HorizontalS>
    <FloraFaunaCards 
      species={[
        {
          title: 'Chipe trepador ',
          image:
            'https://1.bp.blogspot.com/-CbY7edQEy44/WR5KX-at7CI/AAAAAAAAa6U/5UWkiAAq3p8cDyukzUI87cO9LlI0H7mtgCLcB/s1600/A2A2.jpg',
         
        },
        {
          title: 'Zopilote Aura',
          image:
            'https://inaturalist-open-data.s3.amazonaws.com/photos/24284/large.jpg?1545407160',
        },
        {
          title: 'Piranga Roja',
          image:
            'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/193674981/1200',
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

export default pueblomagico