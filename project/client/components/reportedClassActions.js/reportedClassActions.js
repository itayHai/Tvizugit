import React, { useState, useEffect } from 'react'
import classes from './reportedClassActions.module.css'
import { useLazyQuery } from "@apollo/react-hooks"
import classActionsRequest from "../../utils/requests/classActionsRequests"
import Spinner from "../spinner/spinner";
import ReportedClassAction from './ReportedClassAction/reportedClassAction';
import AlertUser from '../alertUser/alertUser';

const ReportedClassActions = (props) => {
    const [getReportedClassActions, {loading, error, data ,refetch}] = useLazyQuery(classActionsRequest.GET_REPORTED,{
        fetchPolicy: 'network-only',
      });
    const [reportedClassActions, setReportedClassActions] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [unreportAlertOpen, setUnreportAlert] = useState(false);

    useEffect(() => {
        getReportedClassActions()
    }, [])

    if (data && !dataLoaded) {
        setDataLoaded(true)
        setReportedClassActions(data.ClassActionQueries.reportedClassActions)
    }

    if (loading || !dataLoaded ) {
        return <Spinner />
    }
    if (error) {
        console.log(error)
    }

    const handleCancelReport = (classActionId) => {
        setReportedClassActions(reportedClassActions.filter((currCA) => currCA.id !== classActionId))
        setUnreportAlert(true);
    }

    const reportedCAElements = reportedClassActions.length !== 0 ? reportedClassActions.map(
        (currClassAction) => <ReportedClassAction key={currClassAction.id} refetch={refetch} cancelReport={handleCancelReport} classAction={currClassAction} />) :
        <div>
            <h2>אין תובענות מדווחות</h2>
        </div>


    return (
        <div className={classes.page}>
            <h1 className={classes.title}>תובענות מדווחות</h1>
            {reportedCAElements}
          <AlertUser open={unreportAlertOpen} handleClose={() => setUnreportAlert(false)} message="הדיווח נדחה" severity="success" />

        </div>)
}

export default ReportedClassActions