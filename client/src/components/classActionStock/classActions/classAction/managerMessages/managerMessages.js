import React from 'react';
import ManagerMessage from './managerMessage/managerMessage';
import classes from './managerMessages.module.css';
// import { Button } from "@material-ui/core";
// import AddCircleIcon from '@material-ui/icons/AddCircle';

const managerMessages = props => {
    const messagesToshow = props.messages?.map((mes) => {
        return <ManagerMessage key={mes.Id} message={mes} />
    })
    // const handleOpen = () => {
    // };
    return (
        props.messages ? <div>
            <div className={classes.addMessage}>
                <h3>הודעות</h3>
                {/* <Button
                    className={classes.filterButton}
                    onClick={handleOpen}
                    startIcon={<AddCircleIcon fontSize="large" />}
                >
                </Button> */}
            </div>
            <div className={classes.messages}>
                {messagesToshow}
            </div>
        </div> :
            <h3>אין הודעות</h3>
    );
};

export default managerMessages;