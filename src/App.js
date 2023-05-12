import React, { useEffect, useState } from "react";

import title from "./assets/chifoumi_title_cropped.png";

import pierre from "./assets/pfc/pierre.jpg";
import feuille from "./assets/pfc/feuille.jpg";
import ciseaux from "./assets/pfc/ciseaux.jpg";

import win from "./assets/result/gagne_cropped.png";
import lose from "./assets/result/perdu_cropped.png";
import draw from "./assets/result/egalite_cropped.png";

import Buttons from "./components/Buttons";
import Vs from "./components/Vs";
import Match from "./components/Match";
import Result from "./components/Result";

import "./App.css";

function App() {
  const imagesPfc = {
      pierre: pierre,
      feuille: feuille,
      ciseaux: ciseaux,
  };

  const imageResult = {
    win: win,
    lose: lose,
    draw: draw,
  };

  const [choixJoueur, setChoixJoueur] = useState(imagesPfc.feuille);
  const [choixOrdi, setChoixOrdi] = useState(imagesPfc.ciseaux);
  const [resultat, setResultat] = useState(imageResult.lose);

  const choixOrdiAleatoire = () => {
    const choix = Math.floor(Math.random() * 3);

    switch (choix) {
      case 0:
        setChoixOrdi(imagesPfc.pierre);
        break;
      case 1:
        setChoixOrdi(imagesPfc.feuille);
        break;
      case 2:
        setChoixOrdi(imagesPfc.ciseaux);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (choixJoueur === choixOrdi) {
      setResultat(imageResult.draw);
    } else if (
      (choixJoueur === imagesPfc.pierre && choixOrdi === imagesPfc.ciseaux) ||
      (choixJoueur === imagesPfc.feuille && choixOrdi === imagesPfc.pierre) ||
      (choixJoueur === imagesPfc.ciseaux && choixOrdi === imagesPfc.feuille)
    ) {
      setResultat(imageResult.win);
    } else {
      setResultat(imageResult.lose);
    }
  }, [choixJoueur, choixOrdi]);

  const onClickPierre = () => {
    setChoixJoueur(imagesPfc.pierre);
    choixOrdiAleatoire();
  };

  const onClickFeuille = () => {
      setChoixJoueur(imagesPfc.feuille);
      choixOrdiAleatoire();
  };

  const onClickCiseaux = () => {
      setChoixJoueur(imagesPfc.ciseaux);
      choixOrdiAleatoire();
  };

  return (
    <div className="App">
      <header>
          <img src={title} alt="logo titre chifoumi" />
      </header>

      <main>
        <div className="choicesContainer">
          <Buttons imagesPfc={imagesPfc} onClickPierre={onClickPierre} onClickFeuille={onClickFeuille} onClickCiseaux={onClickCiseaux} />

          <Vs />

          <Match choixJoueur={choixJoueur} choixOrdi={choixOrdi} />

          <Result resultat={resultat} />
        </div>
      </main>

      <footer>
          <p>2021 © Réalisé par <a href="portfolio-de-marcus.vercel.app">Step</a></p>

          <p>Graphismes <a href="https://www.instagram.com/ae_fkh/">@ae_fkh</a></p>
      </footer>
    </div>
  );
}

export default App;
