import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import PersonIcon from '@material-ui/icons/Person';

import classes from "./login.module.css"

const login = (props) => {

  return (
    <div>
      <div className={classes.LoginTitle}>
        <h2> <PersonIcon/> כניסה לאתר</h2>
      </div>
      <Input
        placeholder="אימייל או מספר טלפון"
        className={classes.UserNameInput}
        autoFocus={true}
        fullWidth={true}
      />
      <Input
        placeholder="סיסמא"
        className={classes.PasswordInput}
        fullWidth={true}
        type="password"
      />
      <Button className={classes.LoginButton} variant="contained" onClick={props.close}>
        התחברות
      </Button>
    </div>
  );
};

export default login;