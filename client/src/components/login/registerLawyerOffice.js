import React from "react";
import Button from "@material-ui/core/Button";
import classes from "./login.module.css"
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';
import GavelIcon from '@material-ui/icons/Gavel';
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { specialties } from "../../utils/globalConsts";

function RegisterLawyerOffice (props) {

    const dispatch = useDispatch();
    const Specialties = specialties.sort();
  
    function regiesterProfile(){
      dispatch(setMode("lawyerProfile"));
    }

    return(
        <div>
            <div className={classes.Center}>
                <h2> <GavelIcon/> יצירת פרופיל עו"ד בתביצוגית</h2>
                <hr color="#e6e6e6"/>
            </div>
            <TextField label="שם המשרד"
                        className={classes.Input}
                        fullWidth={true}/><br/><br/>
            <TextField label="תיאור המשרד" 
                        fullWidth={true}
                        multiline
                        rowsMax={5}
                        className={classes.Input}/><br/><br/>
            <Autocomplete multiple
                          options={Specialties}
                          renderInput={(params) => (
                          <TextField {...params}
                                     variant="standard"
                                     label="תחומי התמחות של המשרד"/>)}/><br/>
            <TextField label="כתובת המשרד"
                        fullWidth={true}
                        className={classes.Input}/><br/><br/>
            <TextField label="טלפון המשרד"
                        fullWidth={true}
                        type="tel"
                        className={classes.Input}/><br/><br/>
            <TextField label="ותק המשרד (בשנים)"
                        fullWidth={true}
                        type="number"
                        className={classes.Input}/><br/>
            <label>תמונה: </label>
            <input className={classes.Input}
                    id="image"
                    variant="contained"
                    type="file"
                    accept="image/png, image/jpeg"/><br/><br/>
            <p>
                <Button className={classes.ProfileButton} 
                        variant="contained" 
                        onClick={props.close}>
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