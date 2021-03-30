/* eslint-disable react/display-name */
import React, { useState } from 'react'
import Head from 'next/head'

import { Step1, Step2, Step3, Step4, Step5, Step6, Step7 } from '../steppers/experiencia'

import { Heading, SectionHeading } from '../styles/forms'

const FormExperiencia = (): JSX.Element => {
  const [data, setData] = useState({})
  const [currentStep, setCurrentStep] = useState(6)

  const onStepChange = (data, step) => {
    setData((prevState) => {
      return {
        ...prevState,
        ...data,
      }
    })
    setCurrentStep(step)
  }

  const steps = {
    1: {
      render: Step1,
      name: 'Tu experiencia',
      heading: 'Comienza a crear tu experiencia',
    },
    2: {
      render: Step2,
      name: 'Detalles de la experiencia',
      heading: 'Define los detalles de tu experiencia',
    },
    3: {
      render: Step3,
      name: 'Detalles complementarios',
      heading: 'Define los detalles de tu experiencia',
    },
    4: {
      render: Step4,
      name: 'Ubicación',
      heading: 'Registra dónde se ubica la experiencia',
    },
    5: {
      render: Step5,
      name: 'Calendario',
      heading: 'Registra las fechas para tu experiencia',
    },
    6: {
      render: Step6,
      name: 'Fotos y videos',
      heading: 'Sube fotos y videos de la experiencia',
    },
    7: {
      render: Step7,
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
        title="Registra tu experiencia"
        stepName={steps[currentStep].name}
        step={currentStep}
        total={7}
      />
      <SectionHeading title={steps[currentStep].heading} />
      <Component onStepChange={onStepChange} />
    </>
  )
}

export default FormExperiencia
