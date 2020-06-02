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
            <Input
                placeholder="שם התביעה"
                className={classes.InputSearch}
                id="name"
                defaultValue={props.classAction.name}
                autoFocus={true}
                fullWidth={true}
                onChange={props.handleChangeInput}
            />
            <Input
                placeholder="תיאור"
                className={classes.InputSearch}
                id="description"
                defaultValue={props.classAction.description}
                fullWidth={true}
                onChange={props.handleChangeInput}
            />
            <Autocomplete
                options={classActionTypes}
                className={classes.InputSearch}
                id="type"
                defaultValue={props.classAction.type}
                autoComplete
                onChange={props.handleChangeAutoField}
                includeInputInList
                renderInput={(params) => <TextField {...params} placeholder="סוג תביעה" fullWidth={true} />}
            />
            <Autocomplete
                options={classActionReasons}
                className={classes.InputSearch}
                id="reason"
                defaultValue={props.classAction.reason}
                autoComplete
                onChange={props.handleChangeAutoField}
                includeInputInList
                renderInput={(params) => <TextField {...params} placeholder="עילת התביעה" fullWidth={true} />}
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
                onChange={(event, values) => props.handleChangeAutoField(event, values)}
                includeInputInList
                renderInput={(params) => <TextField {...params} placeholder="קטגוריה" margin="normal" />}
            />
        </div>
    );
};

export default ClassActionInfo;