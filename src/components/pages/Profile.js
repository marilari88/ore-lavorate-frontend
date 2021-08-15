import React, { useState } from "react";
import ContrattoHandler from "../organisms/ContrattoHandler";
import ContrattoShow from "../organisms/ContrattoShow";
import ElencoContratti from "../organisms/ElencoContratti";

function Profile() {
  const [contrattoSelezionato, setContrattoSelezionato] = useState(null);
  const [contrattoEdit, setContrattoEdit] = useState(false);
  return (
    <div className="profiloPage">
      {!contrattoSelezionato && (
        <ElencoContratti
          setContrattoSelezionato={setContrattoSelezionato}
          setContrattoEdit={setContrattoEdit}
        />
      )}
      {contrattoSelezionato && contrattoEdit ? (
        <ContrattoHandler
          contrattoSelezionato={contrattoSelezionato}
          setContrattoSelezionato={setContrattoSelezionato}
          setContrattoEdit={setContrattoEdit}
        />
      ) : (
        ""
      )}
      {contrattoSelezionato && !contrattoEdit ? (
        <ContrattoShow
          contrattoSelezionato={contrattoSelezionato}
          setContrattoSelezionato={setContrattoSelezionato}
          setContrattoEdit={setContrattoEdit}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Profile;
