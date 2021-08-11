import React, { useState } from "react";
import ContrattoDataService from "../../services/ContrattoService";

function ContrattoHandler() {
  const [nomeContratto, setNomeContratto] = useState("");
  const [nomeAzienda, setNomeAzienda] = useState("");

  const salvaContratto = async (e) => {
    e.preventDefault();
    try {
      await ContrattoDataService.create({
        nomecontratto: nomeContratto,
        nomeazienda: nomeAzienda,
        inizioContratto: new Date(),
      });
    } catch (err) {
      console.err(err);
    }
  };

  return (
    <div className="contrattoHandler">
      <h2>Gestione del contratto</h2>
      <form onSubmit={(e) => salvaContratto(e)}>
        <div className="rigaForm">
          <label htmlFor="name">Nome Contratto</label>
          <input
            id="nomeContratto"
            type="text"
            onChange={(e) => setNomeContratto(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Nome Azienda</label>
          <input
            id="nomeAzienda"
            type="text"
            onChange={(e) => setNomeAzienda(e.target.value)}
          />
        </div>
        <input type="submit" className="submitForm" value="Conferma" />
      </form>
    </div>
  );
}

export default ContrattoHandler;
