import React from 'react'
import ResultBanner from '../../resultBanner/resultBanner';
import { propertiesToShow, resultTypes } from '../../../utils/globalConsts';
import ReportedClassActionContent from './ReportedClassActionContent/reportedClassActionContent';

const ReportedClassAction = (props) => {
    const basicProperties = propertiesToShow[0].classActionPro;
    const selectedProperties = basicProperties.map((bProp) => {
        let content = props.classAction[bProp.engName];
        if (bProp.engName === "defendants") {
            content = props.classAction[bProp.engName][0].name;
        }
        if (bProp.engName === "numberOfProsecutors") {
            const insideUsers = props.classAction["users"].filter(usr => {
                return !usr.isWaiting
            })
            content = insideUsers.length;
        }
        if (bProp.engName === "category") {
            content = props.classAction[bProp.engName].name;
        }
        return { ...bProp, content: content };
    });


    return (
        <ResultBanner
            refetch={props.refetch}
            entityId={props.classAction.id}
            entityType={resultTypes.REPORTED_CLASS_ACTION}
            selectedProperties={selectedProperties}
            cancelReport={props.cancelReport}
        >
            <ReportedClassActionContent cAction={props.classAction} />
        </ResultBanner>
    )
}

export default ReportedClassAction;