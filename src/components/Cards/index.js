import React from "react";
import {portifolio} from '../data'
import "./Cards.css"

export default function Cards({indice}){
    return(
         <section className="cards-container">
              {portifolio.abas[indice].posts.map((post)=>
                <article className="cards">
                     <a href={post.link}>
                        <div className="background">
                           <img src={post.img} target="_blank" />
                        </div>
                         <span className="titulo-card"> {post.title}</span>
                     </a>
                </article>
             
             )}
         </section>
    )
}