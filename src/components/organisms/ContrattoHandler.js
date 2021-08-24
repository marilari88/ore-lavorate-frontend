import React, { useEffect, useState } from "react";
import ContrattoDataService from "../../services/ContrattoService";
import DateSelector from "../atoms/DateSelector";

function ContrattoHandler({
  contrattoSelezionato,
  setContrattoSelezionato,
  setContrattoEdit,
}) {
  const [idContratto, setIdContratto] = useState("");
  const [nomeContratto, setNomeContratto] = useState("");
  const [nomeAzienda, setNomeAzienda] = useState("");
  const [dataInizio, setDataInizio] = useState(undefined);
  const [dataFine, setDataFine] = useState(undefined);

  useEffect(() => {
    console.log(contrattoSelezionato);
    setIdContratto(contrattoSelezionato.id ?? "");
    setNomeContratto(contrattoSelezionato.nomeContratto ?? "");
    setNomeAzienda(contrattoSelezionato.nomeAzienda ?? "");
    setDataInizio(contrattoSelezionato.dataInizio ?? undefined);
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
    try {
      if (idContratto) {
        await ContrattoDataService.update(idContratto, datiContratto);
      } else {
        let response = await ContrattoDataService.create(datiContratto);
        console.info(response);
      }
    } catch (err) {
      console.err(err);
    }
    setContrattoEdit(false);
    setContrattoSelezionato(null);
  };

  const annullaModifica = () => {
    setContrattoEdit(false);
    setContrattoSelezionato(null);
  };

  return (
    <div className="contrattoHandler">
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
        <div>
          <label htmlFor="nomeAzienda">Nome Azienda</label>
          <input
            id="nomeAzienda"
            value={nomeAzienda}
            type="text"
            onChange={(e) => setNomeAzienda(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dataInizio">Data inizio</label>
          <DateSelector tempo={dataInizio} />
        </div>
        <div>
          <label htmlFor="dataFine">Data fine</label>
          <input
            id="dataFine"
            type="text"
            value={dataFine}
            onChange={(e) => setDataFine(e.target.value)}
          />
        </div>
        <input type="submit" className="submitForm pulsante" value="Conferma" />
        <input
          type="reset"
          className="annullaForm pulsante"
          value="Annulla"
          onClick={annullaModifica}
        />
      </form>
    </div>
  );
}

export default ContrattoHandler;
