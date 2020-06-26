import React from 'react'
import classes from './reportedClassActionContent.module.css'

const ReportedClassActionContent = (props) => {

    return (
        <div>
            <h2>פרטי הדיווח:</h2>
            <div className={classes.message}>
                {props.cAction.reportMessage}
            </div>
        </div >
    )
}

export default ReportedClassActionContent