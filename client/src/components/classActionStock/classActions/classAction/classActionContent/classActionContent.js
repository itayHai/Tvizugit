import React from 'react';
import classes from './classActionContent.module.css';
import { Gavel, CalendarToday, Person } from '@material-ui/icons';
import ManagerMessages from '../managerMessages/managerMessages';
import JoinAction from './joinAction/joinAction';
import { dummyUser } from '../../../../../utils/globalConsts';
import { useDispatch } from 'react-redux';
import { updateMessagesAction } from '../../../../../store/classAction';
import DateHandler from '../../../../../utils/dateHandler';
import { useMutation } from "@apollo/react-hooks";
import { classActionsRequest } from '../../../../../utils/requests';

const ClassActionContent = props => {
    const dispatch = useDispatch();
    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer);
    const flatennedUsers = props.cAction.users.map(usr => {
        return {
            isWaiting: usr.isWaiting,
            ...usr.user
        }
    });
    const isUserManager = props.cAction.leadingUser.id === dummyUser.id;
    const isUserInAction = props.cAction.users.find(({ id }) => id === dummyUser.id);
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
                    defendants: props.cAction.defendants,
                    users: flatennedUsers.map(usr =>{return {user: usr.id, isWaiting: usr.isWaiting }}),
                    name: props.cAction.name,
                    category: props.cAction.category.id,
                    leadingUser: props.cAction.leadingUser.id,
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
                    defendants: props.cAction.defendants,
                    users: flatennedUsers.map(usr =>{return {user: usr.id, isWaiting: usr.isWaiting }}),
                    name: props.cAction.name,
                    category: props.cAction.category.id,
                    leadingUser: props.cAction.leadingUser.id,
                    messages: newMessages.map((mes) => { return { title: mes.title, date: new Date(mes.date), content: mes.content } }),
                },
                id: props.cAction.id
            }
        }).then((data) => {
            dispatch(updateMessagesAction(props.cAction, newMessages))
        })
    }

    const showMessages = flatennedUsers.find(usr => usr.id === dummyUser.id && !usr.isWaiting) ?
        <ManagerMessages
            messages={props.cAction.messages}
            isUserManager={isUserManager}
            delMessClick={(message) => removeMessageHandler(message)}
            addMessClick={(message, title) => addMessageHandler(message, title)}
        />: <div>חכה לתשובה</div>;
    const showJoin = flatennedUsers.find(usr => usr.id === dummyUser.id) ? null : <JoinAction classAction={props.cAction}/>
    const lawyerName = props.cAction.lawyer ? props.cAction.lawyer : 'טרם נקבע עו"ד';
    const allHashtags = props.cAction.hashtags.map((tag, index) => {
        return <div className={classes.tag} key={index}>
            {"#" + tag}
        </div>
    })

    return (
        <div>
            <div className={classes.allHashtags}>
                <h2 className={classes.title}>תיאור תובענה:</h2>
                {allHashtags}
            </div>
            {props.cAction.description}
            <div className={classes.joinButton}>
                <div className={classes.infoRow}>
                    <div className={classes.cellInRow}>
                        <Gavel className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <h3 className={classes.h3}>{lawyerName}</h3>
                            <div>עו"ד מייצג</div>
                        </div>
                    </div>
                    <div className={classes.cellInRow}>
                        <CalendarToday className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <h3 className={classes.h3}>
                                <DateHandler date={props.cAction.openDate} />
                            </h3>
                            <div>תאריך פתיחת התובענה</div>
                        </div>
                    </div>
                    <div className={classes.cellInRow}>
                        <Person className={classes.icon} color="action" fontSize="large" />
                        <div className={classes.cellNoIcon}>
                            <h3 className={classes.h3}>{props.cAction.leadingUser.name}</h3>
                            <div>מנהל התובענה</div>
                        </div>
                    </div>
                </div>
                {showJoin}
            </div>
            {showMessages}
        </div >
    );
};


export default ClassActionContent;