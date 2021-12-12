import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ContractItem({ contratto }) {
  const [statoContratto, setStatoContratto] = useState("");

  useEffect(() => {
    if (!contratto) setStatoContratto("nuovo");
  }, [contratto]);

  return (
    <div className={`contrattoButton ${statoContratto ?? ""}`}>
      <div className="nomeContratto">
        {contratto.nomeContratto ?? "Nuovo Contratto"}
      </div>
      <div className="nomeAzienda">{contratto.nomeAzienda ?? "➕"}</div>
    </div>
  );
}

ContractItem.propTypes = {
  contratto: PropTypes.object,
};

export default ContractItem;
