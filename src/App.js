import React from "react";
import Header from './components/Header';
import Redes from './components/Redes';
import Nav from './components/Nav';
import './App.css';

export default function App(){
  return(
    <main id="principal">
        <Header /> 
        <Redes />
        <Nav />
    </main>
  )
}