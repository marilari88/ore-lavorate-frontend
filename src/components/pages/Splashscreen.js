import React from "react";
import Loader from "react-loader-spinner";

export default function Splashscreen() {
  return (
    <div className="splashscreen">
      <Loader
        type="Watch"
        color="#89c5cc"
        height={50}
        width={50}
        className="loader"
      />
      <div className="footer">
        <div className="nomeApp">timesheet.app</div>
        <div className="descrizioneApp">Rilevazione tempo di lavoro</div>
      </div>
    </div>
  );
}
