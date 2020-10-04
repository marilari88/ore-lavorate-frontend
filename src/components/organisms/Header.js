import React from "react";
import InfoLogin from "../atoms/InfoLogin";
import InfoContratto from "../atoms/InfoContratto";
import { useAuth } from "../../context/UserContext";

function Header() {
  const { userData } = useAuth();

  return (
    <header>
      <nav className="topBar">
        <InfoContratto />
        {userData ? <InfoLogin userData={userData} /> : ""}
      </nav>
    </header>
  );
}
export default Header;
