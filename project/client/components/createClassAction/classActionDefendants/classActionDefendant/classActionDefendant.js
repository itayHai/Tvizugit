import React from 'react';
import classes from './classActionDefendant.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Input, TextField } from "@material-ui/core";
import { classActionsRequest } from "../../../../utils/requests";
import { useQuery } from "@apollo/react-hooks";

const classActionDefendant = props => {
    const { data: dataType, error: errorDefType, loading: landingType } = useQuery(classActionsRequest.getAllDefendantsTypes);
    const { data: dataTheme, error: errorDefTheme, loading: landingTheme } = useQuery(classActionsRequest.getAllDefendantsThemes);
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
    if (landingType || landingTheme) return <p>Loading...</p>;
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
                options={dataType.defendantTypeQueries.defendantTypes}
                className={classes.InputSearch}
                getOptionSelected={(option, value) => {
                    return option.id === value.id
                }}
                getOptionLabel={(type) => type.name}
                id={"defendantType" + props.defendantNumber}
                defaultValue={props.defendant.type?.name}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values, "type")}
                renderInput={(params) => <TextField {...params} error={errorType} placeholder="סוג נאשם" fullWidth={true} />}
            />
            <Autocomplete
                options={dataTheme.defendantThemeQueries.defendantThemes}
                className={classes.InputSearch}
                getOptionSelected={(option, value) => {
                    return option.id === value.id
                }}
                getOptionLabel={(theme) => theme.name}
                id={"defendantTheme" + props.defendantNumber}
                defaultValue={props.defendant.theme?.name}
                autoComplete
                onChange={(event, values) => handleChangeAuto(event, values, "theme")}
                renderInput={(params) => <TextField {...params} error={errorTheme} placeholder="עולם תוכן" fullWidth={true} />}
            />
        </div>
    );
};

export default classActionDefendant;