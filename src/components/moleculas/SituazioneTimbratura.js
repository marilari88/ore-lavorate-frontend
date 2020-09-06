import React from "react";
import SwipeableButton from "../atoms/SwipeableButton";

function SituazioneTimbratura() {
  return (
    <div className="situazioneTimbratura">
      <div className="etichettaSituazione">Stai lavorando da:</div>
      <div className="tempoLavoroInCorso">7 ore, 15 minuti e 16 secondi</div>
      <SwipeableButton
        color="#52CD5E"
        text="INIZIA A LAVORARE"
        text_unlocked="BUON LAVORO!"
        onSuccess={() => console.log("ciao")}
      />
      <SwipeableButton
        color="#F26D6D"
        text="TERMINA IL TUO LAVORO"
        text_unlocked="BUON RIPOSO!"
        onSuccess={() => console.log("BUON RIPOSO")}
        right
      />
    </div>
  );
}

export default SituazioneTimbratura;
