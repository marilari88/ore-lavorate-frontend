import React from "react";
import { Avatar, Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function InfoLogin({ userData, setUserData }) {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const logOut = () => {
    handleClose();
    localStorage.removeItem("auth-token");
    setUserData({});
    history.push("/login");
  };

  const handleClick = () => {
    setAnchorEl(document.querySelector(".infoLogin"));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        className="infoLogin"
        aria-owns={anchorEl ? "user-menu" : undefined}
        aria-controls="user-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div className="nomeOperatore">{userData && userData.name}</div>
        <Avatar alt="{{userData && user.name}}"></Avatar>
      </div>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
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
    </>
  );
}

export default InfoLogin;
