import React from 'react';
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import Divider from '@material-ui/core/Divider';

const UpdateUsersClassActions = props => {
    return (
        <div
            style={{ minWidth: "500px", maxWidth: "500px", minHeight: "500px", maxHeight: "500px" }}
        >
            {props.classAction.users ?
                <div> <Autocomplete multiple
                    options={props.classAction.users.filter(usr => usr.isWaiting)}
                    getOptionLabel={(usr) => usr.user.displayName}
                    id="waitingUsers"
                    defaultValue={props.classAction.waitingUsers}
                    onChange={(event, values) => props.handleUsers("waitingUsers",event, values)}
                    renderInput={(params) => (
                        <TextField {...params}
                            variant="standard"
                            label="משתמשים שממתינים לאישור" />)} />
                    <Divider orientation="vertical" flexItem />
                    <Autocomplete multiple
                        options={props.classAction.users.filter(usr => !usr.isWaiting && usr.user.id !== props.classAction.leadingUser.id)}
                        getOptionLabel={(usr) => usr.user.displayName}
                        id="insideUsers"
                        defaultValue={props.classAction.insideUsers}
                        onChange={(event, values) => props.handleUsers("insideUsers",event, values)}
                        renderInput={(params) => (
                            <TextField {...params}
                                variant="standard"
                                label="משתמשים למחיקה" />)} /> </div>
                : null}
        </div>
    );
};

export default UpdateUsersClassActions;