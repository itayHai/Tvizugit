import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Input from "@material-ui/core/Input";
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '../../images/icons/facebook_icon.png';
import GoogleIcon from '../../images/icons/google_icon.png';
import { users } from "../../utils/globalConsts";

import classes from "./login.module.css"

const UserCard = (props) => {
    return (
      <div className={classes.UserCard} onClick={props.click}>
          {props.icon}
         <h3> {props.title}</h3>
      </div>
    );
  };

function Login (props) {
    let allusers = [];
    allusers.push(<div key={0}> <UserCard key={users[0].id}
                               icon={users[0].icon}
                               title={users[0].name}
        /></div>);
    allusers.push(<div key={1}> <UserCard key={users[1].id}
                                          icon={users[1].icon}
                                          title={users[1].name}
        /></div>);   
    
    const [isLogin,SetIsLogin] = useState(true)

    function change_to_sign_up(){
        SetIsLogin(false);
    }

    function change_to_login(){
        SetIsLogin(true);
    }

  return (
    <div>
    <div style={{display: isLogin? "block" : "none"}}>
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
        <a>או כניסה דרך הרשתות החברתיות</a>
        <p>
            <img className={classes.LogoIcon} src={FacebookIcon}/>
            <span> </span>
            <img className={classes.LogoIcon} src={GoogleIcon}/>
        </p>
        <Link onClick={change_to_sign_up}>אין לך חשבון?</Link>
      </div>
    </div>
    <div style={{display: isLogin? "none" : "block"}}>
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
      <Link onClick={change_to_login}>כבר יש לך חשבון?</Link>
      </div>
    </div>
    </div>
  );
};

export default Login;