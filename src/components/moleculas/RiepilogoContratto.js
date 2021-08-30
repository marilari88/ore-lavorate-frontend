import React from "react";

import PulsanteElencoTimbrature from "../atoms/PulsanteElencoTimbrature";
import { stringaTempo } from "../../utils/differenzaorario";
import { useAuth } from "../../context/UserContext";

function RiepilogoContratto(props) {
  const { userData } = useAuth();

  return (
    <div className="riepilogoContratto">
      <div className="titoloContratto">
        {userData.contrattoSelezionato.nomeAzienda}
      </div>
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
