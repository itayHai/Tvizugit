import React, { useEffect, useRef } from 'react';
import classes from './updateClassAction.module.css';
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
// import Autocomplete from '../../../../../../../node_modules/@material-ui/lab/Autocomplete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { updateClassAction } from '../../../../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';


const UpdateClassAction = props => {
    const dispatch = useDispatch();
    const classAction = useSelector(state => state.currClassAction)
    const newClassAction = { ...classAction };
    const descriptionRef = useRef();

    const handleSave = () => {
        newClassAction.description = descriptionRef.current.value;
        dispatch(updateClassAction(newClassAction))
        props.close();
    }
    const handleChange = (event) => {
        newClassAction[event.target.id] = event.target.value;
    }
    const handleManagerchange = (event, values) => {
        newClassAction.managerUser = values;
    }
    useEffect(() => {
        descriptionRef.current.focus()
    });
    return (

        <div className={classes.updateModal}>
            <h2>עריכת תובענה</h2>
            <TextareaAutosize className={classes.textBox} ref={descriptionRef} rowsMin={3} defaultValue={newClassAction.description}></TextareaAutosize>
            <div className={classes.updateBanner}>
                <TextField className={classes.ManagerAction} label="שם התובענה" defaultValue={newClassAction.actionName} id="actionName" onChange={handleChange}></TextField>
                <TextField className={classes.ManagerAction} label='ע"וד מייצג' defaultValue={newClassAction.lawyer} id="lawyer" onChange={handleChange} ></TextField>
                <TextField className={classes.ManagerAction} label="שלב התובענה" defaultValue={newClassAction.actionStage} id="actionStage" onChange={handleChange}></TextField>
                <TextField className={classes.ManagerAction} label="קטגוריה" defaultValue={newClassAction.category} id="category" onChange={handleChange}></TextField>
                {classAction.users ?
                <Autocomplete
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
                <Button variant="contained" onClick={props.close} className={classes.cancelButton}>
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