import React from "react";
import { useState } from 'react'
import '../styles/form.css';


//Aqui deberan implementar el form completo con sus validaciones

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre.length > 5 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSuccessMessage(`Gracias ${formData.nombre}, te contactaremos cuanto antes vía correo electrónico.`);
      setError(false);
    } else {
      setError(true);
      setSuccessMessage('');
    }
  };

  
  return (
    <div className="cardForm">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre completo:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <button type="submit">Enviar</button>
        </form>
        <div className="mensaje">{error && <p>Por favor, verifique su información nuevamente.</p>} {successMessage && <p>{successMessage}</p>}</div>
    </div>
  );
};

export default Form;