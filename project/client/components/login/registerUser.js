import React,{useState} from 'react';
import PersonIcon from '@material-ui/icons/Person';
import classes from "./login.module.css"
import { setMode , changeLoggedInUser } from '../../store/user';
import { useDispatch } from 'react-redux';
import ProfileDetails from "./profileDetails";
import { useMutation } from "@apollo/react-hooks";
import { usersRequests } from '../../utils/requests';
import { useSelector } from 'react-redux';
import AlertUser from '../alertUser/alertUser';

function RegisterUser (props) {

    const dispatch = useDispatch();
    const [addNewUser] = useMutation(usersRequests.addNewUser);
    const RegisterUser = useSelector(state => state.user.RegisterUser);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
  
    function changeToRegister(){
      dispatch(setMode("register"));
    }

    const handleClose = () => {
        setOpen(false);
    };

    function finishRegister(){

        RegisterUser.role = "5ea43b8c7157be568022babc"; // User role

        addNewUser({
            variables:
            {
                user:
                {
                    name: RegisterUser.name,
                    email:RegisterUser.email,
                    displayName: RegisterUser.displayName,
                    password: RegisterUser.password,
                    role: RegisterUser.role, 
                }
            }
        }).then(data => {
            dispatch(changeLoggedInUser(RegisterUser));
            props.close();
        }).catch(data => {
            setMessage("מייל זה כבר רשום במערכת");
            setOpen(true); 
        })
    }

    return(
        <div className={classes.UserRegister}>
            <AlertUser open={open} handleClose={handleClose} message={message} severity="error" />
            <ProfileDetails clickBack={changeToRegister} 
                            clickNext={finishRegister}
                            textNext="סיום הרשמה"
                            title="הרשמה בתור משתמש לתביצוגית"> 
                            <PersonIcon/> </ProfileDetails>
        </div>
    )
}

export default RegisterUser;