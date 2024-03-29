import React, { useState, useEffect } from "react";
import { stringaGiorno } from "../../utils/datetime";
import {
  calcoloSecondi,
  stringaTempoBreve,
} from "../../utils/differenzaorario";
import CallMadeIcon from "@material-ui/icons/CallMade";
import PanToolIcon from "@material-ui/icons/PanTool";
import TimeSelector from "../atoms/TimeSelector";

export default function TimbraturaHandle({
  timbraturaSelezionata,
  cancellaTimbraturaSelezionata,
  aggiornaTimbraturaSelezionata,
}) {
  const [giornoSeguente, setGiornoSeguente] = useState(false);

  const [ingressoTimbratura, setIngressoTimbratura] = useState(null);
  const [uscitaTimbratura, setUscitaTimbratura] = useState(null);
  const [differenzaTimbratura, setDifferenzaTimbratura] = useState(null);
  const [isIngressoManuale, setIsIngressoManuale] = useState(false);
  const [isUscitaManuale, setIsUscitaManuale] = useState(false);
  const [isTimbraturaChanged, setIsTimbraturaChanged] = useState(false);

  useEffect(() => {
    setIngressoTimbratura(
      timbraturaSelezionata.ingresso
        ? new Date(timbraturaSelezionata.ingresso)
        : null
    );
    setUscitaTimbratura(
      timbraturaSelezionata.uscita
        ? new Date(timbraturaSelezionata.uscita)
        : null
    );
    setIsIngressoManuale(timbraturaSelezionata.ingressoManuale || false);
    setIsUscitaManuale(timbraturaSelezionata.uscitaManuale || false);
  }, [timbraturaSelezionata]);

  useEffect(() => {
    if (ingressoTimbratura && uscitaTimbratura) {
      console.log("Uscita impostata alle ore: " + uscitaTimbratura);
      setDifferenzaTimbratura(
        calcoloSecondi(uscitaTimbratura, ingressoTimbratura)
      );
      const stessoGiorno =
        ingressoTimbratura.getFullYear() === uscitaTimbratura.getFullYear() &&
        ingressoTimbratura.getMonth() === uscitaTimbratura.getMonth() &&
        ingressoTimbratura.getDate() === uscitaTimbratura.getDate();
      setGiornoSeguente(!stessoGiorno);
    }
  }, [ingressoTimbratura, uscitaTimbratura, timbraturaSelezionata]);

  const salvaTimbratura = () => {
    aggiornaTimbraturaSelezionata({
      ingresso: ingressoTimbratura,
      uscita: uscitaTimbratura,
      differenza: differenzaTimbratura,
      ingressoManuale: isIngressoManuale,
      uscitaManuale: isUscitaManuale,
    });
  };

  const handleIngressoChanged = (orario) => {
    setIngressoTimbratura(orario);
    setIsTimbraturaChanged(true);
    setIsIngressoManuale(true);
  };
  const handleUscitaChanged = (orario) => {
    setUscitaTimbratura(orario);
    setIsTimbraturaChanged(true);
    setIsUscitaManuale(true);
  };

  return (
    <div className="timbraturaHandle">
      <h2 className="giornoTimbratura">
        {stringaGiorno(ingressoTimbratura ?? new Date())}
      </h2>
      <div className="rigaHandleTimbratura">
        <CallMadeIcon style={{ color: "#a2e88b" }} /> Sei entrato alle{" "}
        <TimeSelector
          tempo={ingressoTimbratura}
          setTempo={handleIngressoChanged}
        />
        {isIngressoManuale && <PanToolIcon className="iconaMano" />}
      </div>
      {ingressoTimbratura && (
        <div className="rigaHandleTimbratura">
          <CallMadeIcon
            style={{ color: "#f26d6d", transform: "rotate(90deg)" }}
          />
          Sei uscito alle{" "}
          <TimeSelector
            tempo={uscitaTimbratura}
            setTempo={handleUscitaChanged}
            giornoSeguente={giornoSeguente}
          />
          {isUscitaManuale && <PanToolIcon className="iconaMano" />}
        </div>
      )}
      {differenzaTimbratura > 0 && (
        <div className="tempoLavorato">
          Hai lavorato per {stringaTempoBreve(differenzaTimbratura)}
        </div>
      )}
      <div className="timbratura-modificata">
        <div className="testo-timbratura-modificata">
          {isTimbraturaChanged
            ? "Timbratura Modificare. Salvare per rendere definitive le modifiche"
            : "Per apportare modifiche premere sugli orari"}
        </div>
      </div>
      <div className="rigaPulsantiTimbratura">
        {timbraturaSelezionata._id && (
          <button
            className="pulsante pulsanteCancella"
            onClick={() => cancellaTimbraturaSelezionata()}
          >
            Elimina
          </button>
        )}
        {isTimbraturaChanged && (
          <button
            className="pulsanteSalva pulsante"
            onClick={() => salvaTimbratura()}
          >
            Salva
          </button>
        )}
      </div>
    </div>
  );
}
