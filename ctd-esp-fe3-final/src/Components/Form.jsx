import React from "react";
import { useState } from 'react'


const Form = () => {

  const [show, setShow] = useState(false)
  const [error, setError] = useState(true)
  const [cliente, setCliente] = useState({
      nombre: '',
      ciudad: '',
  })

const handleSubmit = (event) => {

  event.preventDefault()
      if (cliente.nombre.length >3 && cliente.ciudad.length > 6)
  { setShow(true)
  setError(false)
} else 
setError (true)

}

const handleChange = (event) => setCliente({...cliente, nombre: event.target.value})
console.log(cliente)
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
      <label htmlFor="Nombre">Ingrese Nombre</label>
        <input type="text" onChange={handleChange}/>
        <label htmlFor="Ciudad">Ingrese Ciudad</label>
        <input type="text" onChange={(event)=> setCliente({...cliente, ciudad: event.target.value})}/>
        <button onClick= {handleSubmit} > Enviar </button>
        {error && <h6>Ingrese datos nuevamente</h6> }
        {show ? <> <h4> Gracias {cliente.nombre} </h4>
            <h6> De {cliente.ciudad} </h6> </>
            : null }

      </form>
    </div>
  );
};

export default Form;
