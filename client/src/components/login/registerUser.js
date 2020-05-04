import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import classes from "./login.module.css"
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';
import ProfileDetails from "./profileDetails";

function RegisterUser (props) {

    const dispatch = useDispatch();
  
    function changeToRegister(){
      dispatch(setMode("register"));
    }

    return(
        <div className={classes.UserRegister}>
            <ProfileDetails clickBack={changeToRegister} 
                            clickNext={props.close}
                            textNext="סיום הרשמה"
                            title="הרשמה בתור משתמש לתביצוגית"> 
                            <PersonIcon/> </ProfileDetails>
        </div>
    )
}

export default RegisterUser;