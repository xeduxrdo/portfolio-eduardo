// import { useState } from 'react'
import Navbar from './Components/Navbar';
import Inicio from './Components/Sections/Inicio';
import Habilidades from './Components/Sections/Habilidades';
import Proyectos from './Components/Sections/Proyectos';
import Educacion from './Components/Sections/Educacion';
import Contacto from './Components/Sections/Contacto';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Inicio />
      <Habilidades />
      <Proyectos />
      <Educacion />
      <Contacto />
    </>
  );
}

export default App;
