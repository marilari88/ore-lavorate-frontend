import React from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function InfoLogin({ userData, setUserData }) {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const logOut = () => {
    localStorage.removeItem("auth-token");
    setUserData({});
    history.push("/login");
  };

  const handleClick = (e) => {
    setAnchorEl(document.querySelector(".nomeOperatore"));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="infoLogin">
      <div
        aria-controls="user-menu"
        aria-haspopup="true"
        className="nomeOperatore"
        onClick={handleClick}
      >
        {userData && userData.name}
      </div>
      <Avatar alt="{{userData && user.name}}"></Avatar>
      <Menu
        id="user-menu"
        anchorEl={document.getElementsByClassName("nomeOperatore")}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Il mio Profilo</MenuItem>
        <MenuItem
          onClick={() => {
            logOut();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default InfoLogin;
