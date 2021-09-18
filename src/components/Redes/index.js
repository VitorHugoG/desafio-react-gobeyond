import React from "react";
import { portifolio } from "../data";
import "./Redes.css";

export default function Redes() {
  return (
    <section className="redes-sociais">
      {portifolio.redes.map((rede) => (
        <a href={rede.link} className="icons">
          <img src={rede.logo} alt="redes sociais" />
          <span> {rede.nome} </span>
        </a>
      ))}
    </section>
  );
}
