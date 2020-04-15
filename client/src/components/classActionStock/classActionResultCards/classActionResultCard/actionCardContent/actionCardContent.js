import React from 'react';
import classes from './actionCardContent.module.css';
import { Gavel, CalendarToday, Person } from '@material-ui/icons';
import ManagerMessages from '../managerMessages/managerMessages';

const actionCardContent = props => {
    const lawyerName = props.cAction.lawyer ? <h1>props.cAction.lawyer</h1> : <h3>טרם נקבע עו"ד</h3>;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "space-around", paddingLeft: "900px" }}>
                <div style={{ display: 'flex', flexDirection: "row" }}>
                    <Gavel className={classes.icon} color="action" fontSize="large" />
                    <div>
                        {lawyerName}
                        <div>עו"ד מייצג</div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: "row" }}>
                    <CalendarToday className={classes.icon} color="action" fontSize="large" />
                    <div>
                        <h3>{props.cAction.startDate}</h3>
                        <div>תאריך פתיחת התובענה</div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: "row" }}>
                    <Person className={classes.icon} color="action" fontSize="large" />
                    <div>
                        <h3>{props.cAction.manUser}</h3>
                        <div>מנהל התובענה</div>
                    </div>
                </div>
            </div>
            <div>
                <h3>הודעות</h3>
                <ManagerMessages messages={props.cAction.manMessages}/>
            </div>
        </div>
    );
};


export default actionCardContent;