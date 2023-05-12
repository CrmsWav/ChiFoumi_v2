import React from 'react'

import "../styles/Match.css"

function Match({ choixJoueur, choixOrdi }) {
  return (
    <div className="pfc">
        <img
            id="selectionJoueur"
            src={choixJoueur}
            alt="selection joueur"
        />

        <img
            id="selectionAdversaire"
            src={choixOrdi}
            alt="selection adversaire"
        />
    </div>
  )
}

export default Match
