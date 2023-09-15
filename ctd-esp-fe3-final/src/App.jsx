import React from 'react';
import {  Route, Routes } from "react-router-dom";
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import { useGlobalContext } from './Components/utils/global.context';



function App() {
  const {state} = useGlobalContext();
  const {theme} = state;
  const changeDarkTheme = theme ? 'light' : 'dark';
    
  return (
      <div className={changeDarkTheme}>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dentist/:id' element={<Detail/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/contact' element={<Contact/>}/>

          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
