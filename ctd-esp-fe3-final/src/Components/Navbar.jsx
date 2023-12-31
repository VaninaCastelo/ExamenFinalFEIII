import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context'
import '../styles/navbar.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const {dispatch} = useGlobalContext();

  const changeDark=() => { 
    dispatch({type: 'SWITCH_THEME'});

  };

  return (
    <nav className="navbar">
      <Link to='https://www.digitalhouse.com/' target="_blank"><img src='../../public/dh.ico' alt="Flecha" /></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favorito</Link>
      <Link to='/contact'>Contacto</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeDark}>🌙</button>
    </nav>
  )
}

export default Navbar