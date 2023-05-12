import React from "react";

import joueur from "../assets/statics/joueur_cropped.png";
import vs from "../assets/statics/vs_cropped.png";
import adversaire from "../assets/statics/adversaire_cropped.png";

import "../styles/Vs.css";

function Vs() {
  return (
    <div className="joueurVsBot">
      <img src={joueur} className="joueur" alt="Joueur" />

      <img src={vs} className="vs" alt="VS" />

      <img src={adversaire} className="adversaire" alt="Adversaire" />
    </div>
  );
}

export default Vs;
