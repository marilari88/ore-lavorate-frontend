import React from "react";
import PulsanteElencoTimbrature from "../atoms/PulsanteElencoTimbrature";

function RiepilogoContratto() {
  return (
    <div className="riepilogoContratto">
      <div className="titoloContratto">Anno 2020</div>
      <div className="riepilogoOre">
        <div className="etichettaTotale">Hai lavorato per un totale di:</div>
        <div className="totaleOre">24 Ore, 17 Minuti</div>
      </div>
      <div className="resocontoOre">Devi recuperare 45 Ore</div>
      <PulsanteElencoTimbrature />
    </div>
  );
}

export default RiepilogoContratto;
