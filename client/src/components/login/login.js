import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '../../images/icons/facebook_icon.png';
import GoogleIcon from '../../images/icons/google_icon.png';
import classes from "./login.module.css"
import { TextField } from "@material-ui/core";
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';

function Login (props) {

    const dispatch = useDispatch();
  
    function changeToRegister(){
      dispatch(setMode("register"));
    }

return(
    <div className={classes.LoginScreen}>
        <h2> <PersonIcon/> כניסה לאתר</h2>
        <hr color="#e6e6e6"/>
        <TextField label="שם משתמש או אימייל"
                  className={classes.Input}
                  type="email"
                  fullWidth={true}/><br/><br/>
        <TextField label="סיסמא"
                  className={classes.Input}
                  fullWidth={true}
                  type="password"/>
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
          <label>או כניסה דרך הרשתות החברתיות</label>
          <p>
              <img className={classes.LogoIcon} src={FacebookIcon} alt="FaceBook"/>
              <span> </span>
              <img className={classes.LogoIcon} src={GoogleIcon} alt="Google"/>
          </p>
          <Link onClick={changeToRegister}>אין לך חשבון?</Link>
        </div>
      </div>
)
}

export default Login;
