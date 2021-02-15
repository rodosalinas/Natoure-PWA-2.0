import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { 
    AiOutlineHome,
    AiOutlineCompass, 
    AiOutlineFlag, 
    AiOutlineUserSwitch, 
    AiFillHome, 
    AiFillCompass, 
    AiFillFlag,
    AiFillEnvironment,
    AiOutlineEnvironment 
} from "react-icons/ai";

import { BsPerson, BsPersonFill } from "react-icons/bs";
import { useRouter } from 'next/router';

const Nav = styled.div`
position: fixed;
bottom: 0;
right: -2px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 80px;
overflow: hidden;
box-sizing: border-box;
box-shadow: 0px 0 10px rgba(0, 0, 0, 0.8);
background-position: center;
background-color: white;
z-index: 9999;
margin-right: 2px;
img {
    width: 90%;
}
.link {
    margin-top: 10px;
    height: 90px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    max-width: 19%;
    letter-spacing: 0;
}
button {
  background-color: white;
  border: 0;  
  font-size: 40px;
}
.navtitle {
    font-size: 12px;
    text-align: center;
}

`


export default function NavBar(): JSX.Element {

    const [renderInicio, setInicio] = React.useState(true);
    const [renderExplora, setExplora] = React.useState(false);
    const [renderTravel, setTravel] = React.useState(false);
    const [renderDestiny, setDestiny] = React.useState(false);
    const [renderOwner, setOwner] = React.useState(false);
    const router = useRouter()

    const handleInicio = () => {
        setExplora(false)
        setTravel(false)
        setDestiny(false)
        setOwner(false)
        setInicio(true)
    }

    const handleExplora = () => {
        setInicio(false)
        setTravel(false)
        setDestiny(false)
        setOwner(false)
        setExplora(true)
    }

    const handleTravel = () => {
        setExplora(false)
        setInicio(false)
        setDestiny(false)
        setOwner(false)
        setTravel(true)
    }

    const handleDestiny = () => {
        setExplora(false)
        setTravel(false)
        setOwner(false)
        setInicio(false)
        setDestiny(true)
    }

    const handleOwner = () => {
        setExplora(false)
        setTravel(false)
        setDestiny(false)
        setInicio(false)
        setOwner(true)
    }

  return (
    <Nav>
    <div className="link">
    <Link href="/mainpage">
    <button onClick={handleInicio}>{router.pathname === "/mainpage" ? <AiFillHome /> : <AiOutlineHome /> }</button>
    </Link>
    <span className="navtitle">Inicio</span>
    </div>
    <div className="link">
    <Link href="/explora">
    <button onClick={handleExplora}>{router.pathname === "/explora" ? <AiFillCompass /> : <AiOutlineCompass/> }</button>
    </Link>
    <span className="navtitle">Explora</span>
    </div>
    <div className="link">
    <Link href="travels">
    <button onClick={handleTravel}>{router.pathname === "/travels" ? <AiFillFlag /> : <AiOutlineFlag/> }</button>
    </Link>
    <span className="navtitle">MisViajes</span>
    </div>
    <div className="link">
    <Link href="/destinos">
    <button onClick={handleDestiny}>{router.pathname === "/destinos"? <AiFillEnvironment /> : <AiOutlineEnvironment/> }</button>
    </Link>
    <span className="navtitle">Destinos</span>
    </div>
    <div className="link">
    <button onClick={handleOwner}>{router.pathname === "/anfitriones" ? <BsPersonFill /> : <BsPerson/> } </button>
    <span className="navtitle">Anfitriones</span>
    </div>
    </Nav>
  )
}
