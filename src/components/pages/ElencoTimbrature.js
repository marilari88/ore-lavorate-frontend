import React, { useState, useEffect } from "react";
import TimbraturaService from "../../services/TimbraturaService";
import { stringaGiorno } from "../../utils/datetime";
import RigaTimbratura from "../moleculas/RigaTimbratura";
import TimbraturaHandle from "../organisms/TimbraturaHandle";
import TodayIcon from "@material-ui/icons/Today";
import { SfondoNero } from "../atoms/SfondoNero";

export default function ElencoTimbrature() {
  let giornoTimbraturaCursor;
  const [elencoTimbrature, setElencoTimbrature] = useState([]);
  const [timbraturaSelezionata, setTimbraturaSelezionata] = useState(null);

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
      setTimbraturaSelezionata(null);
    });
  };

  const apriTimbratura = (timbraturaSelezionata) => {
    setTimbraturaSelezionata(timbraturaSelezionata);
  };

  const chiudiTimbratura = () => {
    setTimbraturaSelezionata(null);
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
      {timbraturaSelezionata && (
        <SfondoNero onClick={() => chiudiTimbratura()} />
      )}
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
                apriTimbratura={() => apriTimbratura(timbratura)}
              />
            </React.Fragment>
          ))}
      </div>
      <div
        className={`timbraturaContainer ${timbraturaSelezionata && "selected"}`}
      >
        {timbraturaSelezionata && (
          <TimbraturaHandle
            timbraturaSelezionata={timbraturaSelezionata}
            cancellaTimbraturaSelezionata={() =>
              cancellaTimbratura(timbraturaSelezionata._id)
            }
          />
        )}
      </div>
    </div>
  );
}
