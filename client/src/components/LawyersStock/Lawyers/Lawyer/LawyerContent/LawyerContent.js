import React from 'react';
import classes from '../../../../classActionStock/classActions/classAction/classActionContent/classActionContent.module.css';
import { Room, Email, Phone } from '@material-ui/icons';
import { dummyUser } from '../../../../../utils/globalConsts';
import { useDispatch } from 'react-redux';
import { removeMessageAction, addMessageAction } from '../../../../../store/classAction';
import LawyerCases from './LawyerCases/LawyerCases';

const LawyersContent = (props) => {
    return (
        <div>
        <h2 className={classes.title}>תיאור המשרד:</h2>
        {props.lawyer.description}
        <div className={classes.joinButton}>
            <div className={classes.infoRow}>
                <div className={classes.cellInRow}>
                    <Room className={classes.icon} color="action" fontSize="large" />
                    <div className={classes.cellNoIcon}>
                        <h3 className={classes.h3}>{props.lawyer.address}</h3>
                        <div>כתובת</div>
                    </div>
                </div>
                <div className={classes.cellInRow}>
                    <Email className={classes.icon} color="action" fontSize="large" />
                    <div className={classes.cellNoIcon}>
                        <h3 className={classes.h3}>{props.lawyer.email}</h3>
                        <div>מייל ליצירת קשר</div>
                    </div>
                </div>
                <div className={classes.cellInRow}>
                    <Phone className={classes.icon} color="action" fontSize="large" />
                    <div className={classes.cellNoIcon}>
                        <h3 className={classes.h3}>{props.lawyer.phone}</h3>
                        <div>טלפון ליצירת קשר</div>
                    </div>
                </div>
            </div>
        </div>
        <h2 className={classes.title}>תובענות שהמשרד ייצג בפלטפורמת תביצוגית:</h2>
        {props.lawyer.classactions > 0 ? 
            <LawyerCases cases={props.lawyer.classactions}/> : 
            <h3>לא קיימות תובענות במאגר</h3>}
    </div >        
    );
};

export default LawyersContent;