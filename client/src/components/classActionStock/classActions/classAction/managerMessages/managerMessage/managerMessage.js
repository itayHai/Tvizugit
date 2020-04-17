import React from 'react';
import classes from './managerMessage.module.css';
import { CalendarToday } from '@material-ui/icons';

const managerMessage = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.oneMessage}>
                <h3>{props.message.title}</h3>
                {props.message.content}
                <div className={classes.messDate}>
                    <CalendarToday className={classes.icon} color="action" fontSize="small" />
                    <h5 className={classes.contentDate}>{props.message.date}</h5>
                </div>
            </div>
        </div>
    );
};

export default managerMessage;