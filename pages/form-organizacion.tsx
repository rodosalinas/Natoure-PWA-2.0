/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { Step1, Step2, Step3, Step4, Step5, Step6 } from '../steppers/organizacion'

import { Heading, SectionHeading } from '../styles/forms'

const FormOrganizacion = (): JSX.Element => {
  const [data, setData] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  const onStepChange = (data, step) => {
    setData((prevState) => {
      return {
        ...prevState,
        ...data,
      }
    })
    setCurrentStep(step)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scroll({ top: 0 })
    }
  }, [currentStep])

  const steps = {
    1: {
      render: Step1,
      name: 'Datos principales',
      heading: 'Registra tus datos',
    },
    2: {
      render: Step2,
      name: 'Ubicación',
      heading: 'Registra dónde están ubicados',
    },
    3: {
      render: Step3,
      name: 'Datos de contacto',
      heading: 'Registra tus datos de contacto',
    },
    4: {
      render: Step4,
      name: 'Sostenibilidad',
      heading: 'Ahora conozcamos tu nivel de compromiso socioambiental',
    },
    5: {
      render: Step5,
      name: 'Fotos y videos',
      heading: 'Sube tus fotos y videos',
    },
    6: {
      render: Step6,
      name: 'Confirmación',
      heading: 'Confirma tus datos',
    },
  }

  const Component = steps[currentStep].render

  return (
    <>
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
      <Heading
        title="Registra tu organización"
        stepName={steps[currentStep].name}
        step={currentStep}
        total={6}
      />
      <SectionHeading title={steps[currentStep].heading} />
      <Component onStepChange={onStepChange} />
    </>
  )
}

export default FormOrganizacion
