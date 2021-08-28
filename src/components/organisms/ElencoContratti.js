import React, { useState, useEffect } from "react";
import ContrattoButton from "../moleculas/ContrattoButton";
import ContrattoDataService from "../../services/ContrattoService";
import Loader from "react-loader-spinner";

function ElencoContratti({ setContrattoSelezionato, setContrattoEdit }) {
  const [elencoContratti, setElencoContratti] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    caricaElencoContratti();
  }, []);

  const caricaElencoContratti = async () => {
    const contrattiCaricati = await ContrattoDataService.getAll();
    setElencoContratti(contrattiCaricati.data);
    setIsLoading(false);
  };

  return (
    <div>
      <h1>Elenco Contratti</h1>
      {isLoading ? (
        <Loader
          type="ThreeDots"
          color="#89c5cc"
          height={40}
          width={40}
          className="loader"
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default ElencoContratti;
