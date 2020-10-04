import React, { useEffect, useState } from "react";
import TimbraturaService from "../../services/TimbraturaService";
import { calcoloSecondi, stringaTempo } from "../../utils/differenzaorario";
import SwipeableButton from "../atoms/SwipeableButton";
function SituazioneTimbratura({ recuperaTotaleContratto }) {
  const [timbratura, setTimbratura] = useState({});
  const [labelDescrizione, setLabelDescrizione] = useState("");
  const [tempoLavoro, setTempoLavoro] = useState(0);
  const [statoTimbratura, setStatoTimbratura] = useState(0);

  /* 
  stato 0 = caricamento ultima timbratura
  stato 1 = nuova timbratura
  stato 2 = turno di lavoro appena iniziato
  stato 3 = turno di lavoro in corso
  stato 4 = turno di lavoro appena concluso
  stato 5 = riepilogo turno di lavoro
   */

  useEffect(() => {
    recuperoUltimaTimbratura();
  }, []);

  useEffect(() => {
    if (statoTimbratura === 0) {
      setLabelDescrizione("Caricamento timbratura in corso... ");
    } else if (statoTimbratura === 1) {
      setLabelDescrizione("Inizia a lavorare ");
    } else if (statoTimbratura === 2 || statoTimbratura === 3) {
      setLabelDescrizione("Stai lavorando da ");
    } else {
      setLabelDescrizione("Hai lavorato per ");
    }

    if (statoTimbratura === 2 || statoTimbratura === 3) {
      const tempoIngresso = new Date(timbratura.ingresso);
      setTempoLavoro(calcoloSecondi(new Date(), tempoIngresso));
      let intervallo = setInterval(() => {
        setTempoLavoro(calcoloSecondi(new Date(), tempoIngresso));
      }, 1000);
      return () => clearInterval(intervallo);
    }
  }, [statoTimbratura, timbratura]);

  const recuperoUltimaTimbratura = () => {
    TimbraturaService.getLast()
      .then((response) => {
        if (response.data && response.data !== []) {
          setTimbratura(response.data[0]);
          setStatoTimbratura(response.data[0].uscita ? 1 : 3);
        } else {
          setTimbratura({});
          setStatoTimbratura(1);
        }
      })
      .catch((err) => {
        setLabelDescrizione("Impossibile recuperare l'ultima timbratura");
        console.error(
          "Errore nel recuperare l'ultima timbratura: " + err.response.data
        );
      });
  };

  const inserisciIngresso = async () => {
    const timbraturaIngresso = new Date();
    const timbraturaCreata = await TimbraturaService.create({
      ingresso: timbraturaIngresso,
    });
    setTimbratura({
      _id: timbraturaCreata.data._id,
      ingresso: timbraturaIngresso,
    });
    setStatoTimbratura(2);
    setTimeout(() => setStatoTimbratura(3), 5000);
  };

  const inserisciUscita = async () => {
    setStatoTimbratura(4);
    const differenzaSecondi = calcoloSecondi(
      new Date(timbratura.ingresso),
      new Date()
    );

    const timbraturaAggiornata = {
      ingresso: timbratura.ingresso,
      uscita: new Date(),
      differenza: differenzaSecondi,
    };
    await TimbraturaService.update(timbratura._id, timbraturaAggiornata);
    setTimeout(() => {
      setStatoTimbratura(5);
      setTimbratura(timbraturaAggiornata);
    }, 2000);
    recuperaTotaleContratto();
  };

  return (
    <div className="situazioneTimbratura">
      <div className="etichettaSituazione">{labelDescrizione}</div>
      <div className="tempoLavoroInCorso">{stringaTempo(tempoLavoro)}</div>
      {(statoTimbratura === 3 || statoTimbratura === 4) && (
        <SwipeableButton
          key="pulsanteUscita"
          color="#F26D6D"
          text="TERMINA IL TUO LAVORO"
          text_unlocked="BUON RIPOSO!"
          onSuccess={() => inserisciUscita()}
          right
        />
      )}
      {(statoTimbratura === 1 || statoTimbratura === 2) && (
        <SwipeableButton
          key="pulsanteIngresso"
          color="#52CD5E"
          text="INIZIA A LAVORARE"
          text_unlocked="BUON LAVORO!"
          onSuccess={() => inserisciIngresso()}
        />
      )}
      {statoTimbratura === 5 && (
        <button
          className="pulsante"
          onClick={() => {
            setStatoTimbratura(1);
            setTempoLavoro(0);
            setTimbratura({ ingresso: "", uscita: "", differenza: 0 });
          }}
        >
          Inizia nuovo Turno
        </button>
      )}
    </div>
  );
}

export default SituazioneTimbratura;
