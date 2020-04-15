import React from 'react';
import classes from './actionCardContent.module.css';
import { Gavel, CalendarToday, Person } from '@material-ui/icons';
import ManagerMessages from '../managerMessages/managerMessages';

const actionCardContent = props => {
    const lawyerName = props.cAction.lawyer ? props.cAction.lawyer : 'טרם נקבע עו"ד';

    return (
        <div>
            <div className={classes.infoRow}>
                <div className={classes.cellInRow}>
                    <Gavel className={classes.icon} color="action" fontSize="large" />
                    <div className={classes.cellNoIcon}>
                    <h3 className={classes.h3}>{lawyerName} </h3>
                        <div>עו"ד מייצג</div>
                    </div>
                </div>
                <div className={classes.cellInRow}>
                    <CalendarToday className={classes.icon} color="action" fontSize="large" />
                    <div className={classes.cellNoIcon}>
                        <h3 className={classes.h3}>{props.cAction.startDate}</h3>
                        <div>תאריך פתיחת התובענה</div>
                    </div>
                </div>
                <div className={classes.cellInRow}>
                    <Person className={classes.icon} color="action" fontSize="large" />
                    <div className={classes.cellNoIcon}>
                        <h3 className={classes.h3}>{props.cAction.manUser}</h3>
                        <div>מנהל התובענה</div>
                    </div>
                </div>
            </div>
            <div>
                <ManagerMessages messages={props.cAction.manMessages} />
            </div>
        </div>
    );
};


export default actionCardContent;