import React, { useState } from 'react';
import {portifolio} from '../data'
import Cards from '../Cards';
import './Nav.css'

export default function Nav(){
    const [indice,setIndice] = useState(0)
    return(
         <nav className="">
             <div className="buttons">
             <button onClick = {() => setIndice(0)} className= {indice == 0 ? "abas active" : "abas"  }> {portifolio.abas[0].title} </button>
             <button onClick = {() => setIndice(1)} className= {indice == 1 ? "abas active" : "abas"  }> {portifolio.abas[1].title}  </button>
             <button onClick = {() => setIndice(2)}className= {indice == 2 ? "abas active" : "abas"  }> {portifolio.abas[2].title} </button>
             </div>
             <Cards indice= {indice} />
         </nav>
        
    )
}