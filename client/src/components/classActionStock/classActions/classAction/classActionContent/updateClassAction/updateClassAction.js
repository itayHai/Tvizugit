import React, { useEffect, useRef } from 'react';
import classes from './updateClassAction.module.css';
import Button from "@material-ui/core/Button";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const UpdateClassAction = props => {
    const descriptionRef = useRef();
    useEffect(() => {
        descriptionRef.current.focus()
    });
    return (
        <div className={classes.updateDesc}>
            <TextareaAutosize className={classes.textBox} ref={descriptionRef} defaultValue={props.defaultDesc}></TextareaAutosize>
            <div className={classes.buttons}>
                <Button
                    className={classes.saveButton}
                    onClick={() => props.saveClick(props.classAction)}
                >שמור</Button>
                <Button variant="contained" onClick={props.close}>
                    ביטול
                </Button>
            </div>
        </div>
    );
};

export default UpdateClassAction;