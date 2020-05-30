import React from 'react';
import classes from './classActionInfo.module.css'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Input, TextField } from "@material-ui/core";
import { categoriesRequest } from "../../../utils/requests";
import { useQuery } from "@apollo/react-hooks";

const ClassActionInfo = props => {
    const { loading, data } = useQuery(categoriesRequest.getAll);
    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <Input
                placeholder="שם התביעה"
                className={classes.InputSearch}
                id="name"
                autoFocus={true}
                fullWidth={true}
                onChange={props.handleChangeInput}
            />
            <Input
                placeholder="תיאור"
                className={classes.InputSearch}
                id="description"
                fullWidth={true}
                onChange={props.handleChangeInput}
            />
            <Autocomplete
                options={data.CategoryQueries.categories}
                className={classes.InputSearch}
                getOptionSelected={(option, value) => {
                    return option.id === value.id
                }}
                getOptionLabel={(cat) => cat.name}
                id="category"
                autoComplete
                onChange={props.handleChangeAutoField}
                includeInputInList
                renderInput={(params) => <TextField {...params} placeholder="קטגוריה" fullWidth={true} />}
            />
        </div>
    );
};

export default ClassActionInfo;