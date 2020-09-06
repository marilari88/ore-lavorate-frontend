import React from "react";
import { Avatar } from "@material-ui/core";

function InfoLogin() {
  //  const nomeOperatore = "Lucia Onofri";

  return (
    <div className="infoLogin">
      <div className="nomeOperatore">Lucia Onofri</div>
      <Avatar alt="{nomeOperatore}"></Avatar>
    </div>
  );
}

export default InfoLogin;
