import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import classes from "./login.module.css"
import { useDispatch } from 'react-redux';
import ProfileDetails from "./profileDetails";
import { useMutation } from "@apollo/react-hooks";
import { usersRequests } from '../../utils/requests';
import { useSelector } from 'react-redux';
import { setMode , changeLoggedInUser } from '../../store/user';

function RegisterUser (props) {

    const dispatch = useDispatch();
    const [ addNewUser,{ error: mutationError }, ] = useMutation(usersRequests.addNewUser);
    const RegisterUser = useSelector(state => state.user.RegisterUser);

    function changeToRegister(){
      dispatch(setMode("register"));
    }

    function finishRegister(){
        addNewUser({
            variables:
            {
                user:
                {
                    name: RegisterUser.name,
                    email:RegisterUser.email,
                    displayName: RegisterUser.displayName,
                    password: RegisterUser.password,
                    role: "5ea43b8c7157be568022babc" // User role
                }
            }
        })

        if(mutationError){
            console.log("Error!");
        }

        dispatch(changeLoggedInUser(RegisterUser));

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