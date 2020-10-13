import React, { useState, useEffect } from "react";
import TimbraturaService from "../../services/TimbraturaService";
import { stringaGiorno } from "../../utils/datetime";
import RigaTimbratura from "../moleculas/RigaTimbratura";
import TodayIcon from "@material-ui/icons/Today";
import { useHistory } from "react-router-dom";

export default function ElencoTimbrature() {
  const history = useHistory();

  let giornoTimbraturaCursor;
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

  const isNewDay = (giornoTimbratura) => {
    if (giornoTimbratura !== giornoTimbraturaCursor) {
      giornoTimbraturaCursor = giornoTimbratura;
      return true;
    }
    return false;
  };

  return (
    <div className="elencoTimbraturePage">
      <h1>Elenco timbrature</h1>
      <div className="elencoTimbrature">
        {elencoTimbrature &&
          Array.from(elencoTimbrature).map((timbratura) => (
            <React.Fragment key={timbratura._id}>
              {isNewDay(stringaGiorno(timbratura.ingresso)) && (
                <div className="giornoTimbratura">
                  <TodayIcon />
                  <div className="stringaGiorno">
                    {stringaGiorno(timbratura.ingresso)}
                  </div>
                </div>
              )}
              <RigaTimbratura
                timbratura={timbratura}
                cancellaTimbratura={() => cancellaTimbratura(timbratura._id)}
              />
            </React.Fragment>
          ))}
      </div>
      <div className="rigaPulsanti">
        <button className="pulsante" onClick={() => history.push("/")}>
          Indietro
        </button>
      </div>
    </div>
  );
}
