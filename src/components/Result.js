import React from 'react'

import static_result from "../assets/statics/resultat_cropped.png";

import "../styles/Result.css"

function Result({ resultat }) {
  return (
    <div className="resultats">
        <img src={static_result} className="resultat" alt="Résultat" />

        <img src={resultat} id="gagnerPerdu" alt={resultat} />
    </div>
  )
}

export default Result
