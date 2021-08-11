import React, { useState, useEffect } from "react";

function ContrattoButton({ nomeContratto, nomeAzienda, showContratto }) {
  const [statoContratto, setStatoContratto] = useState("");
  useEffect(() => {
    console.log(nomeContratto);
    if (!nomeContratto) setStatoContratto("nuovo");
  }, [nomeContratto]);

  const handleContrattoClick = (e) => {
    if (e.currentTarget.classList.contains("nuovo")) {
      // Apertura nuovo contratto
      showContratto();
    } else {
      // Apertura vecchio contratto
    }
  };

  return (
    <div
      className={`contrattoButton ${statoContratto ?? ""}`}
      onClick={handleContrattoClick}
    >
      <div className="nomeContratto">{nomeContratto ?? "Nuovo Contratto"}</div>
      <div className="nomeAzienda">{nomeAzienda ?? "+"}</div>
      <div className="statoContratto">statoContratto</div>
    </div>
  );
}

export default ContrattoButton;
