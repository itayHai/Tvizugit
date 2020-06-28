import React from 'react';
import classes from './updateClassAction.module.css';
import {TextareaAutosize,TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from "@apollo/react-hooks";
import { categoriesRequest, lawyersRequests, classActionsRequest } from '../../../../../../../utils/requests';
import Spinner from '../../../../../../spinner/spinner';
import { statuses,classActionReasons, classActionTypes } from '../../../../../../../utils/globalConsts';

const UpdateClassAction = props => {
    const { data: dataL, error: errorL, loading: landingL } = useQuery(lawyersRequests.getAllLawyers);
    const { data: dataT, error: errorT, loading: landingT } = useQuery(classActionsRequest.getAllClassActionTypes);
    const { data: dataR, error: errorR, loading: landingR } = useQuery(classActionsRequest.getAllClassActionReasons);
    const { loading, error, data } = useQuery(categoriesRequest.getAll);

    if (landingL || loading || landingT || landingR) return <Spinner />;
    if (errorL || error || errorT || errorR) console.log(errorL);
    return (
        <div
            style={{ minWidth: "500px", maxWidth: "500px", minHeight: "500px", maxHeight: "500px" }}
        >
            <br></br>
            <TextareaAutosize autoFocus className={classes.textBox} rowsMin={3} defaultValue={props.classAction.description} name="description" onChange={(event) => props.handleChange(event)}></TextareaAutosize>
            <div className={classes.updateBanner}
            >
                <TextField className={classes.ManagerAction} label="שם התובענה" defaultValue={props.classAction.name} name="name" onChange={(event) => props.handleChange(event)}></TextField>
                <Autocomplete
                    options={dataL.LawyerQueries.lawyers}
                    className={classes.ManagerAction}
                    defaultValue={props.classAction.representingLawyer}
                    getOptionSelected={(option, value) => {
                        return option.id === value.id
                    }}
                    getOptionLabel={(law) => law.name}
                    id="representingLawyer"
                    autoComplete
                    onChange={(event, values) => props.handleChangeAutoField("representingLawyer",event, values)}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="משרד מייצג" margin="normal" />}
                />
                <Autocomplete multiple
                    options={dataR.classActionReasonQueries.classActionReasons}
                    className={classes.ManagerAction}
                    defaultValue={props.classAction.reasons}
                    getOptionSelected={(option, value) => {
                        return option.id === value.id
                    }}
                    getOptionLabel={(reason) => reason.name}
                    id="reasons"
                    autoComplete
                    onChange={(event, values) => props.handleReasons(event, values)}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="עילת תובענה" margin="normal" />}
                />
                <Autocomplete
                    options={dataT.typeClassActionQueries.typesOfClassActions}
                    className={classes.ManagerAction}
                    defaultValue={props.classAction.type}
                    getOptionSelected={(option, value) => {
                        return option.id === value.id
                    }}
                    getOptionLabel={(type) => type.name}
                    id="type"
                    autoComplete
                    onChange={(event, values) => props.handleChangeAutoField("type",event, values)}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="סוג תובענה" margin="normal" />}
                />
                <Autocomplete
                    options={statuses}
                    className={classes.ManagerAction}
                    defaultValue={props.classAction.status}
                    id="status"
                    autoComplete
                    onChange={(event, values) => props.handleChangeAutoField("status",event, values)}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="שלב התובענה" margin="normal" />}
                />
                <Autocomplete
                    options={data.CategoryQueries.categories}
                    className={classes.ManagerAction}
                    defaultValue={props.classAction.category}
                    getOptionSelected={(option, value) => {
                        return option.id === value.id
                    }}
                    getOptionLabel={(cat) => cat.name}
                    id="category"
                    autoComplete
                    onChange={(event, values) => props.handleChangeAutoField("category",event, values)}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="קטגוריה" margin="normal" />}
                />
                {
                    props.classAction.users ?
                        <Autocomplete
                            options={props.classAction.users}
                            defaultValue={props.classAction.users.find(user => props.classAction.leadingUser.id === user.user.id)}
                            className={classes.ManagerAction}
                            getOptionLabel={(user) => user.user.name}
                            id="leadingUser"
                            autoComplete
                            onChange={(event, values) => props.handleChangeAutoField("leadingUser",event, values)}
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