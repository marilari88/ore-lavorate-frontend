import React from "react";
import SwipeableButton from "../atoms/SwipeableButton";

function SituazioneTimbratura() {
  return (
    <div className="situazioneTimbratura">
      <div className="etichettaSituazione">Stai lavorando da:</div>
      <div className="tempoLavoroInCorso">7 ore, 15 minuti e 16 secondi</div>
      <SwipeableButton
        color="#6ab04c"
        text="INIZIA A LAVORARE"
        onSuccess={() => console.log("ciao")}
      />
    </div>
  );
}

export default SituazioneTimbratura;
