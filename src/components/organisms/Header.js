import React, { useState, useEffect } from "react";
import InfoLogin from "../atoms/InfoLogin";
import InfoContratto from "../atoms/InfoContratto";
import { useAuth } from "../../context/UserContext";
import ContrattoService from "../../services/ContrattoService";

function Header() {
  const { userData, setUserData } = useAuth();
  const [nomeContratto, setNomeContratto] = useState(null);

  useEffect(() => {
    recuperaNomeContratto();
  }, []);

  const recuperaNomeContratto = async () => {
    const contrattoUtente = await ContrattoService.get(
      userData.contrattoSelezionato
    );
    if (contrattoUtente.data)
      setNomeContratto(contrattoUtente.data.nomeContratto);
  };

  return (
    <header>
      <nav className="topBar">
        <InfoContratto nomeContratto={nomeContratto} />
        {userData ? (
          <InfoLogin userData={userData} setUserData={setUserData} />
        ) : (
          ""
        )}
      </nav>
    </header>
  );
}
export default Header;
