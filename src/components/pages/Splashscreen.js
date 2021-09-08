import React from "react";
import Loader from "react-loader-spinner";

import SplashscreenImage from "../../asset/splashscreen.svg";

export default function Splashscreen(props) {
  return (
    <div className="splashscreen">
      <div className="immagineSplashscreen">
        <img src={SplashscreenImage} alt="timesheet.app" />
      </div>
      <Loader
        type="ThreeDots"
        color="#89c5cc"
        height={40}
        width={40}
        className="loader"
      />
      <div className="footer">
        <div className="messaggioApp">{props.message}</div>
        <div className="nomeApp">timesheet.app</div>
        <div className="descrizioneApp">Rilevazione tempo di lavoro</div>
      </div>
    </div>
  );
}
