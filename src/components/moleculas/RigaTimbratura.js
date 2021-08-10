import React from "react";
import { stringaTempoBreve } from "../../utils/differenzaorario";
import { stringaOrario } from "../../utils/datetime";
import CallMadeIcon from "@material-ui/icons/CallMade";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

function RigaTimbratura({ timbratura, apriTimbratura }) {
  return (
    <div className="rigaTimbratura" onClick={() => apriTimbratura()}>
      <div className="ingresso">
        <CallMadeIcon style={{ color: "#a2e88b" }} />{" "}
        {stringaOrario(new Date(timbratura.ingresso))}
      </div>
      {timbratura.uscita ? (
        <React.Fragment>
          <div className="uscita">
            <CallMadeIcon
              style={{ color: "#f26d6d", transform: "rotate(90deg)" }}
            />
            {stringaOrario(new Date(timbratura.uscita))}
          </div>
          <div className="differenza">
            <TimelapseIcon />
            {stringaTempoBreve(timbratura.differenza)}
          </div>
        </React.Fragment>
      ) : (
        <div className="timbraturaInCorso">
          <WorkOutlineIcon />
          Lavoro in corso...
        </div>
      )}
    </div>
  );
}

export default RigaTimbratura;
