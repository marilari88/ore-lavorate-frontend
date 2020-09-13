import React from "react";
import { Link } from "react-router-dom";

export default function PulsanteElencoTimbrature() {
  return (
    <Link to="/elencotimbrature" style={{ marginTop: 36 }}>
      <div className="pulsanteElencoTimbrature pulsante">Elenco Timbrature</div>
    </Link>
  );
}
