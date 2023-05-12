import React from 'react'

import "../styles/Buttons.css"

function Buttons({ imagesPfc, onClickPierre, onClickFeuille, onClickCiseaux  }) {
  return (
    <div className="boutons">
        <img
            src={imagesPfc.pierre}
            alt="bouton pierre"
            onClick={onClickPierre}
        />

        <img
            src={imagesPfc.feuille}
            alt="bouton feuille"
            onClick={onClickFeuille}
        />

        <img
            src={imagesPfc.ciseaux}
            alt="bouton ciseaux"
            onClick={onClickCiseaux}
        />
    </div>
  )
}

export default Buttons
