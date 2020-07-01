import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import PersonIcon from '@material-ui/icons/Person';
import FacebookIcon from '../../images/icons/facebook_icon.png';
import GoogleIcon from '../../images/icons/google_icon.png';
import classes from "./login.module.css"
import { TextField } from "@material-ui/core";
import { setMode , LoginUser } from '../../store/user';
import { useDispatch } from 'react-redux';
import AlertUser from '../alertUser/alertUser';


const Login = (props) => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    // Just for now - change at the next pull request!
    let user = {
      displayName: "",
      email: "",
      password: "",
      name: "",
      role: {
        id: "",
        engName: "",
        name: ""
      },
    }

  const handleClose = () => {
      setOpen(false);
  };

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

      if(!user.email){
        setMessage("יש למלא שם משתמש");
        setOpen(true);
      }
      else if(!reg.test(user.email)){
        setMessage("כתובת מייל אינה תקינה");
        setOpen(true);
      }
      else if (!user.password){
        setMessage("יש למלא סיסמא");
        setOpen(true);
      }
      else{
        dispatch(LoginUser(user));
        props.close()
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
          <AlertUser open={open} handleClose={handleClose} message={message} severity="error" />
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
