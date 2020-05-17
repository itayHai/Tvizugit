import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '../../images/icons/facebook_icon.png';
import GoogleIcon from '../../images/icons/google_icon.png';
import classes from "./login.module.css"
import { TextField } from "@material-ui/core";
import { setMode , changeLoggedInUser } from '../../store/user';
import { useDispatch } from 'react-redux';
import { usersRequests } from '../../utils/requests';
import { useQuery } from "@apollo/react-hooks";

const Login = (props) => {

    const dispatch = useDispatch();
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Just for now - change at the next pull request!
    let user = {
      name: "rotem",
      displayName: "רותם חוגי",
      email: "rotem@gmail.com",
      password: "123456",
      role: {
        id: "5ea43b9a7157be568022babd",
        engName: "viewer",
        name: "מנהל מערכת"
      },
    }

    // const { loading, error, data } = useQuery(usersRequests.getUser, {
    //   variables: {
    //     email: user.email,
    //     password: user.password,
    //   }
    // });

    //console.log(data);

    //user.displayName = data.UserQueries.user.displayName;

    // if (loading) return <p>Loading...</p>;
    // if (error) console.log(error);

    const changePassword = (event) => {
      user.password = event.target.value;
  }

  const changeEmail = (event) => {
    user.email = event.target.value;
}
  
    function changeToRegister(){
      dispatch(setMode("register"));
    }

    function login(){
      if(user.email === ""){
          alert("יש למלא שם משתמש")
      }
      else if(reg.test(user.email) === false ){
          alert("כתובת מייל אינה תקינה")
      }
      else if (user.password === ""){
        alert("יש למלא סיסמא")
      }
      else{
        dispatch(changeLoggedInUser(user));
        dispatch(setMode("connected"));
        props.close();
      }
    }

return(
    <div className={classes.LoginScreen}>
        <h2> <PersonIcon/> כניסה לאתר</h2>
        <hr color="#e6e6e6"/>
        <TextField label="שם משתמש או אימייל"
                   className={classes.Input}
                   onChange={changeEmail}
                   type="email"
                   name="email"
                   required
                   fullWidth={true}/><br/><br/>
        <TextField label="סיסמא"
                   className={classes.Input}
                   onChange={changePassword}
                   fullWidth={true}
                   required
                   type="password"/>
        <p>
          <Button className={classes.LoginButton} 
                  variant="contained" 
                  onClick={login}
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
