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
import { changeLoggedInUser } from '../../store/user';

function RegisterLawyerOffice (props) {

    const dispatch = useDispatch();
    const Specialties = specialties.sort();
    const loggedInUser = useSelector(state => state.user.loggedInUser)
    
    const handleChange = (event) => {
        loggedInUser.lawyerOffice[event.target.name] = event.target.value;
    }
  
    function regiesterProfile(){
      dispatch(setMode("lawyerProfile"));
    }

    function finishRegister(){

        if( loggedInUser.lawyerOffice.officeName === "" ||
            loggedInUser.lawyerOffice.officeDescription === "" ||
            loggedInUser.lawyerOffice.officeSpecialty === [] ||
            loggedInUser.lawyerOffice.officeAddress === "" ||
            loggedInUser.lawyerOffice.officeTelephone === "" ||
            loggedInUser.lawyerOffice.officeSeniority === "" ||
            loggedInUser.lawyerOffice.officePicture === "" ){
        
            alert("יש למלא את כל השדות");
        }
        else{
            dispatch(changeLoggedInUser(loggedInUser));
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
                        name="officeDescription"
                        required
                        onChange={handleChange}
                        fullWidth={true}
                        multiline
                        rowsMax={5}
                        className={classes.Input}/><br/><br/>
            <Autocomplete multiple
                          name="officeSpecialty"
                          required
                          multiline
                          onChange={handleChange}
                          options={Specialties}
                          renderInput={(params) => (
                          <TextField {...params}
                                     variant="standard"
                                     label="תחומי התמחות של המשרד"/>)}/><br/>
            <TextField label="כתובת המשרד"
                        name="officeAddress"
                        required
                        onChange={handleChange}
                        fullWidth={true}
                        className={classes.Input}/><br/><br/>
            <TextField label="טלפון המשרד"
                        name="officeTelephone"
                        required
                        onChange={handleChange}
                        fullWidth={true}
                        type="tel"
                        className={classes.Input}/><br/><br/>
            <TextField label="ותק המשרד (בשנים)"
                        name="officeSeniority"
                        required
                        defaultValue={0}
                        onChange={handleChange}
                        fullWidth={true}
                        type="number"
                        className={classes.Input}/><br/>
            <label>תמונה: </label>
            <input className={classes.Input}
                    name="officePicture"
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