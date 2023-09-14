import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {chars} = useCharStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {chars.map( char => <Card char= {char} key={char.id}/>)}
      </div>
    </main>
  )
}

export default Home