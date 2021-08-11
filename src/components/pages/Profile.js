import React, { useState } from "react";
import ContrattoHandler from "../organisms/ContrattoHandler";
import ElencoContratti from "../organisms/ElencoContratti";

function Profile() {
  const [showContratto, setShowContratto] = useState(false);
  const showContrattoWindow = () => {
    console.log("Apertura contratto");
    setShowContratto(true);
  };
  return (
    <div className="profiloPage">
      <ElencoContratti showContratto={showContrattoWindow} />
      {showContratto ? <ContrattoHandler /> : ""}
    </div>
  );
}

export default Profile;
