import React from "react";
import InfoLogin from "../atoms/InfoLogin";
import InfoContratto from "../atoms/InfoContratto";

function Header() {
  return (
    <header>
      <nav className="topBar">
        <InfoContratto />
        <InfoLogin />
      </nav>
    </header>
  );
}
export default Header;
