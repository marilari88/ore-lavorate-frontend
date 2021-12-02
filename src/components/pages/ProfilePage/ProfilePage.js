import React, { useState } from "react";
import ContrattoShow from "../../organisms/ContrattoShow";
import ElencoContratti from "../../organisms/ElencoContratti";
import "./ProfilePage.scss";

function ProfilePage() {
  const [contrattoSelezionato, setContrattoSelezionato] = useState(null);
  const [contrattoEdit, setContrattoEdit] = useState(false);
  return (
    <div className="profilePage">
      {!contrattoSelezionato && (
        <ElencoContratti
          setContrattoSelezionato={setContrattoSelezionato}
          setContrattoEdit={setContrattoEdit}
        />
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

export default ProfilePage;
