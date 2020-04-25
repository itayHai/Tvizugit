import React, { useRef } from 'react';
import classes from './addMessage.module.css';
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const AddMessage = (props) => {
    const titleRef = useRef();
    const contentRef = useRef();
    return (
        <div className={classes.newMessage}>
            <div className={classes.textFileds}>
                <TextareaAutosize autoFocus className={[classes.textBox, classes.titleTextBox].join(' ')} rowsMin={1} ref={titleRef} placeholder="כותרת הודעה"></TextareaAutosize>
                <TextareaAutosize className={classes.textBox} ref={contentRef} rowsMin={3} placeholder="תוכן ההודעה"></TextareaAutosize>
            </div>
            <div className={classes.buttons}>
                <Button
                    className={classes.saveButton}
                    onClick={() => props.saveClick(contentRef.current.value, titleRef.current.value)}
                >הוסף</Button>
                <Button variant="contained" onClick={props.close}>
                    ביטול
            </Button>
            </div>
        </div>
    );
};

export default AddMessage;