import React,{useState} from 'react';
import classes from "./login.module.css"
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { changeRegisterUser } from '../../store/user';
import { useDispatch , useSelector } from 'react-redux';
import AlertUser from '../alertUser/alertUser';

function ProfileDetails (props) {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [password1, setpassword1] = useState("");
    const [password2, setpassword2] = useState("");
    const dispatch = useDispatch();
    const RegisterUser = useSelector(state => state.user.RegisterUser)
    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        RegisterUser[event.target.name] = event.target.value;
    }

    const changePassword1 = (event) => {
        setpassword1(event.target.value);
    }

    const changePassword2 = (event) => {
        setpassword2(event.target.value);
    }

    const handleSave = () => {

        if( RegisterUser.user === "" || 
            RegisterUser.displayName === "" ||
            RegisterUser.email === "" ||
            ( RegisterUser.password === "" &&
                ( !password1 ||
                  !password2 ) ) ){
            setMessage("יש למלא את כל השדות");
            setOpen(true);
        }
        else if (!reg.test(RegisterUser.email)){
            setMessage("כתובת מייל אינה תקינה");
            setOpen(true);
        }
        else if( password1 && password1.length < 8 ){
            setMessage("יש להזין סיסמא בת 8 תווים לפחות");
            setOpen(true);
        }
        else if( password1 !== password2 ){
            setMessage("הסיסמאות אינן תואמות");
            setOpen(true);
        }
        else{
            if(password1){
                RegisterUser.password = password1;
            }
            dispatch(changeRegisterUser(RegisterUser));
            props.clickNext();
        }
    }

    return(
        <div>
            <div className={classes.Center}>
                <h2> {props.children} { props.title }</h2>
                <hr color="#e6e6e6"/>
            </div>
            <div className={classes.UserRegister}>
                <TextField label={props.role === 'lawyer'? 'שם המשרד': 'שם מלא'}
                           name="displayName"
                           defaultValue={RegisterUser.displayName}
                           required
                           onChange={handleChange}
                           className={classes.Input}
                           fullWidth={true}/><br/><br/>
                <TextField label={props.role === 'lawyer'? 'שם משתמש למשרד': 'שם משתמש'}
                            name="name"
                            required
                            defaultValue={RegisterUser.name}
                           onChange={handleChange}
                            className={classes.Input}
                            fullWidth={true}/><br/><br/>
                <TextField label={props.role === 'lawyer'? 'אימייל למשרד': 'אימייל'}
                            name="email"
                            required
                            defaultValue={RegisterUser.email}
                            onChange={handleChange}
                            className={classes.Input}
                            type="email"
                            fullWidth={true}/><br/><br/>
                <TextField label="סיסמא"
                            name="password1"
                            required
                            defaultValue={RegisterUser.password}
                            onChange={changePassword1}
                            className={classes.Input}
                            fullWidth={true}
                            type="password"/><br/><br/>
                <TextField label="אימות סיסמא"
                            name="password2"
                            required
                            defaultValue={RegisterUser.password}
                            onChange={changePassword2}
                            className={classes.Input}
                            fullWidth={true}
                            type="password"/><br/><br/>
                <Button className={classes.ProfileButton} 
                        onClick={handleSave}>{props.textNext}</Button>
                <Button className={classes.BackButton} 
                        variant="contained" 
                        onClick={props.clickBack}>חזור</Button>
                <AlertUser open={open} handleClose={handleClose} message={message} severity="error" />
            </div>
        </div>
    )
}

export default ProfileDetails;