
import React from 'react';
import { Routes, Route} from "react-router";
import NavBar from './Header.jsx';
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx';
import Merch from './Pages/Merch.jsx'

import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'




function App() {
  return(
    <>
    <NavBar/>
    <div className='container'>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/merch" element={<Merch/>}/>
      </Routes>

    </div>
  
    
    <Footer/>
    </>
  );
}

export default App;
