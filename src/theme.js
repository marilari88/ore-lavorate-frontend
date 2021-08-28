import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#89c5cc",
    },
    secondary: {
      main: "#69a1ac",
    },
  },
});

theme.props = {
  MuiInputLabel: {
    shrink: true,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiButtonBase: {
    disableRipple: true,
  },
};

theme.overrides = {
  MuiInputBase: {
    root: {
      borderRadius: `20px`,
      maxheight: `1.5rem`,
      fontSize: `18px`,
      padding: `0.2em`,
      backgroundColor: `white`,
      border: `2px solid #69a1ac`,
      width: `7em`,
    },
  },
  MuiInput: {
    input: {
      textAlign: "center",
    },
  },
  MuiPaper: {
    rounded: {
      borderRadius: `20px`,
    },
  },
  MuiPickersToolbarText: {
    toolbarBtnSelected: {
      color: `white`,
    },
  },
  MuiPickersDay: {
    daySelected: {
      color: `white`,
    },
  },
};

export default theme;
