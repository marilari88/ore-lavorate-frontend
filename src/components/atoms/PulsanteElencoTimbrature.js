import React from "react";
import { Link } from "react-router-dom";

export default function PulsanteElencoTimbrature() {
  return (
    <Link to="/elencotimbrature" style={{ marginTop: 36 }}>
      <div
        className="pulsanteElencoTimbrature pulsante"
        style={{
          backgroundColor: "#89c5cc",
        }}
      >
        Elenco Timbrature
      </div>
    </Link>
  );
}
