import React from "react";
import classes from "./login.module.css"
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

function ProfileDetails (props) {

    return(
        <div>
            <div className={classes.Center}>
                <h2> {props.children} { props.title }</h2>
                <hr color="#e6e6e6"/>
            </div>
            <div className={classes.UserRegister}>
                <TextField label="שם מלא"
                            className={classes.Input}
                            fullWidth={true}/><br/><br/>
                <TextField label="שם משתמש"
                            className={classes.Input}
                            fullWidth={true}/><br/><br/>
                <TextField label="אימייל"
                            className={classes.Input}
                            type="email"
                            fullWidth={true}/><br/><br/>
                <TextField label="סיסמא"
                            className={classes.Input}
                            fullWidth={true}
                            type="password"/><br/><br/>
                <TextField label="אימות סיסמא"
                            className={classes.Input}
                            fullWidth={true}
                            type="password"/><br/><br/>
                <Button className={classes.ProfileButton} 
                        onClick={props.clickNext}>{props.textNext}</Button>
                <Button className={classes.BackButton} 
                        variant="contained" 
                        onClick={props.clickBack}>חזור</Button>
            </div>
        </div>
    )
}

export default ProfileDetails;