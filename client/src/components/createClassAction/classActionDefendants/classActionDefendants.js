import React from 'react';
import classes from './classActionDefendants.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Input, TextField} from "@material-ui/core";
import {defendantTypes,defendantThemes} from '../../../utils/globalConsts';

const ClassActionDefendants = props => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
                placeholder="הגורם הנתבע"
                id="defendant"
                className={classes.InputSearch}
                fullWidth={true}
                onChange={props.handleChangeInput}
            />
            <Autocomplete
                options={defendantTypes}
                className={classes.InputSearch}
                id="defendantType"
                autoComplete
                renderInput={(params) => <TextField {...params} placeholder="סוג נאשם" fullWidth={true} />}
            />
            <Autocomplete
                options={defendantThemes}
                className={classes.InputSearch}
                id="defendantTheme"
                autoComplete
                renderInput={(params) => <TextField {...params} placeholder="עולם תוכן נאשם" fullWidth={true} />}
            />
        </div>
    );
};

export default ClassActionDefendants;