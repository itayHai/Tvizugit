import React from 'react';
import classes from './classActionDefendant.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Input, TextField } from "@material-ui/core";
import { defendantTypes, defendantThemes } from '../../../../utils/globalConsts';

const classActionDefendant = props => {
    let errorName = false;
    let errorType = false;
    let errorTheme = false;
    if (props.defendantNumber === 0 || (props.defendant.name || props.defendant.type || props.defendant.theme)) {
        errorName = props.showMandatory && !props.defendant.name;
        errorType = props.showMandatory && !props.defendant.type;
        errorTheme = props.showMandatory && !props.defendant.theme;
    }
    const handleChange = (event, value) => {
        props.handleChangeInput(event, value, props.defendantNumber)
    }
    const handleChangeAuto = (event, values, field) => {
        props.handleChangeDefField(event, values, field, props.defendantNumber)
    }
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
                placeholder="הגורם הנתבע"
                id={"defendant" + props.defendantNumber}
                defaultValue={props.defendant.name}
                className={classes.defendant}
                fullWidth={true}
                error={errorName}
                onChange={(event, value) => handleChange(event, value)}
            />
            <Autocomplete
                options={defendantTypes}
                className={classes.InputSearch}
                id={"defendantType" + props.defendantNumber}
                defaultValue={props.defendant.type}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values, "type")}
                renderInput={(params) => <TextField {...params} error={errorType} placeholder="סוג נאשם" fullWidth={true} />}
            />
            <Autocomplete
                options={defendantThemes}
                className={classes.InputSearch}
                id={"defendantTheme" + props.defendantNumber}
                defaultValue={props.defendant.theme}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values, "theme")}
                renderInput={(params) => <TextField {...params} error={errorTheme} placeholder="עולם תוכן" fullWidth={true} />}
            />
        </div>
    );
};

export default classActionDefendant;