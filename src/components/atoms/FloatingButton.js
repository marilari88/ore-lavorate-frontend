import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      zIndex: 90,
      position: "absolute",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      backgroundColor: "white",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingButtons({ etichetta, azioneClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab variant="extended" onClick={() => azioneClick()}>
        <EditIcon className={classes.extendedIcon} />
        {etichetta}
      </Fab>
    </div>
  );
}
