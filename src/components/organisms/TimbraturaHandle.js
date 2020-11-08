import React from "react";
import { useHistory } from "react-router-dom";

export default function TimbraturaHandle({ timbraturaSelezionata }) {
  const history = useHistory();
  return (
    <div className="timbraturaHandle">
      <div className="giornoTimbratura">${timbraturaSelezionata.ingresso}</div>
      <div className="giornoTimbratura">${timbraturaSelezionata.ingresso}</div>
      <div className="giornoTimbratura">${timbraturaSelezionata.uscita}</div>
      <button className="pulsante" onClick={() => history.push("/")}>
        Indietro
      </button>
    </div>
  );
}
