import React from 'react';
import classes from './classActionContent.module.css';
import { Gavel, CalendarToday, Person, Help, TextFields } from '@material-ui/icons';
import ManagerMessages from '../managerMessages/managerMessages';
import JoinAction from './joinAction/joinAction';
import { useDispatch, useSelector } from 'react-redux';
import { updateMessagesAction } from '../../../../../store/classAction';
import DateHandler from '../../../../../utils/dateHandler';
import { useMutation } from "@apollo/react-hooks";
import { classActionsRequest } from '../../../../../utils/requests';
import Chip from "@material-ui/core/Chip";


const ClassActionContent = props => {
    const dispatch = useDispatch();
    const loggedInUser = useSelector((state) => state.user.loggedInUser);

    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer);
    const flatennedUsers = props.cAction.users.map(usr => {
        return {
            isWaiting: usr.isWaiting,
            ...usr.user
        }
    });
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
                    defendants: props.cAction.defendants.map(def => { return { name: def.name, type: def.type, theme: def.theme } }),
                    users: flatennedUsers.map(usr => { return { user: usr.id, isWaiting: usr.isWaiting } }),
                    name: props.cAction.name,
                    category: props.cAction.category.id,
                    leadingUser: props.cAction.leadingUser.id,
                    reasons: props.cAction.reasons.map(res => res.id),
                    type: props.cAction.type,
                    messages: messages.map((mes) => { return { title: mes.title, date: new Date(mes.date), content: mes.content } }),
                },
                id: props.cAction.id
            }
        }).then((data) => {
            const messagesServer = data.data.ClassActionMutation.classAction.messages;
            const newIdMessages = { ...newMessage, id: messagesServer[messagesServer.length - 1].id };
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
    const showPendingJoin = flatennedUsers.find(usr => usr.id === loggedInUser.id && usr.isWaiting) ? <h3 className = {classes.pending}>בקשתך להצטרפות בבדיקה</h3> : null;
    const allHashtags = props.cAction.hashtags.map((tag, index) => {
        return <Chip label= {"#" + tag} key={index} className={classes.tag}/>
    })
    return (
        <div>
            <div className={classes.allHashtags}>
                <h2 className={classes.title}>תיאור תובענה:</h2>
            </div>

            {props.cAction.description}
            <br></br>
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