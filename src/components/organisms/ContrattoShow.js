import React from "react";
import ContrattoDataService from "services/ContrattoService";
import UserDataService from "../../services/UserService";
import { useAuth } from "../../context/UserContext";
import { useHistory } from "react-router-dom";

function ContrattoShow({
  contrattoSelezionato,
  setContrattoSelezionato,
  setContrattoEdit,
}) {
  const history = useHistory();
  const { userData, setUserData } = useAuth();

  const modificaContratto = () => {
    setContrattoEdit(true);
  };

  const cancellaContratto = async () => {
    const response = await ContrattoDataService.delete(contrattoSelezionato.id);
    console.log(response);
    alert("Contratto rimosso");
    setContrattoSelezionato(null);
  };

  // TODO Gestire il salvataggio, aggiornamento context e nuovo token i AuthService
  const saveContrattoSelezionato = async () => {
    const response = await UserDataService.updateContrattoSelezionato(
      contrattoSelezionato.id
    );
    localStorage.setItem("auth-token", response.data.token);

    await setUserData({
      ...userData,
      contrattoSelezionato: {
        id: contrattoSelezionato.id,
        nomeAzienda: contrattoSelezionato.nomeAzienda,
        nomeContratto: contrattoSelezionato.nomeContratto,
        dataInizio: contrattoSelezionato.dataInizio,
        dataFine: contrattoSelezionato.dataFine,
      },
    });
    setContrattoSelezionato(null);
    history.push("/");
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
        <button className="pulsante" onClick={saveContrattoSelezionato}>
          Seleziona Contratto
        </button>
      </div>
    </div>
  );
}

export default ContrattoShow;
