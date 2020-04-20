import React, { useEffect, useRef } from 'react';
import classes from './addMessage.module.css';
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const AddMessage = (props) => {
    const titleRef = useRef();
    const contentRef = useRef();
    useEffect(() => {
        titleRef.current.focus()
    });
    const saveClick = () => {
        props.saveClick(contentRef.current.value, titleRef.current.value, 2)
    }
    return (
        <div>
            <h1> הוספת הודעה</h1>
            <div className={classes.textFileds}>
                <TextareaAutosize ref={titleRef} placeholder="כותרת הודעה"></TextareaAutosize>
                <TextareaAutosize ref={contentRef} rowsMin={3} placeholder="תוכן ההודעה"></TextareaAutosize>
            </div>
            <Button variant="contained" onClick={props.close}>
                ביטול
      </Button>
            <Button
                className={classes.saveButton}
                onClick={() => saveClick()}
            >הוסף</Button>
        </div>
    );
};

export default AddMessage;