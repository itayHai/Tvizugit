import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import Navbar from "../navbar/navbar";
import HomePage from "../homePage/homePage";
import ClassActionsStock from "../classActionStock/classActionsStock";
import LawyersStock from "../LawyersStock/LawyersStock";
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

const styles = {
  background: "#F1F1F1 0% 0% no-repeat padding-box",
  width: "100%",
  margin: "auto",
  height: "100%",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={styles} className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/classActionsStock/:all" component={ClassActionsStock} />
            <Route path="/lawyers" component={LawyersStock} />
            
          </Switch>
        </div>
      </Router>
      <footer
        style={{ height: 30, backgroundColor: theme.palette.primary.main }}
      ></footer>
    </ThemeProvider>
  );
}

export default App;
