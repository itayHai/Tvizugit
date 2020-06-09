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
                className={classes.defendant}
                fullWidth={true}
                error = {props.defendantNumber === 0 ? (props.showMandatory && !props.defendant.name) : false}
                onChange={(event,value) => handleChange(event,value)}
            />
            <Autocomplete
                options={defendantTypes}
                className={classes.InputSearch}
                id={"defendantType"+ props.defendantNumber}
                defaultValue={props.defendant.type}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values)}
                renderInput={(params) => <TextField {...params} error={props.defendantNumber === 0 ? (props.showMandatory && !props.defendant.type) : false}  placeholder="סוג נאשם" fullWidth={true} />}
            />
            <Autocomplete
                options={defendantThemes}
                className={classes.InputSearch}
                id={"defendantTheme"+ props.defendantNumber}
                defaultValue={props.defendant.theme}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values)}
                renderInput={(params) => <TextField {...params} error={props.defendantNumber === 0 ? (props.showMandatory && !props.defendant.theme) : false} placeholder="עולם תוכן" fullWidth={true} />}
            />
        </div>
    );
};

export default classActionDefendant;