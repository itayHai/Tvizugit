import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import PersonIcon from '@material-ui/icons/Person';
import GavelIcon from '@material-ui/icons/Gavel';
import FacebookIcon from '../../images/icons/facebook_icon.png';
import GoogleIcon from '../../images/icons/google_icon.png';
import { users } from "../../utils/globalConsts";
import UserCard from "../userCard/userCard";
import classes from "./login.module.css"
import { TextField } from "@material-ui/core";

function Login (props) {

const [hashtags] = useState([]);
const [mode,SetMode] = useState("login")
const [value, setValue] = useState("");

const keyDownHandler = (event) => {
  if (["Enter", "Tab", ","].includes(event.key)) {
    event.preventDefault();
    hashtags.push(value.trim());
    setValue("");
  }
};

const inputChangedHandler = (event) => {
  setValue(event.target.value);
};
    
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

  function changeToRegister(){
    SetMode("register");
  }

  function changeToLogin(){
    SetMode("login");
  }

  function regiesterAsLawyer(){
    SetMode("lawyer1");
  }

  function regiester2AsLawyer(){
    SetMode("lawyer2");
  }

  function regiesterAsUser(){
    SetMode("user");
  }

  return (
    <div>
    <div style={{display: mode === "login" ? "block" : "none"}}>
      <div className={classes.LoginScreen}>
        <h2> <PersonIcon/> כניסה לאתר</h2>
        <hr color="#e6e6e6"/>
      <TextField label="שם משתמש או אימייל"
                 className={classes.Input}
                 type="email"
                 fullWidth={true}
      /><br/><br/>
      <TextField label="סיסמא"
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
    </div>
    <div style={{display: mode === "register" ? "block" : "none"}}>
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
    <div style={{display: mode === "user" ? "block" : "none"}}>
      <div className={classes.Center}>
        <h2> <PersonIcon/> הרשמה בתור משתמש לתביצוגית</h2>
        <hr color="#e6e6e6"/>
      </div>
      <div className={classes.UserRegister}>
        <TextField label="שם מלא"
                   className={classes.Input}
                   fullWidth={true}/><br/><br/>
        <TextField label="שם משתמש"
                   className={classes.Input}
                   fullWidth={true}/><br/><br/>
        <TextField label="אימייל"
                   className={classes.Input}
                   type="email"
                   fullWidth={true}/><br/><br/>
        <TextField label="סיסמא"
                   className={classes.Input}
                   fullWidth={true}
                   type="password"/><br/><br/>
        <TextField label="אימות סיסמא"
                   className={classes.Input}
                   fullWidth={true}
                   type="password"/><br/><br/>
        <Button className={classes.ProfileButton}>סיום הרשמה</Button>
        <Button className={classes.BackButton} 
                variant="contained" 
                onClick={changeToRegister}>
        חזור
      </Button>
        </div>
      </div>
    <div style={{display: mode === "lawyer1" ? "block" : "none"}}>
      <div className={classes.Center}>
        <h2> <GavelIcon/> הרשמה בתור עורך דין לתביצוגית</h2>
        <hr color="#e6e6e6"/>
      </div>
      <div className={classes.LawyerRegister}>
        <TextField label="שם מלא"
                   className={classes.Input}
                   fullWidth={true}/><br/><br/>
        <TextField label="שם משתמש"
                   className={classes.Input}
                   fullWidth={true}/><br/><br/>
        <TextField label="אימייל"
                   className={classes.Input}
                   type="email"
                   fullWidth={true}/><br/><br/>
        <TextField label="סיסמא"
                   className={classes.Input}
                   fullWidth={true}
                   type="password"/><br/><br/>
        <TextField label="אימות סיסמא"
                   className={classes.Input}
                   fullWidth={true}
                   type="password"/><br/><br/>
        <Button className={classes.ProfileButton} 
                onClick={regiester2AsLawyer}>המשך 1/2</Button>
        <Button className={classes.BackButton} 
                variant="contained" 
                onClick={changeToRegister}>
        חזור
      </Button>
        </div>
      </div>
      <div style={{display: mode === "lawyer2" ? "block" : "none"}} 
           className={classes.LawyerRegister}>
        <div className={classes.Center}>
          <h2> <GavelIcon/> יצירת פרופיל עו"ד בתביצוגית</h2>
          <hr color="#e6e6e6"/>
        </div>
      <TextField label="שם המשרד"
                 className={classes.Input}
                 fullWidth={true}/><br/><br/>
      <TextField label="תיאור המשרד" 
                 fullWidth={true}
                 multiline
                 rowsMax={5}
                 className={classes.Input}/><br/><br/>
      <TextField label="תחומי ההתמחות של המשרד"
                 className={classes.Input}
                 fullWidth={true}
                 value={value}
                 onChange={inputChangedHandler}
                 onKeyDown={keyDownHandler}/><br/><br/>
      <TextField label="כתובת המשרד"
                 fullWidth={true}
                 className={classes.Input}/><br/><br/>
      <TextField label="טלפון המשרד"
                 fullWidth={true}
                 type="tel"
                 className={classes.Input}/><br/><br/>
      <TextField label="ותק המשרד (בשנים)"
                 fullWidth={true}
                 type="number"
                 className={classes.Input}/><br/><br/>
      <p>
      <Button className={classes.ProfileButton} 
              variant="contained" 
              onClick={props.close}>
        יצירת פרופיל
      </Button>
      <Button className={classes.BackButton} 
              variant="contained" 
              onClick={regiesterAsLawyer}>
        חזור
      </Button>
      </p>
      </div>
    </div>
  );
};

export default Login;