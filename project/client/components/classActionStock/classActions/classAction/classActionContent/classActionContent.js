import React, { useState } from 'react';
import classes from './classActionContent.module.css';
import { Gavel, CalendarToday, Person, Help, TextFields } from '@material-ui/icons';
import ManagerMessages from '../managerMessages/managerMessages';
import JoinAction from './joinAction/joinAction';
import { useDispatch, useSelector } from 'react-redux';
import { updateMessagesAction, updateClassAction, changeCurAction } from '../../../../../store/classAction';
import DateHandler from '../../../../../utils/dateHandler';
import { useMutation, useLazyQuery } from "@apollo/react-hooks";
import { classActionsRequest } from '../../../../../utils/requests';
import Chip from "@material-ui/core/Chip";
import { Button } from '@material-ui/core';
import AlertUser from '../../../../alertUser/alertUser';


const ClassActionContent = props => {
    const dispatch = useDispatch();
    const [predicted, setPredicted] = useState(false)
    const [predictedAlertOpen, setPredictedAlert] = useState(false)

    
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const [predictWinRate, { loading, error, data, refetch }] = useLazyQuery(classActionsRequest.PREDICT, {
        fetchPolicy: 'network-only',
    });
    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer);

    const flatennedUsers = props.cAction.users.map(usr => {
        return {
            isWaiting: usr.isWaiting,
            ...usr.user
        }
    });

    if (data && !predicted) {
        updateClassActionServer({
            variables:
            {
                classAction:
                {
                    defendants: props.cAction.defendants.map(def => { return { name: def.name, type: def.type.id, theme: def.theme.id } }),
                    users: flatennedUsers.map(usr => { return { user: usr.id, isWaiting: usr.isWaiting } }),
                    name: props.cAction.name,
                    category: props.cAction.category.id,
                    leadingUser: props.cAction.leadingUser.id,
                    reasons: props.cAction.reasons.map(res => res.id),
                    type: props.cAction.type.id,
                    winRate: data.PredicationQuery.predict.id
                },
                id: props.cAction.id
            }
        }).then((data) => {
            dispatch(updateClassAction(data.data.ClassActionMutation.classAction));
            dispatch(changeCurAction({}));
            setPredictedAlert(true);
        });
        setPredicted(true);
    }
    const isUserManager = props.cAction.leadingUser.id === loggedInUser.id;
    const addMessageHandler = (message, title) => {
        var todayDate = new Date();
        const newMessage = {
            date: todayDate,
            title: title,
            content: message,
        };
        const messages = [...props.cAction.messages];
        messages.push(newMessage);
        updateClassActionServer({
            variables:
            {
                classAction:
                {
                    defendants: props.cAction.defendants.map(def => { return { name: def.name, type: def.type.id, theme: def.theme.id } }),
                    users: flatennedUsers.map(usr => { return { user: usr.id, isWaiting: usr.isWaiting } }),
                    name: props.cAction.name,
                    category: props.cAction.category.id,
                    leadingUser: props.cAction.leadingUser.id,
                    reasons: props.cAction.reasons.map(res => res.id),
                    type: props.cAction.type.id,
                    messages: messages.map((mes) => { return { title: mes.title, date: new Date(mes.date), content: mes.content } }),
                },
                id: props.cAction.id
            }
        }).then((data) => {
            const messagesServer = data.data.ClassActionMutation.classAction.messages;
            const newIdMessages = { ...newMessage, _id: messagesServer[messagesServer.length - 1]._id };
            const newMessages = [...props.cAction.messages];
            newMessages.push(newIdMessages);
            dispatch(updateMessagesAction(props.cAction, newMessages))
        })
    }

    const removeMessageHandler = (message) => {
        let newMessages = [...props.cAction.messages];
        newMessages = newMessages.filter(mes => mes !== message);
        updateClassActionServer({
            variables:
            {
                classAction:
                {
                    defendants: props.cAction.defendants.map(def => { return { name: def.name, type: def.type, theme: def.theme } }),
                    users: flatennedUsers.map(usr => { return { user: usr.id, isWaiting: usr.isWaiting } }),
                    name: props.cAction.name,
                    category: props.cAction.category.id,
                    leadingUser: props.cAction.leadingUser.id,
                    reasons: props.cAction.reasons.map(res => res.id),
                    type: props.cAction.type,
                    messages: newMessages.map((mes) => { return { title: mes.title, date: new Date(mes.date), content: mes.content } }),
                },
                id: props.cAction.id
            }
        }).then((data) => {
            dispatch(updateMessagesAction(props.cAction, newMessages))
        })
    }
    const defendantsNames = props.cAction.defendants.map(def => def.name).join(', ');
    const reasonsNames = props.cAction.reasons.map(res => res.name).join(', ');
    const showMessages = flatennedUsers.find(usr => usr.id === loggedInUser.id && !usr.isWaiting) ?
        <ManagerMessages
            messages={props.cAction.messages}
            isUserManager={isUserManager}
            delMessClick={(message) => removeMessageHandler(message)}
            addMessClick={(message, title) => addMessageHandler(message, title)}
        /> : null;
    const showJoin = flatennedUsers.find(usr => usr.id === loggedInUser.id) ? null : <JoinAction classAction={props.cAction} />
    const showPendingJoin = flatennedUsers.find(usr => usr.id === loggedInUser.id && usr.isWaiting) ? <h3 className={classes.pending}>בקשתך להצטרפות בבדיקה</h3> : null;
    const allHashtags = props.cAction.hashtags.map((tag, index) => {
        return <Chip label={"#" + tag} key={index} className={classes.tag} />
    })
    return (
        <div>
            <AlertUser open={predictedAlertOpen} handleClose={() => setPredictedAlert(false)} message="יש תוצאה! סקרן? גם אנחנו, תרענן את העמוד ותוכל לצפות בנתונים החדשים" severity="success" />
            {isUserManager && (props.cAction.winRate === null) &&
                <div>
                    <h5>
                        האם ברצונך שהמערכת תנסה לנבא עבורך מה טווח הזכייה הצפוי? (על סמך מאגר תביעות עבר)
                    </h5>
                    <Button size="small" variant="contained" onClick={() => predictWinRate({ variables: { id: props.cAction.id } })}>כן, בדוק ושמור עבורי את טווח הזכייה</Button>
                </div>
            }
            <div className={classes.allHashtags}>
                <h2 className={classes.title}>תיאור תובענה:</h2>
            </div>

            {props.cAction.description}
            <br></br>
            {props.cAction.winRate &&
                <div>
                    <h2 className={classes.title}>טווח הזכייה המשוער של המערכת הוא {props.cAction.winRate.name} ש"ח</h2>
                </div>
            }

            <div>{allHashtags}</div>

            <h3>נתבעים: </h3>
            {defendantsNames}
            <h3>עילות התביעה: </h3>
            {reasonsNames}
            <div className={classes.joinButton}>
                <div className={classes.infoRow}>
                    <div className={classes.cellInRow}>
                        <Gavel className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <h3 className={classes.infoCell}>{props.cAction.representingLawyer ? props.cAction.representingLawyer.name : 'טרם נקבע משרד מייצג'}</h3>
                            <div>משרד עו"ד מייצג</div>
                        </div>
                    </div>
                    <div className={classes.cellInRow}>
                        <CalendarToday className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <h3 className={classes.infoCell}>
                                <DateHandler date={props.cAction.openDate} />
                            </h3>
                            <div>תאריך פתיחת התובענה</div>
                        </div>
                    </div>
                    <div className={classes.cellInRow}>
                        <Person className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <h3 className={classes.infoCell}>{props.cAction.leadingUser.displayName}</h3>
                            <div>מנהל התובענה</div>
                        </div>
                    </div>

                    <div className={classes.cellInRow}>
                        <TextFields className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <h3 className={classes.infoCell}>{props.cAction.type.name}</h3>
                            <div>סוג התביעה</div>
                        </div>
                    </div>
                </div>
                {showJoin}
                {showPendingJoin}
            </div>
            {showMessages}
        </div >
    );
};


export default ClassActionContent;