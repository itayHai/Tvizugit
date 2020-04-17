import React from 'react';
import ManagerMessage from './managerMessage/managerMessage';
import classes from './managerMessages.module.css';

const managerMessages = props => {
    const messagesToshow = props.messages?.map((mes) => {
        return <ManagerMessage key={mes.Id} message={mes} />
    })
    return (
        props.messages? <div>
            <h3>הודעות</h3>
            <div className={classes.messages}>
                {messagesToshow}
            </div>
        </div>:
        <h3>אין הודעות</h3>
    );
};

export default managerMessages;