import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import classes from "./createClassAction.module.css";
import { AddCircle } from "@material-ui/icons";
import Input from "@material-ui/core/Input";
import { categoriesRequest } from "../../utils/requests";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useMutation, useQuery } from "@apollo/react-hooks";
import TextField from '@material-ui/core/TextField';
import Chip from "@material-ui/core/Chip";
import { classActionsRequest } from '../../utils/requests';
import { useSelector } from 'react-redux';

const CreateClassAction = props => {
    const [defendant, setDefendant] = useState("");
    const [classAction] = useState({ defendants: [], users: [] });
    let [defendants] = useState([]);
    const { loading, data } = useQuery(categoriesRequest.getAll);
    const [addClassAction] = useMutation(classActionsRequest.addClassAction);
    const loggedInUser = useSelector((state) => state.user.loggedInUser);

    if (loading) return <p>Loading...</p>;

    const handleChangeInput = (event, value) => {
        classAction[event.target.id] = event.target.value;
    }
    const handleChangeAutoField = (event, values) => {
        if (event.target.id.includes("category"))
            classAction.category = values.id
    }
    const keyDownHandler = (event) => {
        if (["Enter", "Tab", ","].includes(event.key)) {
            event.preventDefault();
            defendants.push(defendant.trim());
            setDefendant("");
        }
    };

    const inputChangedHandler = (event) => {
        setDefendant(event.target.value);
    };

    const handleSave = () => {
        classAction.openDate = new Date();
        classAction.status = "תובענה חדשה בשוק חבר'ה!";
        classAction.users.push({ user: loggedInUser.id, isWaiting: Boolean(false) });
        classAction.leadingUser = loggedInUser.id;
        classAction.defendants = defendants;
        addClassAction({
            variables: {
                classAction
            }

        }).then(data => {
            props.close(true);
        }).catch(err => {
            props.close(false);
        })
    }
    return (
        <div>
            <div className={classes.SearchClassAction}>
                <div className={classes.Title}>
                    <AddCircle className={classes.SearchIcon} />
                    <h1>הוספת תובענה ייצוגית</h1>
                </div>
                <Input
                    placeholder="שם התביעה"
                    className={classes.InputSearch}
                    id="name"
                    autoFocus={true}
                    fullWidth={true}
                    onChange={handleChangeInput}
                />
                <Input
                    placeholder="תיאור"
                    className={classes.InputSearch}
                    id="description"
                    fullWidth={true}
                    onChange={handleChangeInput}
                />
                <Input
                    placeholder=" הגורמים הנתבעים(הגורם הראשון ייחשב כגורם העיקרי)"
                    className={classes.InputSearch}
                    fullWidth={true}
                    value={defendant}
                    onChange={inputChangedHandler}
                    onKeyDown={keyDownHandler}
                />
                {defendants.map((hashtag, index) => {
                    return <Chip className={classes.Chip} key={index} label={hashtag} />;
                })}
                <Autocomplete
                    options={data.CategoryQueries.categories}
                    className={classes.InputSearch}
                    getOptionSelected={(option, value) => {
                        return option.id === value.id
                    }}
                    getOptionLabel={(cat) => cat.name}
                    id="category"
                    autoComplete
                    onChange={handleChangeAutoField}
                    includeInputInList
                    renderInput={(params) => <TextField {...params} placeholder="קטגוריה" fullWidth={true} />}
                />
            </div>
            <div>
                <Button variant="contained" onClick={() => props.close("cancel")}>
                    ביטול
      </Button>
                <Button className={classes.SearchButton} onClick={handleSave} >
                    הוספה
      </Button>
            </div>
        </div>
    );
};

export default CreateClassAction;