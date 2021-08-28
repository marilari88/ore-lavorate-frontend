import React, { useState, useEffect } from "react";
import ContrattoButton from "../moleculas/ContrattoButton";
import ContrattoDataService from "../../services/ContrattoService";

function ElencoContratti({ setContrattoSelezionato, setContrattoEdit }) {
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
      <div className="riassuntoContratti">
        Hai un totale di {elencoContratti.length} 📗
      </div>
      <div className="elencoContratti">
        <ContrattoButton
          id={null}
          nomeAzienda={null}
          nomeContratto={null}
          dataInizio={null}
          dataFine={null}
          setContrattoSelezionato={setContrattoSelezionato}
          setContrattoEdit={setContrattoEdit}
        />
        {elencoContratti &&
          Array.from(elencoContratti).map((contratto) => (
            <ContrattoButton
              key={contratto._id}
              id={contratto._id}
              nomeAzienda={contratto.nomeAzienda}
              nomeContratto={contratto.nomeContratto}
              dataInizio={contratto.inizioContratto}
              dataFine={contratto.fineContratto}
              setContrattoSelezionato={setContrattoSelezionato}
            />
          ))}
      </div>
    </div>
  );
}

export default ElencoContratti;
