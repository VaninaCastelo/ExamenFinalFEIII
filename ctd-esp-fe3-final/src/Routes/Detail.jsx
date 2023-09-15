import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
       
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const {state, dispatch} = useGlobalContext()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const {name, email, phone, website} = state.dentist
    console.log(id)
    const url = 'https://jsonplaceholder.typicode.com/users/' + id

    useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
          dispatch({type: 'GET_DENTIST', payload: data})
          setLoading(false);
      })
  }, [id])
  return (
    <>
      <h1> Informacion del Profesional </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {loading ? 'Cargando...' : <>
            <h2>Name: {name}</h2>
            <h3>Email:{email}</h3>
            <h3>Phone:{phone}</h3>
            <h3>Website:{website}</h3>
      </>}
   </>
  )
}

export default Detail