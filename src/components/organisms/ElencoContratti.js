import React, { useState, useEffect } from "react";
import ContractItem from "components/moleculas/ContractItem/ContractItem";
import ContrattoDataService from "services/ContrattoService";
import Loader from "react-loader-spinner";

function ElencoContratti() {
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

  if (isLoading) {
    return (
      <Loader
        type="ThreeDots"
        color="#89c5cc"
        height={40}
        width={40}
        className="loader"
      />
    );
  }

  return (
    <div>
      <h1>Elenco Contratti</h1>
      <>
        <div className="riassuntoContratti">
          Hai un totale di {elencoContratti.length} 📗
        </div>
        <div className="elencoContratti">
          <ContractItem contratto="null" />
          {elencoContratti &&
            Array.from(elencoContratti).map((contratto) => (
              <ContractItem key={contratto._id} contratto={contratto} />
            ))}
        </div>
      </>
    </div>
  );
}

export default ElencoContratti;
