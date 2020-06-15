import React from "react";
import classes from "./login.module.css"
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';
import ProfileDetails from "./profileDetails";
import GavelIcon from '@material-ui/icons/Gavel';

function RegisterLawyer (props) {

    const dispatch = useDispatch();
  
    function changeToRegister(){
      dispatch(setMode("register"));
    }

    function regiesterOffice(){
        dispatch(setMode("lawyerOffice"));
      }

    return(
        <div>
            <div className={classes.UserRegister}>
                <ProfileDetails role="lawyer"
                                clickBack={changeToRegister} 
                                clickNext={regiesterOffice}
                                textNext="המשך 1/2"
                                title='הרשמה בתור משרד עו"ד לתביצוגית'> 
                                <GavelIcon/> </ProfileDetails>
            </div>
        </div>
    )
}

export default RegisterLawyer;