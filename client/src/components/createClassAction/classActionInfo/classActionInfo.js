import React from 'react';
import classes from './classActionInfo.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Input, TextField } from "@material-ui/core";
import { categoriesRequest } from "../../../utils/requests";
import { useQuery } from "@apollo/react-hooks";
import { classActionReasons, classActionTypes } from '../../../utils/globalConsts';

const ClassActionInfo = props => {
    const { loading, data } = useQuery(categoriesRequest.getAll);
    if (loading) return <p>Loading...</p>;
    return (
        <div>
            כל השדות בדף הן חובה
            <Input
                placeholder="שם התביעה"
                className={classes.InputSearch}
                id="name"
                defaultValue={props.classAction.name}
                autoFocus={true}
                fullWidth={true}
                onChange={props.handleChangeInput}
                error={props.showMandatory && !props.classAction.name}
            />
            <Input
                placeholder="תיאור"
                className={classes.InputSearch}
                id="description"
                defaultValue={props.classAction.description}
                fullWidth={true}
                onChange={props.handleChangeInput}
                error={props.showMandatory && !props.classAction.description}
            />
            <Autocomplete
                options={classActionTypes}
                className={classes.InputSearch}
                id="type"
                defaultValue={props.classAction.type}
                autoComplete
                onChange={(event, values) => props.handleChangeAutoField(event, values,"type")}
                includeInputInList
                renderInput={(params) => <TextField {...params} error={props.showMandatory && !props.classAction.type} placeholder="סוג תביעה" fullWidth={true} />}
            />
            <Autocomplete
                options={classActionReasons}
                className={classes.InputSearch}
                id="reason"
                defaultValue={props.classAction.reason}
                autoComplete
                onChange={(event, values) => props.handleChangeAutoField(event, values,"reason")}
                includeInputInList
                renderInput={(params) => <TextField {...params} error={props.showMandatory && !props.classAction.reason} placeholder="עילת התביעה" fullWidth={true} />}
            />
            <Autocomplete
                options={data.CategoryQueries.categories}
                className={classes.InputSearch}
                defaultValue={props.classAction.category}
                getOptionSelected={(option, value) => {
                    return option.id === value.id
                }}
                getOptionLabel={(cat) => cat.name}
                id="category"
                autoComplete
                onChange={(event, values) => props.handleChangeAutoField(event, values, "category")}
                includeInputInList
                renderInput={(params) => <TextField error={props.showMandatory && !props.classAction.category} {...params} placeholder="קטגוריה" margin="normal" />}
            />
        </div>
    );
};

export default ClassActionInfo;