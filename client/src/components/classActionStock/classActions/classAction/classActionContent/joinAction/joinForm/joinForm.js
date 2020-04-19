import React from 'react';
import classes from './joinForm.module.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { dummyUser } from '../../../../../../../utils/globalConsts';
import Button from "@material-ui/core/Button";
import AlertUser from '../../../../../../alertUser/alertUser';

const JoinForm = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const isUser = Object.keys(dummyUser).length === 0;
    const noUserDiv = <div>כדי להצטרף לתובענה עלייך להירשם קודם!</div>;

    return (
        <div className={classes.joinForm}>
            <h1> הצטרפות לתובענה</h1>
            {isUser ?
                noUserDiv :
                <div>
                    על מנת להצטרף לתובענה עלייך לדעת כמה דברים:
                <ul className={classes.ul}>
                        <li>עלייך למלא תיאור קצר של המקרה שאתה נפגעת בו</li>
                        <li>לאחר המילוי, יישלח מייל למנהל התובענה, שיאשר את הצטרפותכם לאחר התייעצות עם עורך דין</li>
                        <li>המייל עם התיאור יישלח מהמייל איתו נרשמת</li>
                    </ul>
                    <div className={classes.agree}>
                        <TextareaAutosize rowsMin={3} aria-label="empty textarea" placeholder="תיאור המקרה" />
                        <Button className={classes.JoinButton} onClick={handleClick} >שלח</Button>
                    </div>
                </div>}
            <AlertUser open={open} handleClose={handleClose} message="המייל נשלח בהצלחה!" severity="success" />
        </div>

    );
};

export default JoinForm;