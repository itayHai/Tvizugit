import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import classes from "./App.module.css";
import Navbar from "../navbar/navbar";
import HomePage from "../homePage/homePage";
import ClassActionsStock from "../classActionStock/classActionsStock";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Configure JSS

const theme = createMuiTheme({
  typography: {
    fontFamily: "Segoe UI",
  },
  palette: {
    primary: {
      light: "#6abba7",
      main: "#45AB92",
      dark: "#307766",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffffff",
      main: "#FFFFFF",
      dark: "#b2b2b2",
      contrastText: "#000",
    },
  },
  direction: "rtl", // Both here and <body dir="rtl">
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.App}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/classActionsStock" component={ClassActionsStock} />
            <Route path="/lawyers">
              <h1>Lawyers</h1>
            </Route>
          </Switch>
        </div>
      </Router>

      <footer
        className={classes.footer}
        style={{ backgroundColor: theme.palette.primary.main }}
      ></footer>
    </ThemeProvider>
  );
}

export default App;
