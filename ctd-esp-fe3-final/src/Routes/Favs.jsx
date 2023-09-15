import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useGlobalContext()

  const renderedDentistIds = new Set();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map(fav => {
          if (!renderedDentistIds.has(fav.id)) 
            {renderedDentistIds.add(fav.id);
          return <Card dentist={fav} key={fav.id}/>;
        } 
        return null;
      })}
        
      </div>
    </>
  );
};

export default Favs;

