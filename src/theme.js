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
};

theme.overrides = {
  MuiInput: {
    root: {
      border: `2px solid #69a1ac`,
      borderRadius: `20px`,
      lineHeight: `1.5rem`,
      maxheight: `1.5rem`,
      textAlign: `center`,
      fontSize: `18px`,
      padding: `0.4em`,
    },
  },
};

export default theme;
