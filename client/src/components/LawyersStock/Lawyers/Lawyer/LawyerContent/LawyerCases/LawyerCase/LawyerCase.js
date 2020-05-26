import React from 'react';
import classes from './LawyerCase.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';

const LawyerCase = (props) => {
    return (
        <div id="case" className={classes.case}>
            <div id="name" className={classes.name}>{props.case.name}</div>
            <Tooltip title={props.case.description}>
                <div id="description" className={classes.description}>{props.case.description}</div>
            </Tooltip>
            <div id="status" className={classes.status}>
                <Icon>star</Icon>
                <div className={classes.statusContent}>{props.case.status}</div>
            </div>
        </div>
    );
}


export default LawyerCase;