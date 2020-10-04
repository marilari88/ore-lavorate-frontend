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
    try {
      const elencoTimbrature = await TimbraturaService.getAll();
      let sommaTimbrature = await Array.from(elencoTimbrature.data).reduce(
        (totale, numero) => {
          console.log(totale);
          return totale + parseInt(numero["differenza"] || 0);
        },
        0
      );
      setTotaleOreContratto(sommaTimbrature);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <main className="main">
      <RiepilogoContratto totaleOreContratto={totaleOreContratto} />
      <SituazioneTimbratura recuperaTotaleContratto={recuperaTotaleContratto} />
    </main>
  );
}

export default Main;
