import React from 'react';
import classes from './managerMessage.module.css';
import { CalendarToday, Delete } from '@material-ui/icons';
import { Button } from '@material-ui/core'

const managerMessage = (props) => {
    return (
        <div className={classes.message}>

            <div className={classes.oneMessage}>

                <h3 className={classes.title}> {props.message.title}
                    {props.isUserManager ? <Button
                        onClick={() => props.deleteClick(props.message)}
                        startIcon={<Delete />}
                    >
                        מחיקה
                     </Button> : null}
                </h3>
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