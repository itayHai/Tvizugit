import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { users } from "../../utils/globalConsts";
import UserCard from "../userCard/userCard";
import classes from "./login.module.css"
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';

function Register (props) {

    const dispatch = useDispatch();
    const {lawyer,user} = users;
  
    function changeToLogin(){
        dispatch(setMode("login"));
      }

    function regiesterProfile(){
        dispatch(setMode("lawyerProfile"));
      }

    function regiesterAsUser(){
        dispatch(setMode("user"));
      }

    return(
        <div className={classes.Center}>
            <h3>אנחנו שמחים שבחרת להירשם לתביצוגית!</h3>
            <h4>איזה סוג חשבון מתאים לך?</h4>
            <div className={classes.Users}>
                <div onClick={regiesterProfile}> 
                    <UserCard key={lawyer.id}
                            icon={lawyer.icon}
                            title={lawyer.name}
                /></div>
                <div onClick={regiesterAsUser}> 
                    <UserCard key={user.id}
                            icon={user.icon}
                            title={user.name}
                /></div>
            </div>
            <p>
                <Button variant="contained" onClick={props.close}>
                ביטול
                </Button>
                <span> </span>
                <Button className={classes.LoginButton}>המשך</Button>
            </p>
            <Link onClick={changeToLogin}>כבר יש לך חשבון?</Link>
        </div>
    )
}

export default Register;