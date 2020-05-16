import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import classes from "./login.module.css"
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';
import ProfileDetails from "./profileDetails";
import { useMutation } from "@apollo/react-hooks";
import { usersRequests } from '../../utils/requests';
import { useSelector } from 'react-redux';

function RegisterUser (props) {

    const dispatch = useDispatch();
    const [addNewUser] = useMutation(usersRequests.addNewUser);
    const loggedInUser = useSelector(state => state.user.loggedInUser)
  
    function changeToRegister(){
      dispatch(setMode("register"));
    }

    function finishRegister(){
        dispatch(setMode("connected"));
        addNewUser({
            variables:
            {
                user:
                {
                    name: loggedInUser.name,
                    email:loggedInUser.email,
                    displayName: loggedInUser.displayName,
                    password: loggedInUser.password,
                    role: "5ea43b8c7157be568022babc", // User role
                }
            }
        })

        props.close();
    }

    return(
        <div className={classes.UserRegister}>
            <ProfileDetails clickBack={changeToRegister} 
                            clickNext={finishRegister}
                            textNext="סיום הרשמה"
                            title="הרשמה בתור משתמש לתביצוגית"> 
                            <PersonIcon/> </ProfileDetails>
        </div>
    )
}

export default RegisterUser;