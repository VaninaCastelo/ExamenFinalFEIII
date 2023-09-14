import axios from 'axios'
import {createContext, useContext, useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'

export const initialState = {theme: "", data: []}

export const CharStates = createContext();

export const Context = ({ children }) => {
  
  const url='https://jsonplaceholder.typicode.com/users'
  
  const [dentista, setDentista] = useState([])
  
    useEffect(() => {
      axios (url)
      .then(res => setDentista(res.data))
      .catch(err => console(err))
    },[])

  
  return (
    <CharStates.Provider value={{dentista}}>
      {children}
    </CharStates.Provider>
  );
};
export default Context

export const useCharStates = () => useContext(CharStates)
