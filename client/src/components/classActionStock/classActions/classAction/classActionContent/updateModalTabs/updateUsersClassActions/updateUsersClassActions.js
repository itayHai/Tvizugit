import React, { useEffect } from 'react';
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';
import classes from './updateUsersClassActions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeActionBeforeSave } from '../../../../../../../store/classAction';


const UpdateUsersClassActions = props => {
    const stateClassAction = useSelector(state => state.classAction.actionBeforeSave);
    const actionBeforeSave = { ...stateClassAction };
    const dispatch = useDispatch();
    
    const handleWaintingUsers = (event, values) => {
        actionBeforeSave.waitingUsers = [];
        for (let index = 0; index < values.length; index++) {
            actionBeforeSave.waitingUsers.push(values[index]);
        }
        dispatch(changeActionBeforeSave(actionBeforeSave))
    }
    const handleInsideUsers = (event, values) => {
        actionBeforeSave.insideUsers = [];
        for (let index = 0; index < values.length; index++) {
            actionBeforeSave.insideUsers.push(values[index]);
        }
        dispatch(changeActionBeforeSave(actionBeforeSave))
    }
    return (
        <div
            // className={classes.usersChoose}
            style={{ minWidth: "500px", maxWidth: "500px", minHeight: "350px", maxHeight: "350px" }}
        >
            {props.classAction.users ?
                <div> <Autocomplete multiple
                    options={props.classAction.users.filter(usr => usr.isWaiting)}
                    getOptionLabel={(usr) => usr.user?.name}
                    id="waitingUsers"
                    defaultValue={actionBeforeSave.waitingUsers.filter(usr => usr.isWaiting)}
                    onChange={(event, values) => handleWaintingUsers(event, values)}
                    renderInput={(params) => (
                        <TextField {...params}
                            variant="standard"
                            label="משתמשים שממתינים לאישור" />)} />
                    <Divider orientation="vertical" flexItem />
                    <Autocomplete multiple
                        options={props.classAction.users.filter(usr => !usr.isWaiting)}
                        getOptionLabel={(usr) => usr.user.name}
                        id="insideUsers"
                        defaultValue={actionBeforeSave.insideUsers.filter(usr => !usr.isWaiting)}
                        onChange={(event, values) => handleInsideUsers(event, values)}
                        renderInput={(params) => (
                            <TextField {...params}
                                variant="standard"
                                label="משתמשים בתובענה" />)} /> </div>
                : null}
        </div>
    );
};

export default UpdateUsersClassActions;