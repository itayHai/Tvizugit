import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import classes from "./login.module.css"
import { useDispatch } from 'react-redux';
import GavelIcon from '@material-ui/icons/Gavel';
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { specialties } from "../../utils/globalConsts";
import { useSelector } from 'react-redux';
import { changeRegisterLawyer } from '../../store/lawyer';
import { useMutation } from "@apollo/react-hooks";
import { usersRequests } from '../../utils/requests';
import { lawyersRequests } from '../../utils/requests';
import { setMode , changeLoggedInUser } from '../../store/user';
import AlertUser from '../alertUser/alertUser';

function RegisterLawyerOffice (props) {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const Specialties = specialties.sort();
    const RegisterUser = useSelector(state => state.user.RegisterUser)
    const RegisterLawyer = useSelector(state => state.lawyer.RegisterLawyer)
    const [addNewUser] = useMutation(usersRequests.addNewUser);
    const [addNewLawyer] = useMutation(lawyersRequests.addNewLawyer);

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        RegisterLawyer[event.target.name] = event.target.value;
    }
  
    function regiesterProfile(){
      dispatch(setMode("lawyerProfile"));
    }

    function finishRegister(){

        if( RegisterLawyer.description === "" ||
            RegisterLawyer.address === "" ||
            RegisterLawyer.phone === "" ||
            RegisterLawyer.img === "" ){
        
            setMessage("יש למלא את כל השדות");
            setOpen(true);        
        }
        else{
            dispatch(changeRegisterLawyer(RegisterLawyer));

            addNewUser({
                variables:
                {
                    user:
                    {
                        name: RegisterUser.name,
                        email:RegisterUser.email,
                        displayName: RegisterUser.displayName,
                        password: RegisterUser.password,
                        role: "5ea43ce07157be568022babf" // Lawyer role
                    }
                }
            })

            addNewLawyer({
                variables:
                {
                    lawyer:
                    {
                        name: RegisterUser.name,
                        description: RegisterLawyer.description ,
                        expertise: RegisterLawyer.expertise,
                        email: RegisterUser.email,
                        address: RegisterLawyer.address,
                        phone: RegisterLawyer.phone,
                        seniority: RegisterLawyer.seniority,
                        img: RegisterLawyer.img,
                        classactions: RegisterLawyer.classactions,
                    }
                }
            })

            dispatch(changeLoggedInUser(RegisterUser));
            props.close();
        }
    }

    return(
        <div>
            <div className={classes.Center}>
                <h2> <GavelIcon/> יצירת משרד עו"ד בתביצוגית</h2>
                <hr color="#e6e6e6"/>
            </div>
            <TextField label="תיאור המשרד" 
                        name="description"
                        required
                        onChange={handleChange}
                        fullWidth={true}
                        multiline
                        rowsMax={5}
                        className={classes.Input}/><br/><br/>
            <Autocomplete multiple
                          name="expertise"
                          required
                          multiline
                          onChange={handleChange}
                          options={Specialties}
                          renderInput={(params) => (
                          <TextField {...params}
                                     variant="standard"
                                     name="expertise"
                                     label="תחומי התמחות של המשרד"/>)}/><br/>
            <TextField label="כתובת המשרד"
                        name="address"
                        required
                        onChange={handleChange}
                        fullWidth={true}
                        className={classes.Input}/><br/><br/>
            <TextField label="טלפון המשרד"
                        name="phone"
                        required
                        onChange={handleChange}
                        fullWidth={true}
                        type="tel"
                        className={classes.Input}/><br/><br/>
            <TextField label="ותק המשרד (בשנים)"
                        name="seniority"
                        required
                        defaultValue={0}
                        onChange={handleChange}
                        fullWidth={true}
                        type="number"
                        className={classes.Input}/><br/>
            <label>תמונה: </label>
            <input className={classes.Input}
                    name="img"
                    required
                    onChange={handleChange}
                    id="image"
                    variant="contained"
                    type="file"
                    accept="image/png, image/jpeg"/><br/><br/>
            <p>
                <Button className={classes.ProfileButton} 
                        variant="contained" 
                        onClick={finishRegister}>
                יצירת פרופיל
                </Button>
                <Button className={classes.BackButton} 
                        variant="contained" 
                        onClick={regiesterProfile}>
                חזור
                </Button>
                <AlertUser open={open} handleClose={handleClose} message={message} severity="error" />
            </p>
        </div>
    )
}

export default RegisterLawyerOffice;