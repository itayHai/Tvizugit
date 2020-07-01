import React from 'react';
import { TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';

const UpdateUsersClassActions = props => {
    return (
        <div
            style={{ minWidth: "500px", maxWidth: "500px", minHeight: "600px", maxHeight: "600px" }}
        >
            <br></br>
            {props.classAction.users ?
                <div> <Autocomplete multiple
                    options={props.classAction.users.filter(usr => usr.isWaiting)}
                    getOptionLabel={(usr) => usr.user.displayName}
                    id="waitingUsers"
                    defaultValue={props.classAction.waitingUsers}
                    onChange={(event, values) => props.handleUsers("waitingUsers", event, values)}
                    renderInput={(params) => (
                        <TextField {...params}
                            variant="standard"
                            label="משתמשים שממתינים לאישור" />)} />
                    <br></br>
                    <Autocomplete multiple
                        options={props.classAction.users.filter(usr => !usr.isWaiting && usr.user.id !== props.classAction.leadingUser.id)}
                        getOptionLabel={(usr) => usr.user.displayName}
                        id="insideUsers"
                        defaultValue={props.classAction.insideUsers}
                        onChange={(event, values) => props.handleUsers("insideUsers", event, values)}
                        renderInput={(params) => (
                            <TextField {...params}
                                variant="standard"
                                label="משתמשים למחיקה" />)} />
                    <br></br>
                    <Autocomplete
                        options={props.classAction.users}
                        defaultValue={props.classAction.users.find(user => props.classAction.leadingUser.id === user.user.id)}
                        getOptionLabel={(user) => user.user.name}
                        id="leadingUser"
                        autoComplete
                        onChange={(event, values) => props.handleChangeAutoField("leadingUser", event, values)}
                        includeInputInList
                        renderInput={(params) => <TextField {...params} label="מנהל תובענה" margin="normal" />}
                    /> </div>

                : null}
        </div>
    );
};

export default UpdateUsersClassActions;