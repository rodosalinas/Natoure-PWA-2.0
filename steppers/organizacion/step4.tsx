import React, { useEffect, useState } from 'react'
import { Button, Disclaimer, GreenTab, Label } from '../../styles/forms'

type Props = {
  onStepChange: (data, step) => void
}

const Step4 = ({ onStepChange }: Props): JSX.Element => {
  const [form, setForm] = useState({})
  const [validForm, setValidForm] = useState(false)

  const handleChange = (e) => {
    e.valid &&
      setForm((prevState) => {
        return {
          ...prevState,
          [e.name]: e,
        }
      })
  }

  const handleClick = () => {
    const data = Object.keys(form).reduce((acc, key) => {
      return { ...acc, [key]: form[key].value }
    }, {})
    onStepChange(data, 5)
  }

  useEffect(() => {
    const dataArr = Object.values(form)
    if (dataArr.length === 0) {
      const isValid = dataArr.every((e: any) => e.valid)
      setValidForm(isValid)
    }
  }, [form])

  return (
    <>
      <Disclaimer
        text={
          <>
            Según tu situación actual elige la opción que más se acerque a tu organización.
            <br /> 1 hoja significa: Aún no cumplimos pero trabajemos en ello <br />5 hojas
            significan: Cumplimos totalmente
          </>
        }
        style={{ marginTop: 48, marginBottom: 48 }}
      />
      <GreenTab title="Ambiental" />
      <Label title="¿Realizas en forma planeada acciones para conservar ecosistemas donde te encuentras?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Usas métodos probados para llevar a cabo actividades de restauración o regeneración en los ecosistemas que impactas?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Consideras un número máximo de personas para brindar experiencias gratas al visitante y de bajo impacto para el lugar?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Tienes normas y acciones para reducir, reciclar y reutilizar los residuos que se generan al brindar tus actividades?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Tienes procedimientos establecidos para no contaminar el agua y/o tratar las aguas grises (jabonosas) y negras (del baño) que se generan al realizar tus actividades?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Cuánta de la energía que utilizan en las actividades viene de fuentes renovables? (Considera desde la planeación hasta el cierre de tus actividades)" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <GreenTab title="Social" />
      <Label title="¿Cuánto de la infraestructura que tienen es de materiales locales y/o en armonía con el entorno y el paisaje?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Cuánto de los alimentos que se consumen vienen de productores locales y/o los producen ustedes sin usar químicos?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Realizan acciones que incorporen saberes y conocimientos para la mejor comprensión del viajero sobre la importancia biocultural del lugar?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <GreenTab title="Económico" />
      <Label title="¿Qué tanto esfuerzo realizas para brindar la mejor experiencia y aprendizaje a tus visitantes?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Label title="¿Qué tanto esfuerzo realizas para brindar la mejor experiencia y aprendizaje a tus visitantes?" />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img src="/icons/hojas.png" alt="tips" style={{ width: '85vw' }} />
      </div>
      <Button unable={!validForm} onClick={handleClick} />
    </>
  )
}

export default Step4
