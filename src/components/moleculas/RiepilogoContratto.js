import React from "react";

import PulsanteElencoTimbrature from "../atoms/PulsanteElencoTimbrature";
import { stringaTempo } from "../../utils/differenzaorario";
function RiepilogoContratto(props) {
  return (
    <div className="riepilogoContratto">
      <div className="titoloContratto">Anno 2020</div>
      <div className="riepilogoOre">
        <div className="etichettaTotale">Hai lavorato per un totale di:</div>
        <div className="totaleOre">
          {stringaTempo(props.totaleOreContratto)}
        </div>
      </div>
      <div className="resocontoOre">Devi recuperare 45 Ore</div>
      <PulsanteElencoTimbrature />
    </div>
  );
}

export default RiepilogoContratto;
