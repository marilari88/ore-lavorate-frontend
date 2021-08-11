import React, { useState, useEffect } from "react";
import ContrattoButton from "../atoms/ContrattoButton";
import ContrattoDataService from "../../services/ContrattoService";

function ElencoContratti({ showContratto }) {
  const [elencoContratti, setElencoContratti] = useState([]);

  useEffect(() => {
    caricaElencoContratti();
  }, []);

  const caricaElencoContratti = async () => {
    const contrattiCaricati = await ContrattoDataService.getAll();
    setElencoContratti(contrattiCaricati.data);
  };

  return (
    <div>
      <h1>Elenco Contratti</h1>
      <div>Hai un totale di {elencoContratti.length} 📗</div>
      <div className="elencoContratti">
        <ContrattoButton
          nomeAzienda={null}
          nomeContratto={null}
          showContratto={showContratto}
        />
        {elencoContratti &&
          Array.from(elencoContratti).map((contratto, key) => (
            <ContrattoButton
              key={key}
              nomeAzienda={contratto.nomeAzienda}
              nomeContratto={contratto.nomeContratto}
            />
          ))}
      </div>
    </div>
  );
}

export default ElencoContratti;
