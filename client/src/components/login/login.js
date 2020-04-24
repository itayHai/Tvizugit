import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Input from "@material-ui/core/Input";
import PersonIcon from '@material-ui/icons/Person';
import GavelIcon from '@material-ui/icons/Gavel';
import FacebookIcon from '../../images/icons/facebook_icon.png';
import GoogleIcon from '../../images/icons/google_icon.png';
import { users } from "../../utils/globalConsts";
import UserCard from "../userCard/userCard";
import classes from "./login.module.css"

function Login (props) {

const screen = {
  login: 1,
  regiester: 2,
  lawyer: 3,
  user: 4
}
    
  let allusers = [];

  // Get the lawyer box
  allusers.push(<div key={0} 
                     onClick={regiesterAsLawyer}> 
                     <UserCard key={users[0].id}
                               icon={users[0].icon}
                               title={users[0].name}
                 /></div>);
    
  // Get the user box
  allusers.push(<div key={1}
                     onClick={regiesterAsUser}> 
                     <UserCard key={users[1].id}
                               icon={users[1].icon}
                               title={users[1].name}
                 /></div>);   

  const [mode,SetMode] = useState("login")

  function changeToRegister(){
    SetMode("register");
  }

  function changeToLogin(){
    SetMode("login");
  }

  function regiesterAsLawyer(){
    SetMode("lawyer");
  }

  function regiesterAsUser(){
    SetMode("user");
  }

  return (
    <div>
    <div style={{display: mode == "login" ? "block" : "none"}}>
      <div className={classes.Center}>
        <h2> <PersonIcon/> כניסה לאתר</h2>
        <hr color="#e6e6e6"/>
      </div>
      <Input placeholder="אימייל או מספר טלפון"
             className={classes.Input}
             autoFocus={true}
             fullWidth={true}
      />
      <Input placeholder="סיסמא"
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
        <label>או כניסה דרך הרשתות החברתיות</label>
        <p>
            <img className={classes.LogoIcon} src={FacebookIcon} alt="FaceBook"/>
            <span> </span>
            <img className={classes.LogoIcon} src={GoogleIcon} alt="Google"/>
        </p>
        <Link onClick={changeToRegister}>אין לך חשבון?</Link>
      </div>
    </div>
    <div style={{display: mode == "register" ? "block" : "none"}}>
    <div className={classes.Center}>
        <h3>אנחנו שמחים שבחרת להירשם לתביצוגית!</h3>
        <h4>איזה סוג חשבון מתאים לך?</h4>
      <div className={classes.Users}>{allusers}</div>
      <p>
      <Button variant="contained" onClick={props.close}>
        ביטול
      </Button>
      <span> </span>
      <Button className={classes.LoginButton}>המשך</Button>
      </p>
      <Link onClick={changeToLogin}>כבר יש לך חשבון?</Link>
      </div>
    </div>
    <div style={{display: mode == "lawyer" ? "block" : "none"}}>
      <div className={classes.Center}>
        <h2> <GavelIcon/> יצירת פרופיל עו"ד בתביצוגית</h2>
        <hr color="#e6e6e6"/>
      </div>
      <Input placeholder="שם המשרד"
             className={classes.Input}
             autoFocus={true}
      /><br/>
      <Input placeholder="תיאור המשרד"
             className={classes.Input}
      /><br/>
      <Input placeholder="תחומי ההתמחות של המשרד"
             className={classes.Input}
      /><br/>
      <Input placeholder="כתובת המשרד"
             className={classes.Input}
      /><br/>
      <Input placeholder="טלפון המשרד"
             className={classes.Input}
      /><br/>
      <Input placeholder="ותק המשרד"
             className={classes.Input}
      />
      <p>
      <Button className={classes.LoginButton} 
              variant="contained" 
              onClick={props.close}>
        יצירת פרופיל
      </Button>
      </p>
    </div>
    </div>
  );
};

export default Login;