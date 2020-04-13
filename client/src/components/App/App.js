import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Navbar from '../navbar/navbar'
import Background from '../../images/home-background.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "500px",
  backgroundImage: `url(${ Background })`,
  backgroundSize: '100% 600px',
  backgroundRepeat: 'no-repeat',
  
};

const theme = createMuiTheme({
   typography: {
      fontFamily:
        'Segoe UI',
      },
   palette: {
    primary: {
      light: '#6abba7',
      main: '#45AB92',
      dark: '#307766',
      contrastText: '#fff',
    },
    secondary: {
      light: '#7f97a2',
      main: '#607d8b',
      dark: '#435761',
      contrastText: '#000',
    },
  },
  direction: 'rtl', // Both here and <body dir="rtl">
});

const styles = { 
  width: '100%',
  margin: 'auto',
  height: '100%'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={styles} className="App">
          <Navbar/>
          <Switch>
              <Route exact path="/">
                <section style={ sectionStyle }>
                </section>
              </Route>
              <Route path="/cases">
                <h1>Cases</h1>
              </Route>
              <Route path="/lawyers">
                <h1>Lawyers</h1>
              </Route>
          </Switch>
         
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;