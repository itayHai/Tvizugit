import React, {useRef } from 'react';
import classes from './updateClassAction.module.css';
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { updateClassAction } from '../../../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';


const UpdateClassAction = props => {
    const dispatch = useDispatch();
    const classAction = useSelector(state => state.currClassAction)
    const descriptionRef = useRef();
    
    const handleSave = () => {
        classAction.description = descriptionRef.current.value;
        dispatch(updateClassAction(classAction))
        props.close();
    }
    const handleChange = (event) => {
        classAction[event.target.name] = event.target.value;
    }
    const handleManagerchange = (event, values) => {
        classAction.managerUser = values;
    }
    return (

        <div className={classes.updateModal}>
            <h2>עריכת תובענה</h2>
            <TextareaAutosize autoFocus className={classes.textBox} ref={descriptionRef} rowsMin={3} defaultValue={classAction.description}></TextareaAutosize>
            <div className={classes.updateBanner}>
                <TextField className={classes.ManagerAction} label="שם התובענה" defaultValue={classAction.actionName} name="actionName" onChange={handleChange}></TextField>
                <TextField className={classes.ManagerAction} label='ע"וד מייצג' defaultValue={classAction.lawyer} name="lawyer" onChange={handleChange} ></TextField>
                <TextField className={classes.ManagerAction} label="שלב התובענה" defaultValue={classAction.actionStage} name="actionStage" onChange={handleChange}></TextField>
                <TextField className={classes.ManagerAction} label="קטגוריה" defaultValue={classAction.category} name="category" onChange={handleChange}></TextField>
                {classAction.users? <Autocomplete
                    options={classAction.users}
                    className={classes.ManagerAction}
                    getOptionLabel={(user) => user.name}
                    id="managerUser"
                    autoComplete
                    onChange={handleManagerchange}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="מנהל תובענה" margin="normal" />}
                /> 
                : null}
            </div>

            <div className={classes.buttons}>
                <Button variant="contained" onClick={props.close}>
                    ביטול
                </Button>
                <Button
                    className={classes.saveButton}
                    onClick={() => handleSave()}
                >שמור</Button>
            </div>
        </div>
    );
};

export default UpdateClassAction;