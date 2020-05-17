import React from "react";
import Button from "@material-ui/core/Button";
import classes from "./login.module.css"
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';
import GavelIcon from '@material-ui/icons/Gavel';
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { specialties } from "../../utils/globalConsts";
import { useSelector } from 'react-redux';
import { changeLoggedInLawyer } from '../../store/lawyer';
import { useMutation } from "@apollo/react-hooks";
import { usersRequests } from '../../utils/requests';
import { lawyersRequests } from '../../utils/requests';

function RegisterLawyerOffice (props) {

    const dispatch = useDispatch();
    const Specialties = specialties.sort();
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const loggedInLawyer = useSelector(state => state.lawyer.loggedInLawyer)
    const [addNewUser] = useMutation(usersRequests.addNewUser);
    const [addNewLawyer] = useMutation(lawyersRequests.addNewLawyer);

    const handleChange = (event) => {
        loggedInLawyer[event.target.name] = event.target.value;
    }
  
    function regiesterProfile(){
      dispatch(setMode("lawyerProfile"));
    }

    function finishRegister(){

        if( loggedInLawyer.description === "" ||
            //loggedInLawyer.expertise === "" ||
            loggedInLawyer.address === "" ||
            loggedInLawyer.phone === "" ||
            //loggedInLawyer.seniority === "" ||
            loggedInLawyer.img === "" ){
        
            alert("יש למלא את כל השדות");
        }
        else{
            dispatch(changeLoggedInLawyer(loggedInLawyer));

            addNewUser({
                variables:
                {
                    user:
                    {
                        name: loggedInUser.name,
                        email:loggedInUser.email,
                        displayName: loggedInUser.displayName,
                        password: loggedInUser.password,
                        role: {
                            id: "5ea43ce07157be568022babf", // Lawyer role
                            engName: "lawyer",
                            name: "עורך דין"
                          },
                    }
                }
            })

            addNewLawyer({
                variables:
                {
                    lawyer:
                    {
                        name: loggedInUser.name,
                        description: loggedInLawyer.description ,
                        expertise: loggedInLawyer.expertise,
                        email: loggedInUser.email,
                        address: loggedInLawyer.address,
                        phone: loggedInLawyer.phone,
                        seniority: loggedInLawyer.seniority,
                        img: loggedInLawyer.img,
                        classactions: "",
                    }
                }
            })

            dispatch(setMode("connected"));
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
            </p>
        </div>
    )
}

export default RegisterLawyerOffice;