import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import classes from "./App.module.css";
import Navbar from "../navbar/navbar";
import HomePage from "../homePage/homePage";
import ClassActionsStock from "../classActionStock/classActionsStock";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LawyersStock from "../LawyersStock/LawyersStock";
import { useSelector } from "react-redux";
import ReportedClassActions from "../reportedClassActions.js/reportedClassActions";

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
  const loggedInUser = useSelector(state => state.user.loggedInUser)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={classes.App}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/classActionsStock" component={ClassActionsStock} />
              {
            <Route path="/reportedClassActions">
                (Object.keys(loggedInUser).length !== 0 && loggedInUser.role.engName === "admin") ? (
                  <ReportedClassActions />
                  //<h1>חרא בפיתה!!!! כל מי שמדווח על תביעה מניאק</h1>
                ) : (
                    <Redirect
                      to={{
                        pathname: "/unauthorize",
                      }}
                    />
                  )
              }
            </Route>
            <Route path="/unauthorize">
              <h1>אל תכנס לפה בחיים שלך!</h1>
            </Route>
            <Route path="/lawyers" component={LawyersStock} />
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
