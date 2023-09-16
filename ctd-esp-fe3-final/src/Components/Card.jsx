import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from './utils/global.context'
import  dentistImg  from "../../public/images/doctor.jpg"

  const Card = ({ dentist }) => {  
    
    const { state, dispatch } = useGlobalContext();
    const isFavorite = state.favs.some(fav => fav.id === dentist.id);

    const toggleFavorite = () => {
      if (isFavorite) {
         dispatch({ type: 'REMOVE_FAV', payload: dentist.id });
        } else {
         dispatch({ type: 'ADD_FAV', payload: dentist });
    }
  };
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        <Link to={'/detail/' + dentist.id}>
        <img src={dentistImg} alt={dentist.name} style={{ width: "100%" }}/>
        <h3>{dentist.name}</h3>
        <h4>{dentist.username}</h4>
        <h4>{dentist.id}</h4>
        </Link>
     
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={toggleFavorite}>
        {isFavorite ? "Eliminar de Favoritos 🗑️" : "Agregar a Favoritos 🫶"}
      </button>
    </div>
  );
};

export default Card;
