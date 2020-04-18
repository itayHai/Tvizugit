import React from 'react';
import classes from './classActionContent.module.css';
import { Gavel, CalendarToday, Person } from '@material-ui/icons';
import ManagerMessages from '../managerMessages/managerMessages';
import JoinAction from './joinAction/joinAction';
import {dummyUser} from '../../../../../utils/globalConsts';

const classActionContent = props => {
    const userInAction = props.cAction.users?.find(({Id}) => Id === dummyUser.Id) || 
                         props.cAction.managerUser?.Id === dummyUser.Id;
    const messagesOrJoin = userInAction ? <ManagerMessages messages={props.cAction.manMessages} /> :
                                          <JoinAction></JoinAction>;
    const lawyerName = props.cAction.lawyer ? props.cAction.lawyer : 'טרם נקבע עו"ד';
    return (
        <div>
            <h1 >תיאור תובענה:</h1>
            {props.cAction.description}
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
                { messagesOrJoin }
            </div>
        </div>
    );
};


export default classActionContent;