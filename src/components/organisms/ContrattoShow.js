import React from "react";
import ContrattoDataService from "../../services/ContrattoService";

function ContrattoShow({
  contrattoSelezionato,
  setContrattoSelezionato,
  setContrattoEdit,
}) {
  const modificaContratto = () => {
    setContrattoEdit(true);
  };

  const cancellaContratto = async () => {
    let response = await ContrattoDataService.delete(contrattoSelezionato.id);
    alert(response);
    setContrattoSelezionato(null);
  };

  return (
    <div className="contrattoHandler">
      <h1>Gestione Contratto</h1>
      <div className="datiContratto">
        <div>Nome Contratto: {contrattoSelezionato.nomeContratto}</div>
        <div>Nome Azienda: {contrattoSelezionato.nomeAzienda}</div>
        <div>
          Data Inizio:{" "}
          {new Date(contrattoSelezionato.dataInizio).toLocaleDateString(
            "it-IT"
          )}
        </div>
        <div>
          Data Fine:{" "}
          {contrattoSelezionato.dataFine &&
            new Date(contrattoSelezionato.dataFine).toLocaleDateString("it-IT")}
        </div>
      </div>

      <div className="operazioniContratto">
        <button className="pulsante" onClick={modificaContratto}>
          Modifica
        </button>
        <button className="pulsante" onClick={cancellaContratto}>
          Cancella
        </button>
        <button className="pulsante">Imposta Fine</button>
      </div>
    </div>
  );
}

export default ContrattoShow;
