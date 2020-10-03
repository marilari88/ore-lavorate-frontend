import React, { useState, useEffect } from "react";
import RiepilogoContratto from "../moleculas/RiepilogoContratto";
import SituazioneTimbratura from "../moleculas/SituazioneTimbratura";
import TimbraturaService from "../../services/TimbraturaService";

function Main() {
  const [totaleOreContratto, setTotaleOreContratto] = useState(0);

  useEffect(() => {
    recuperaTotaleContratto();
  }, []);

  const recuperaTotaleContratto = async () => {
    const elencoTimbrature = await TimbraturaService.getAll();
    let sommaTimbrature = Array.from(elencoTimbrature.data).reduce(
      (totale, numero) => {
        return totale + parseInt(numero["differenza"] || 0);
      },
      0
    );
    setTotaleOreContratto(sommaTimbrature);
  };

  return (
    <main className="main">
      <RiepilogoContratto totaleOreContratto={totaleOreContratto} />
      <SituazioneTimbratura setTotaleOreContratto={recuperaTotaleContratto} />
    </main>
  );
}

export default Main;
