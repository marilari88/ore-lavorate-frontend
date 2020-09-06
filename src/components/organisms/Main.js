import React from "react";
import { ReactComponent as Sfondo } from "../../asset/sfondo.svg";
import RiepilogoContratto from "../moleculas/RiepilogoContratto";
import SituazioneTimbratura from "../moleculas/SituazioneTimbratura";

function Main() {
  return (
    <div className="main">
      <RiepilogoContratto />
      <SituazioneTimbratura />
    </div>
  );
}

export default Main;
