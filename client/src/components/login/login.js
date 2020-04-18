import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '../../images/icons/facebook_icon.png';
import GoogleIcon from '../../images/icons/google_icon.png';

import classes from "./login.module.css"

const login = (props) => {

  return (
    <div>
      <div className={classes.Center}>
        <h2> <PersonIcon/> כניסה לאתר</h2>
        <hr color="#e6e6e6"/>
      </div>
      <Input
        placeholder="אימייל או מספר טלפון"
        className={classes.Input}
        autoFocus={true}
        fullWidth={true}
      />
      <Input
        placeholder="סיסמא"
        className={classes.Input}
        fullWidth={true}
        type="password"
      />
      <p>
      <Button className={classes.LoginButton} 
              variant="contained" 
              onClick={props.close}
              fullWidth={true}>
        התחברות
      </Button>
      </p>
      <br/><hr color="#e6e6e6"/>
      <div className={classes.Center}>
        <a>או כניסה דרך הרשתות החברתיות</a>
        <p>
            <img className={classes.LogoIcon} src={FacebookIcon}/>
            <span> </span>
            <img className={classes.LogoIcon} src={GoogleIcon}/>
        </p>
        <a href="https://www.google.co.il/">אין לך חשבון?</a>
      </div>
    </div>
  );
};

export default login;