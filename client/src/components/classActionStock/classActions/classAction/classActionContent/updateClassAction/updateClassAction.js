import React, { useRef } from 'react';
import classes from './updateClassAction.module.css';
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { updateClassAction } from '../../../../../../store/classAction';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from "@apollo/react-hooks";
import { classActionsRequest, categoriesRequest } from '../../../../../../utils/requests';
import Spinner from '../../../../../spinner/spinner';

const UpdateClassAction = props => {
    const dispatch = useDispatch();
    const stateClassAction = useSelector(state => state.classAction.currClassAction);
    const { loading, error, data } = useQuery(categoriesRequest.getAll);
    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer);
    const descriptionRef = useRef();
    if (loading) return <Spinner/>;

    const handleSave = () => {
        stateClassAction.description = descriptionRef.current.value;
        console.log(updateClassActionServer({
            variables:
            {
                classAction:
                {
                    defendants: stateClassAction.defendants,
                    users: stateClassAction.users.map(usr => usr.id),
                    hashtags: stateClassAction.hashtags,
                    name: stateClassAction.name,
                    description: stateClassAction.description,
                    category: stateClassAction.category.id,
                    status: stateClassAction.status,
                    leadingUser: stateClassAction.leadingUser.id,
                },
                id: stateClassAction.id
            }
        }));
        dispatch(updateClassAction(stateClassAction));
        props.close();
    }
    const handleChange = (event) => {
        stateClassAction[event.target.name] = event.target.value;
    }
    return (
        <div className={classes.updateModal}>
            <h2>עריכת תובענה</h2>
            <TextareaAutosize autoFocus className={classes.textBox} ref={descriptionRef} rowsMin={3} defaultValue={stateClassAction.description}></TextareaAutosize>
            <div className={classes.updateBanner}>
                <TextField className={classes.ManagerAction} label="שם התובענה" defaultValue={stateClassAction.name} name="name" onChange={handleChange}></TextField>
                <TextField className={classes.ManagerAction} label='ע"וד מייצג' defaultValue={stateClassAction.lawyer} name="lawyer" onChange={handleChange} ></TextField>
                <TextField className={classes.ManagerAction} label="שלב התובענה" defaultValue={stateClassAction.status} name="status" onChange={handleChange}></TextField>
                <Autocomplete
                    options={data.CategoryQueries.categories}
                    className={classes.ManagerAction}
                    defaultValue={data.CategoryQueries.categories.find(cat => cat.id === stateClassAction.category?.id)}
                    getOptionLabel={(cat) => cat.name}
                    id="category"
                    autoComplete
                    onChange={(event, values) => stateClassAction.category = values}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="קטגוריה" margin="normal" />}
                />
                {
                    stateClassAction.users ?
                     <Autocomplete
                        options={stateClassAction.users}
                        defaultValue={stateClassAction.users.find(usr => usr.id === stateClassAction.leadingUser.id)}
                        className={classes.ManagerAction}
                        getOptionLabel={(user) => user.name}
                        id="leadingUser"
                        autoComplete
                        onChange={(event, values) => stateClassAction.leadingUser = values}
                        includeInputInList
                        renderInput={(params) => <TextField {...params} placeholder="מנהל תובענה" margin="normal" />}
                    />
                        : null
                }
            </div>

            <div className={classes.buttons}>
                <Button variant="contained" onClick={props.close}>
                    ביטול
                </Button>
                <Button
                    className={classes.saveButton}
                    onClick={() => handleSave()}
                >שמור</Button>
            </div>
        </div>
    );
};

export default UpdateClassAction;