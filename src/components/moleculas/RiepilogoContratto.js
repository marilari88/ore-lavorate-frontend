import React, { useState, useEffect } from "react";
import TimbraturaService from "../../services/TimbraturaService";
import PulsanteElencoTimbrature from "../atoms/PulsanteElencoTimbrature";
import { stringaTempo } from "../../utils/differenzaorario";
function RiepilogoContratto() {
  const [sommaTempo, setSommaTempo] = useState(0);

  useEffect(() => {
    recuperaTotaleContratto();
  }, []);

  const recuperaTotaleContratto = async () => {
    const elencoTimbrature = await TimbraturaService.getAll();
    let sommaTimbrature = Array.from(elencoTimbrature.data).reduce(
      (totale, numero) => {
        return totale + parseInt(numero["differenza"] || 0);
      },
      0
    );
    setSommaTempo(sommaTimbrature);
  };

  return (
    <div className="riepilogoContratto">
      <div className="titoloContratto">Anno 2020</div>
      <div className="riepilogoOre">
        <div className="etichettaTotale">Hai lavorato per un totale di:</div>
        <div className="totaleOre">{stringaTempo(sommaTempo)}</div>
      </div>
      <div className="resocontoOre">Devi recuperare 45 Ore</div>
      <PulsanteElencoTimbrature />
    </div>
  );
}

export default RiepilogoContratto;
