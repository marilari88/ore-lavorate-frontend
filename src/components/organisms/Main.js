import React from "react";
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
