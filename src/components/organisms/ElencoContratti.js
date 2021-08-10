import React, { useState, useEffect } from "react";
import ContrattoButton from "../atoms/ContrattoButton";
import ContrattoDataService from "../../services/ContrattoService";

function ElencoContratti() {
  const [elencoContratti, setElencoContratti] = useState([]);

  useEffect(() => {
    setElencoContratti(async () => {
      let elencoContratti = await ContrattoDataService.getAll();
      return elencoContratti;
    });
  }, []);

  return (
    <div>
      <h1>Elenco Contratti</h1>
      <div className="elencoContratti">
        <ContrattoButton nomeAzienda="" nomeContratto="" />
        {elencoContratti &&
          Array.from(elencoContratti).map((contratto) => (
            <ContrattoButton
              nomeAzienda={contratto.nomeazienda}
              nomeContratto={contratto.nomecontratto}
            />
          ))}
      </div>
    </div>
  );
}

export default ElencoContratti;
