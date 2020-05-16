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
import {statuses} from '../../../../../../utils/globalConsts';

const UpdateClassAction = props => {
    const dispatch = useDispatch();
    const stateClassAction = useSelector(state => state.classAction.currClassAction);
    const classAction = {...stateClassAction};
    const { loading, error, data } = useQuery(categoriesRequest.getAll);
    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer);
    const descriptionRef = useRef();
    if (loading) return <Spinner />;
    if(error) console.log(error);

    const handleSave = () => {
        classAction.description = descriptionRef.current.value;
        updateClassActionServer({
            variables:
            {
                classAction:
                {
                    defendants: classAction.defendants,
                    users: classAction.users.map(usr => usr.id),
                    hashtags: classAction.hashtags,
                    name: classAction.name,
                    description: classAction.description,
                    category: classAction.category.id,
                    status: classAction.status,
                    leadingUser: classAction.leadingUser.id,
                },
                id: classAction.id
            }
        })
        dispatch(updateClassAction(classAction));
        props.close();
    }
    const handleChange = (event) => {
        classAction[event.target.name] = event.target.value;
    }
    return (
        <div className={classes.updateModal}>
            <h2>עריכת תובענה</h2>
            <TextareaAutosize autoFocus className={classes.textBox} ref={descriptionRef} rowsMin={3} defaultValue={classAction.description}></TextareaAutosize>
            <div className={classes.updateBanner}>
                <TextField className={classes.ManagerAction} label="שם התובענה" defaultValue={classAction.name} name="name" onChange={handleChange}></TextField>
                <TextField className={classes.ManagerAction} label='ע"וד מייצג' defaultValue={classAction.lawyer} name="lawyer" onChange={handleChange} ></TextField>
                <Autocomplete
                    options={statuses}
                    className={classes.ManagerAction}
                    defaultValue={classAction.status}
                    id="status"
                    autoComplete
                    onChange={(event, values) => classAction.status = values}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="שלב התובענה" margin="normal"/>}
                />
                
                <Autocomplete
                    options={data.CategoryQueries.categories}
                    className={classes.ManagerAction}
                    defaultValue={data.CategoryQueries.categories.find(cat => cat.id === classAction.category?.id)}
                    getOptionLabel={(cat) => cat.name}
                    id="category"
                    autoComplete
                    onChange={(event, values) => classAction.category = values}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="קטגוריה" margin="normal" />}
                />
                {
                    classAction.users ?
                        <Autocomplete
                            options={classAction.users}
                            defaultValue={classAction.users.find(usr => usr.id === classAction.leadingUser.id)}
                            className={classes.ManagerAction}
                            getOptionLabel={(user) => user.name}
                            id="leadingUser"
                            autoComplete
                            onChange={(event, values) => classAction.leadingUser = values}
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