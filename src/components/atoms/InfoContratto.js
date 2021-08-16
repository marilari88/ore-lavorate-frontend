import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Menu, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function InfoContratto() {
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState("");

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        aria-controls="contratto-menu"
        className="infoContratto"
        aria-haspopup="true"
        aria-owns={anchorEl ? "contratto-menu" : undefined}
        onClick={handleClick}
      >
        Fatebenefratelli
        <ArrowDropDownIcon />
      </div>
      <Menu
        id="contratto-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <MenuItem
          onClick={() => {
            history.push("/");
            handleClose();
          }}
        >
          Situazione Corrente
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("/elencotimbrature");
            handleClose();
          }}
        >
          Timbrature
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push("profile");
            handleClose();
          }}
        >
          Cambia Contratto
        </MenuItem>
      </Menu>
    </>
  );
}

export default InfoContratto;
