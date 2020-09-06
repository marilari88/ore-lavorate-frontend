import React, { useState, useEffect } from "react";
import SwipeableButton from "../atoms/SwipeableButton";
import TimbraturaService from "../../services/TimbraturaService";
import { stringaTempo } from "../../utils/differenzaorario";
function SituazioneTimbratura() {
  const [timbratura, setTimbratura] = useState("");

  useEffect(() => {
    TimbraturaService.getLast()
      .then((response) => {
        setTimbratura(response.data.elenco[0]);
      })
      .then(() => console.log(timbratura));
  }, []);

  return (
    <div className="situazioneTimbratura">
      <div className="etichettaSituazione">Stai lavorando da:</div>
      <div className="tempoLavoroInCorso">
        {stringaTempo(timbratura.differenza)}
      </div>
      {!timbratura ? (
        <SwipeableButton
          color="#52CD5E"
          text="INIZIA A LAVORARE"
          text_unlocked="BUON LAVORO!"
          onSuccess={() => console.log("ingresso")}
        />
      ) : (
        <SwipeableButton
          color="#F26D6D"
          text="TERMINA IL TUO LAVORO"
          text_unlocked="BUON RIPOSO!"
          onSuccess={() => console.log("BUON RIPOSO")}
          right
        />
      )}
    </div>
  );
}

export default SituazioneTimbratura;
