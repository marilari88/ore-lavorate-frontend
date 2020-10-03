import React, { useContext, useEffect } from "react";
import InfoLogin from "../atoms/InfoLogin";
import InfoContratto from "../atoms/InfoContratto";
import UserContext from "../../context/UserContext";

function Header() {
  const { userData } = useContext(UserContext);

  useEffect(() => {
    if (userData) console.log(userData);
  }, [userData]);

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
