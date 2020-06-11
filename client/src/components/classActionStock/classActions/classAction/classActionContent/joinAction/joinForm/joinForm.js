import React, { useState } from 'react';
import classes from './joinForm.module.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from "@material-ui/core/Button";
import AlertUser from '../../../../../../alertUser/alertUser';
import { useMutation } from "@apollo/react-hooks";
import { classActionsRequest } from '../../../../../../../utils/requests';
import { useSelector } from 'react-redux';

const JoinForm = (props) => {
    const [open, setOpen] = useState(false);
    const classAction = { ...props.classAction };
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer);

    const handleClick = () => {
        setOpen(true);
        classAction.users.push({ user: { id: loggedInUser.id }, isWaiting: Boolean('true') });
        updateClassActionServer({
            variables:
            {
                classAction:
                {
                    defendants: classAction.defendants.map(def => { return { name: def.name, type: def.type, theme: def.theme } }),
                    users: classAction.users.map(usr => { return { user: usr.user.id, isWaiting: usr.isWaiting } }),
                    hashtags: classAction.hashtags,
                    name: classAction.name,
                    description: classAction.description,
                    category: classAction.category.id,
                    status: classAction.status,
                    reason: classAction.reason,
                    type: classAction.type,
                    leadingUser: classAction.leadingUser.id,
                },
                id: classAction.id
            }
        })
    };

    const handleClose = () => {
        setOpen(false);
    };
    const isUser = Object.keys(loggedInUser).length === 0;

    return (
        <div className={classes.joinForm}>
            <h1> הצטרפות לתובענה</h1>
            {isUser ?
            <div>
                <h3> היי, על מנת להצטרף לתביעה אנחנו רוצים קודם להכיר אותך</h3>
                <h4>זה די פשוט, לחץ על "כניסה" בצד שמאל למעלה</h4>
                <Button 
                onClick={() => props.close()}
                 className={classes.gotItButton}>הבנתי!</Button> 
                </div>:
                <div>
                    על מנת להצטרף לתובענה עלייך לדעת כמה דברים:
                <ul className={classes.intructions}>
                        <li>עלייך למלא תיאור קצר של המקרה שאתה נפגעת בו</li>
                        <li>לאחר המילוי, יישלח מייל למנהל התובענה, שיאשר את הצטרפותכם לאחר התייעצות עם עורך דין</li>
                        <li>המייל עם התיאור יישלח מהמייל איתו נרשמת</li>
                    </ul>
                    <div className={classes.agree}>
                        <TextareaAutosize className={classes.textBox} rowsMin={3} aria-label="empty textarea" placeholder="תיאור המקרה" />
                        <Button className={classes.JoinButton} onClick={handleClick} >שלח</Button>
                    </div>
                </div>}
            <AlertUser open={open} handleClose={handleClose} message="המייל נשלח בהצלחה!" severity="success" />
        </div>

    );
};

export default JoinForm;