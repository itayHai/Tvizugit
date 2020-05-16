import React, { useRef } from 'react';
import classes from './updateClassAction.module.css';
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { changeActionBeforeSave } from '../../../../../../../store/classAction';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from "@apollo/react-hooks";
import { classActionsRequest, categoriesRequest } from '../../../../../../../utils/requests';
import Spinner from '../../../../../../spinner/spinner';
import { statuses } from '../../../../../../../utils/globalConsts';

const UpdateClassAction = props => {
    const stateClassAction = useSelector(state => state.classAction.actionBeforeSave);
    const actionBeforeSave = { ...stateClassAction };
    const dispatch = useDispatch();
    const { loading, error, data } = useQuery(categoriesRequest.getAll);
    if (loading) return <Spinner />;
    if (error) console.log(error);

    const handleChangeField = (event) => {
        actionBeforeSave[event.target.name] = event.target.value;
        dispatch(changeActionBeforeSave(actionBeforeSave))
    }
    const handleChangeAutoField = (event, values) => {
        if (event.target.id.includes("status"))
            actionBeforeSave.status = values
        if (event.target.id.includes("category"))
            actionBeforeSave.category = values
        if (event.target.id.includes("leadingUser"))
            actionBeforeSave.leadingUser = values
        dispatch(changeActionBeforeSave(actionBeforeSave))
    }
    return (
        <div
            style={{ minWidth: "500px", maxWidth: "500px", minHeight: "350px", maxHeight: "350px" }}
        >
            <br></br>
            <TextareaAutosize autoFocus className={classes.textBox} rowsMin={3} defaultValue={actionBeforeSave.description ? actionBeforeSave.description : props.classAction.description} name="description" onChange={handleChangeField}></TextareaAutosize>
            <div className={classes.updateBanner}
            >
                <TextField className={classes.ManagerAction} label="שם התובענה" defaultValue={actionBeforeSave.name ? actionBeforeSave.name : props.classAction.name} name="name" onChange={handleChangeField}></TextField>
                <TextField className={classes.ManagerAction} label='ע"וד מייצג' defaultValue={actionBeforeSave.lawyer ? actionBeforeSave.lawyer : props.classAction.lawyer} name="lawyer" onChange={handleChangeField} ></TextField>
                <Autocomplete
                    options={statuses}
                    className={classes.ManagerAction}
                    defaultValue={actionBeforeSave.status ? actionBeforeSave.status : props.classAction.status}
                    id="status"
                    autoComplete
                    onChange={(event, values) => handleChangeAutoField(event, values)}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="שלב התובענה" margin="normal" />}
                />

                <Autocomplete
                    options={data.CategoryQueries.categories}
                    className={classes.ManagerAction}
                    defaultValue={actionBeforeSave.category ? actionBeforeSave.category : props.classAction.category}
                    getOptionSelected={(option,value) =>{
                        return option.id === value.id
                    }}
                    getOptionLabel={(cat) => cat.name}
                    id="category"
                    autoComplete
                    onChange={(event, values) => handleChangeAutoField(event, values)}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="קטגוריה" margin="normal" />}
                />
                {
                    props.classAction.users ?
                        <Autocomplete
                            options={props.classAction.users}
                            defaultValue={actionBeforeSave.leadingUser ? actionBeforeSave.leadingUser : props.classAction.users.find(user => props.classAction.leadingUser.id === user.user.id)}
                            className={classes.ManagerAction}
                            getOptionLabel={(user) => user.user.name}
                            id="leadingUser"
                            autoComplete
                            onChange={(event, values) => handleChangeAutoField(event, values)}
                            includeInputInList
                            renderInput={(params) => <TextField {...params} placeholder="מנהל תובענה" margin="normal" />}
                        />
                        : null
                }
            </div>
        </div>
    );
};

export default UpdateClassAction;