import React from 'react';
import classes from './managerMessage.module.css';
import { CalendarToday } from '@material-ui/icons';

const managerMessage = (props) => {
    return (
        <div className={classes.message}>
            <div style={{margin:"15px"}}>
                <h3>{props.message.title}</h3>
                {props.message.content}
                <div style={{ display: 'flex', flexDirection: "row" }}>
                    <CalendarToday className={classes.icon} color="action" fontSize="small" />
                    <h5 style={{ margin: "7px" , paddingTop:"10px"}}>{props.message.date}</h5>
                </div>
            </div>
        </div>
    );
};

export default managerMessage;