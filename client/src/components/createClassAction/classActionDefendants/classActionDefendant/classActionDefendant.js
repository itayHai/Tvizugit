import React from 'react';
import classes from './classActionDefendant.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {Input, TextField} from "@material-ui/core";
import {defendantTypes,defendantThemes} from '../../../../utils/globalConsts';

const classActionDefendant = props => {
    const handleChange = (event,value) =>{
        props.handleChangeInput(event, value, props.defendantNumber)
    }
    const handleChangeAuto = (event,values)=>{
        props.handleChangeAutoField(event, values, props.defendantNumber)
    }
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Input
                placeholder="הגורם הנתבע"
                id={"defendant" + props.defendantNumber}
                defaultValue={props.defendant.name}
                className={classes.InputSearch}
                fullWidth={true}
                onChange={(event,value) => handleChange(event,value)}
            />
            <Autocomplete
                options={defendantTypes}
                className={classes.InputSearch}
                id={"defendantType"+ props.defendantNumber}
                defaultValue={props.defendant.type}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values)}
                renderInput={(params) => <TextField {...params} placeholder="סוג נאשם" fullWidth={true} />}
            />
            <Autocomplete
                options={defendantThemes}
                className={classes.InputSearch}
                id={"defendantTheme"+ props.defendantNumber}
                defaultValue={props.defendant.theme}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values)}
                renderInput={(params) => <TextField {...params} placeholder="עולם תוכן נאשם" fullWidth={true} />}
            />
        </div>
    );
};

export default classActionDefendant;