import React from 'react';
import ClassActionResultCard from './classActionResultCard/classActionResultCard';

const classActionResultCards = props => {
    // Just for QA, supposed to come from porps
    let checkActions = [{
        Id: "1",
        actionName: "אתביעת המאה",
        defendantParty: "שטראוס",
        actionStage: "תוך כדי משפט",
        numberOfProsecutors: "10,000"
    }, {
        Id: "2",
        actionName: "בתביעת המאה",
        defendantParty: "פייסבוק",
        actionStage: "לפני משפט",
        numberOfProsecutors: "2000"
    }];


    const classActions = checkActions.map((cAction) => {
        return <ClassActionResultCard
            classAction={cAction}
            key={cAction.Id}
        />
    });

    return (
        <div>
            {classActions}
        </div>
    );
};


export default classActionResultCards;