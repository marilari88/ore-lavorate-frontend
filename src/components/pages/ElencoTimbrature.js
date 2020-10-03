import React, { useState, useEffect } from "react";
import TimbraturaService from "../../services/TimbraturaService";
import RigaTimbratura from "../moleculas/RigaTimbratura";

export default function ElencoTimbrature() {
  const [elencoTimbrature, setElencoTimbrature] = useState([]);
  useEffect(() => {
    caricamentoElencoTimbrature();
  }, []);

  const caricamentoElencoTimbrature = async () => {
    const elencoTimbrature = await TimbraturaService.getAll();
    setElencoTimbrature(elencoTimbrature.data);
  };

  const cancellaTimbratura = async (id) => {
    TimbraturaService.delete(id).then((response) => {
      if (response.status === 200)
        alert(`Cancellazione della timbratura  avvenuta con successo`);
      let nuovoElencoTimbrature = [...elencoTimbrature];
      const timbraturaIndex = elencoTimbrature.findIndex(
        (timbratura) => timbratura._id === id
      );
      nuovoElencoTimbrature.splice(timbraturaIndex, 1);
      setElencoTimbrature(nuovoElencoTimbrature);
    });
  };

  return (
    <div>
      {elencoTimbrature &&
        Array.from(elencoTimbrature).map((timbratura) => (
          <>
            <RigaTimbratura
              key={timbratura._id}
              timbratura={timbratura}
              cancellaTimbratura={() => cancellaTimbratura(timbratura._id)}
            />
          </>
        ))}
    </div>
  );
}
