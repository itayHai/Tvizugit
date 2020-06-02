import React, { useState, useEffect } from 'react'
import classes from './reportedClassActions.module.css'
import { useLazyQuery } from "@apollo/react-hooks"
import classActionsRequest from "../../utils/requests/classActionsRequests"
import Spinner from "../spinner/spinner";
import ReportedClassAction from './ReportedClassAction/reportedClassAction';

const ReportedClassActions = (props) => {
    const [getReportedClassActions, { loading, error, data }] = useLazyQuery(classActionsRequest.GET_REPORTED);
    const [reportedClassActions, setReportedClassActions] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        getReportedClassActions()
    }, [])

    if (data && !dataLoaded) {
        setDataLoaded(true)
        setReportedClassActions(data.ClassActionQueries.reportedClassActions)
    }

    if (loading || !dataLoaded) {
        return <Spinner />
    }
    if (error) {
        console.log(error)
    }

    const handleCancelReport = (classActionId) => {
        setReportedClassActions(reportedClassActions.filter((currCA) => currCA.id !== classActionId))
    }

    

    const reportedCAElements = reportedClassActions.length !== 0 ? reportedClassActions.map(
        (currClassAction) => <ReportedClassAction cancelReport={handleCancelReport} classAction={currClassAction} />) :
        <div>
            <h2>אין תובענות מדווחות</h2>
        </div>


    return (
        <div className={classes.page}>
            <h1 className={classes.title}>תובענות מדווחות</h1>
            {reportedCAElements}
        </div>)
}

export default ReportedClassActions