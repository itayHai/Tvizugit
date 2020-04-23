import React from 'react';
import classes from './classActionContent.module.css';
import { Gavel, CalendarToday, Person, Edit } from '@material-ui/icons';
import ManagerMessages from '../managerMessages/managerMessages';
import JoinAction from './joinAction/joinAction';
import { dummyUser } from '../../../../../utils/globalConsts';
import { useDispatch } from 'react-redux';
import { removeMessageAction, addMessageAction } from '../../../../../store/actions';
import { Button } from "@material-ui/core";
import { removeMessageAction, addMessageAction } from '../../../../../store/actions';

const ClassActionContent = props => {
    const dispatch = useDispatch();

    const isUserManager = props.cAction.managerUser?.Id === dummyUser.Id;
    const userInAction = props.cAction.users?.find(({ Id }) => Id === dummyUser.Id);
    const isMessages = userInAction ? <ManagerMessages
        messages={props.cAction.manMessages}
        isUserManager={isUserManager}
        delMessClick={(message) => dispatch(removeMessageAction(props.cAction, message))}
        addMessClick={(message, title) => dispatch(addMessageAction(message, title, props.cAction))}
    /> : null;
    const isJoin = userInAction ? null : <JoinAction />;
    };
    const handleCloseChangeDesc = () => {
        setchangeDesc(false);
    };
    const handleSaveDescClick = (desc) => {
        handleCloseChangeDesc();
        // dispatch(updateActionDesc(props.cAction, desc))
    }
    const dispatch = useDispatch();

    const isUserManager = props.cAction.managerUser?.Id === dummyUser.Id;
    const userInAction = props.cAction.users?.find(({ Id }) => Id === dummyUser.Id) ||
        isUserManager;
    const isMessages = userInAction ? <ManagerMessages
        messages={props.cAction.manMessages}
        isUserManager={isUserManager}
        delMessClick={(message) => dispatch(removeMessageAction(props.cAction, message))}
        addMessClick={(message, title) => dispatch(addMessageAction(message, title, props.cAction))}
    /> : null;
    const isJoin = userInAction ? null : <JoinAction />;
    const lawyerName = props.cAction.lawyer ? props.cAction.lawyer : 'טרם נקבע עו"ד';

    return (
        <div>
            <h2 className={classes.title}>תיאור תובענה:</h2>
            {/* {isUserManager ? <Button
                    onClick={handleOpenChangeDesc}
                    startIcon={<Edit fontSize="large" />}
                >
                    עריכה
                </Button> : null} */}
                </h2>
            {/* {changeDesc ? <UpdateActionDescription
                close={handleCloseChangeDesc}
                saveClick={(desc) => handleSaveDescClick(desc)}
                defaultDesc={props.cAction.description} /> : */}
                {props.cAction.description}
            <div className={classes.joinButton}>
                <div className={classes.infoRow}>
                    <div className={classes.cellInRow}>
                        <Gavel className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <div>
                                <h3 className={classes.h3}>{lawyerName}</h3>
                            </div>
                                    onClick={handleOpenChangelawyer}
                                    startIcon={<Edit fontSize="large" />}
                                >
                                    עריכה
                </Button> : null} */}
                            </h3>
                            {/* {changeLawyer ? <UpdateLawyer
                                close={handleCloseChangelawyer}
                                saveClick={(desc) => handleSaveDescClick(desc)}
                                defaultDesc={props.cAction.description} /> :
                                null} */}
                        </div>
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
                            <h3 className={classes.h3}>{props.cAction.managerUser.name}</h3>
                            <div>מנהל התובענה</div>
                        </div>
                    </div>
                {isJoin}
                </div>
                {isJoin}
            {isMessages}
        </div>
    );
};


export default ClassActionContent;