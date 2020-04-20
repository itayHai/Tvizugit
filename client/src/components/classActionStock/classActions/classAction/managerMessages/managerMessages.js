import React from 'react';
import ManagerMessage from './managerMessage/managerMessage';
import classes from './managerMessages.module.css';
import Modal from '../../../../modal/modal';
import { Button } from "@material-ui/core";
import AddMessage from './addMessage/addMessage';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const ManagerMessages = props => {
    const isMessages = props.messages.length !== 0 ? "הודעות" : "אין הודעות";
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (title, message, actionId) => {
        setOpen(false);
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
        // messagesToshow.length !== 0 ? 
        <div>
            <div className={classes.addMessage}>
                <h3>{isMessages}</h3>
                {props.isUserManager ? <Button
                    className={classes.filterButton}
                    onClick={handleOpen}
                    startIcon={<AddCircleIcon fontSize="large" />}
                >
                    הוספה
                </Button> : null}
                <Modal show={open} onClose={handleClose}>
                    <AddMessage
                        close={handleClose}
                        saveClick={(title, message, actionId) => handleSave(title, message, actionId)}></AddMessage>
                </Modal>
            </div>
            { props.messages.length !== 0 ?
            <div className={classes.messages}>
                {messagesToshow}
            </div> : null}
        </div>
        // : <h3>אין הודעות</h3>
    );
};

export default ManagerMessages;