import React, { useEffect, useState } from "react";
import ContrattoDataService from "services/ContrattoService";
import DateSelector from "components/atoms/DateSelector/DateSelector";

function ContrattoForm({
  contrattoSelezionato,
  setContrattoSelezionato,
  setContrattoEdit,
}) {
  const [idContratto, setIdContratto] = useState("");
  const [nomeContratto, setNomeContratto] = useState("");
  const [nomeAzienda, setNomeAzienda] = useState("");
  const [dataInizio, setDataInizio] = useState(undefined);
  const [dataFine, setDataFine] = useState(undefined);
  const [messageError, setMessageError] = useState("");

  useEffect(() => {
    setIdContratto(contrattoSelezionato.id ?? "");
    setNomeContratto(contrattoSelezionato.nomeContratto ?? "");
    setNomeAzienda(contrattoSelezionato.nomeAzienda ?? "");
    setDataInizio(contrattoSelezionato.dataInizio ?? new Date());
    setDataFine(contrattoSelezionato.dataFine ?? undefined);
  }, [contrattoSelezionato]);

  const salvaContratto = async (e) => {
    e.preventDefault();
    let datiContratto = {
      nomecontratto: nomeContratto,
      nomeazienda: nomeAzienda,
      inizioContratto: dataInizio,
      fineContratto: dataFine && null,
    };
    let response;
    try {
      if (idContratto) {
        response = await ContrattoDataService.update(
          idContratto,
          datiContratto
        );
      } else {
        response = await ContrattoDataService.create(datiContratto);
      }
      setContrattoEdit(false);
      setContrattoSelezionato({
        id: response.data._id,
        nomeContratto: response.data.nomeContratto,
        nomeAzienda: response.data.nomeAzienda,
        dataInizio: response.data.inizioContratto,
        dataFine: response.data.fineContratto,
      });
    } catch (err) {
      setMessageError(err.response.data.error);
    }
  };

  const annullaModifica = () => {
    setContrattoEdit(false);
    setContrattoSelezionato(null);
  };

  return (
    <>
      <h1>Modifica Contratto</h1>
      <form onSubmit={(e) => salvaContratto(e)}>
        <div className="rigaForm">
          <label htmlFor="nomeContratto">Nome Contratto</label>
          <input
            id="nomeContratto"
            type="text"
            value={nomeContratto}
            onChange={(e) => setNomeContratto(e.target.value)}
          />
        </div>
        <div className="rigaForm">
          <label htmlFor="nomeAzienda">Nome Azienda</label>
          <input
            id="nomeAzienda"
            value={nomeAzienda}
            type="text"
            onChange={(e) => setNomeAzienda(e.target.value)}
          />
        </div>
        <div className="rigaForm">
          <label htmlFor="dataInizio">Data inizio</label>
          <DateSelector tempo={dataInizio} setTempo={setDataInizio} />
        </div>
        <div className="rigaForm">
          <label htmlFor="dataFine">Data fine</label>
          <input
            id="dataFine"
            type="text"
            value={dataFine}
            onChange={(e) => setDataFine(e.target.value)}
          />
        </div>
        <div className="messageError">{messageError}</div>
        <input type="submit" className="submitForm pulsante" value="Conferma" />
        <input
          type="reset"
          className="annullaForm pulsante"
          value="Annulla"
          onClick={annullaModifica}
        />
      </form>
    </>
  );
}

export default ContrattoForm;
