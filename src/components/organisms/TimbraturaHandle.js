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
  const [giornoSeguente, setGiornoSeguente] = useState(true);

  const [ingressoTimbratura, setIngressoTimbratura] = useState(null);
  const [uscitaTimbratura, setUscitaTimbratura] = useState(null);
  const [differenzaTimbratura, setDifferenzaTimbratura] = useState(null);
  const [isTimbraturaChanged, setIsTimbraturaChanged] = useState(false);

  useEffect(() => {
    setIngressoTimbratura(new Date(timbraturaSelezionata.ingresso));
    setUscitaTimbratura(new Date(timbraturaSelezionata.uscita));
  }, [timbraturaSelezionata]);

  useEffect(() => {
    console.log(timbraturaSelezionata);
    if (ingressoTimbratura && uscitaTimbratura) {
      setDifferenzaTimbratura(
        calcoloSecondi(uscitaTimbratura, ingressoTimbratura)
      );
      const stessoGiorno =
        ingressoTimbratura.getFullYear() === uscitaTimbratura.getFullYear() &&
        ingressoTimbratura.getMonth() === uscitaTimbratura.getMonth() &&
        ingressoTimbratura.getDate() === uscitaTimbratura.getDate();
      setGiornoSeguente(!stessoGiorno);
    }
    const ingressoTimbraturaSelezionata = new Date(
      timbraturaSelezionata.ingresso
    );
    const uscitaTimbraturaSelezionata = new Date(timbraturaSelezionata.uscita);
    console.log(ingressoTimbraturaSelezionata, uscitaTimbraturaSelezionata);
    if (ingressoTimbratura) {
      setIsTimbraturaChanged(
        ingressoTimbratura.getTime() !==
          ingressoTimbraturaSelezionata.getTime() ||
          uscitaTimbratura.getTime() !== uscitaTimbraturaSelezionata.getTime()
      );
    }
  }, [ingressoTimbratura, uscitaTimbratura, timbraturaSelezionata]);
  const salvaTimbratura = () => {
    aggiornaTimbraturaSelezionata({
      ingresso: ingressoTimbratura,
      uscita: uscitaTimbratura,
      differenza: differenzaTimbratura,
    });
  };
  return (
    <div className="timbraturaHandle">
      <h2 className="giornoTimbratura">{stringaGiorno(ingressoTimbratura)}</h2>
      <div className="rigaHandleTimbratura">
        <CallMadeIcon style={{ color: "#a2e88b" }} /> Sei entrato alle{" "}
        <TimeSelector
          tempo={ingressoTimbratura}
          setTempo={setIngressoTimbratura}
        />
      </div>
      <div className="rigaHandleTimbratura">
        <CallMadeIcon
          style={{ color: "#f26d6d", transform: "rotate(90deg)" }}
        />
        Sei uscito alle{" "}
        <TimeSelector
          tempo={uscitaTimbratura}
          setTempo={setUscitaTimbratura}
          giornoSeguente={giornoSeguente}
        />
      </div>
      <div className="tempoLavorato">
        Hai lavorato per {stringaTempoBreve(differenzaTimbratura)}
      </div>
      <div className="timbraturaManuale">
        <PanToolIcon className="iconaMano" />
        <div className="testoTimbraturaManuale">
          {isTimbraturaChanged
            ? "Tibratura modificata manualmente"
            : timbraturaSelezionata.timbraturaManuale
            ? `Timbratura modificata/inserita manualmente il {timbraturaSelezionata.createdAt}`
            : "Per apportare modifiche premere sugli orari"}
        </div>
      </div>
      <div className="rigaPulsantiTimbratura">
        <button
          className="pulsante pulsanteCancella"
          onClick={() => cancellaTimbraturaSelezionata()}
        >
          Elimina
        </button>
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
