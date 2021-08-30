import React, { useEffect } from "react";
import InfoLogin from "../atoms/InfoLogin";
import InfoContratto from "../atoms/InfoContratto";
import { useAuth } from "../../context/UserContext";

function Header() {
  const { userData, setUserData } = useAuth();

  return (
    <header>
      <nav className="topBar">
        {userData.contrattoSelezionato ? (
          <InfoContratto
            nomeContratto={
              userData.contrattoSelezionato?.nomeContratto ?? "Nessun Contratto"
            }
          />
        ) : (
          <div></div>
        )}
        {userData && (
          <InfoLogin userData={userData} setUserData={setUserData} />
        )}
      </nav>
    </header>
  );
}
export default Header;
