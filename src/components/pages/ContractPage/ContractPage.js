import React, { useState } from "react";
import ContractForm from "components/organisms/ContractForm/ContractForm";
import ContrattoShow from "../../organisms/ContrattoShow";

function ContractPage() {
  const [contrattoSelezionato, setContrattoSelezionato] = useState(null);
  const [contrattoEdit, setContrattoEdit] = useState(false);
  return (
    <main className="contractPage">
      <h1 className="pageTitle">Modifica Contratto</h1>
      <ContractForm />
      <ContrattoShow
        contrattoSelezionato={contrattoSelezionato}
        setContrattoSelezionato={setContrattoSelezionato}
        setContrattoEdit={setContrattoEdit}
      />
    </main>
  );
}

export default ContractPage;
