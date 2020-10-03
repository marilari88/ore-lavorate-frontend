import React from "react";
import { Avatar } from "@material-ui/core";

function InfoLogin({ userData }) {
  return (
    <div className="infoLogin">
      <div className="nomeOperatore">{userData && userData.name}</div>
      <Avatar alt="{{userData && user.name}}"></Avatar>
    </div>
  );
}

export default InfoLogin;
