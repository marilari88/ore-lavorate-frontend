import React, { useState, useEffect } from "react";

function ContrattoButton({
  id,
  nomeContratto,
  nomeAzienda,
  dataInizio,
  dataFine,
  setContrattoSelezionato,
  setContrattoEdit,
}) {
  const [statoContratto, setStatoContratto] = useState("");
  useEffect(() => {
    if (!nomeContratto) setStatoContratto("nuovo");
  }, [nomeContratto]);

  const handleContrattoClick = () => {
    if (!id) {
      setContrattoEdit(true);
    }

    setContrattoSelezionato({
      id,
      nomeContratto,
      nomeAzienda,
      dataInizio,
      dataFine,
    });
  };

  return (
    <div
      className={`contrattoButton ${statoContratto ?? ""}`}
      onClick={handleContrattoClick}
    >
      <div className="nomeContratto">{nomeContratto ?? "Nuovo Contratto"}</div>
      <div className="nomeAzienda">{nomeAzienda ?? "➕"}</div>
    </div>
  );
}

export default ContrattoButton;
