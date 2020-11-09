import React, { useState, useEffect } from "react";
import { stringaGiorno, stringaOrario } from "../../utils/datetime";
import { stringaTempoBreve } from "../../utils/differenzaorario";
import CallMadeIcon from "@material-ui/icons/CallMade";
import PanToolIcon from "@material-ui/icons/PanTool";

export default function TimbraturaHandle({
  timbraturaSelezionata,
  cancellaTimbraturaSelezionata,
}) {
  const [giornoSeguente, setGiornoSeguente] = useState(true);

  useEffect(() => {
    const ingressoDate = new Date(timbraturaSelezionata.ingresso);
    const uscitaDate = new Date(timbraturaSelezionata.uscita);
    const giornoUscita = uscitaDate.getDay();
    const giornoIngresso = ingressoDate.getDay();
    setGiornoSeguente(giornoUscita > giornoIngresso);
    console.log(giornoUscita, giornoIngresso);
  }, [timbraturaSelezionata]);

  return (
    <div className="timbraturaHandle">
      <h2 className="giornoTimbratura">
        {stringaGiorno(timbraturaSelezionata.ingresso)}
      </h2>
      <div className="rigaHandleTimbratura">
        <CallMadeIcon style={{ color: "#a2e88b" }} /> Sei entrato alle{" "}
        <div className="orarioIngresso">
          {stringaOrario(timbraturaSelezionata.ingresso)}
        </div>
      </div>
      <div className="rigaHandleTimbratura">
        <CallMadeIcon
          style={{ color: "#f26d6d", transform: "rotate(90deg)" }}
        />
        Sei uscito alle{" "}
        <div className={`orarioUscita ${giornoSeguente && "giornoSeguente"}`}>
          {stringaOrario(timbraturaSelezionata.uscita)}
        </div>
      </div>
      <div className="tempoLavorato">
        Hai lavorato per {stringaTempoBreve(timbraturaSelezionata.differenza)}
      </div>
      <div className="timbraturaManuale">
        <PanToolIcon className="iconaMano" />
        <div className="testoTimbraturaManuale">
          La timbratura è stata modificata manualmente
        </div>
      </div>
      <div className="rigaPulsantiTimbratura">
        <button
          className="pulsante pulsanteCancella"
          onClick={() => cancellaTimbraturaSelezionata()}
        >
          Elimina
        </button>
      </div>
    </div>
  );
}
