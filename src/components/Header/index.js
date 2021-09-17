import React from "react";
import './Header.css'
import {portifolio} from '../data'

export default function Header(){
    return(
       <section className="hero">
        <div className="fundo">
          <img src={portifolio.background}/>
        </div>
        <figure className="profile">
            <img src={portifolio.foto_perfil} />
            <figcaption>
                <h1 className="name">{portifolio.nome}</h1>
                <h2 className="profession">{portifolio.profissao}</h2>
            </figcaption>
        </figure>
                 

       </section>
       
    )
}