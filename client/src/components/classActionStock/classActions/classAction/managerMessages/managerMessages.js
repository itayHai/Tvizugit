import React from 'react';
import ManagerMessage from './managerMessage/managerMessage';
import classes from './managerMessages.module.css';
import { Button } from "@material-ui/core";
import AddMessage from './addMessage/addMessage';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const ManagerMessages = props => {
    const isMessages = props.messages.length !== 0 ? "הודעות" : "אין הודעות";
    const [addMes, setaddMes] = React.useState(false);

    const handleAddMessage = () => {
        setaddMes(true);
    };

    const handleCancelMessage = () => {
        setaddMes(false);
    };

    const handleSave = (title, message, actionId) => {
        handleCancelMessage();
        props.addMessClick(title, message, actionId)
    };

    const messagesToshow = props.messages.map((mes) => {
        return <ManagerMessage
            key={mes.title}
            message={mes}
            isUserManager={props.isUserManager}
            deleteClick={props.delMessClick}
        />
    })

    return (
        <div>
            <div className={classes.addMessage}>
                <h3>{isMessages}</h3>
                {props.isUserManager ? <Button
                    className={classes.filterButton}
                    onClick={handleAddMessage}
                    startIcon={<AddCircleIcon fontSize="large" />}
                >
                    הוספה
                </Button> : null}
            </div>
            {addMes ? <AddMessage
                close={handleCancelMessage}
                saveClick={(title, message, actionId) => handleSave(title, message, actionId)} /> :
                null}
            {props.messages.length !== 0 ?
                <div className={classes.messages}>
                    {messagesToshow}
                </div> : null}
        </div>
    );
};

export default ManagerMessages;