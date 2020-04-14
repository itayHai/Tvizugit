import React from 'react';
import ResultCard from '../resultCard/resultCard';

const classActionResultCard = props => {
    let propertiesToShow = [{
        value: "שם התביעה",
        key: "actionName"
    },
    {
        value: "הגוף הנתבע",
        key: "defendantParty"
    },
    {
        value: "שלב התביעה",
        key: "actionStage"
    },
    {
        value: "מספר תובעים",
        key: "numberOfProsecutors"
    }];
   
    return (
        <ResultCard
            propertiesToShow={propertiesToShow}
            classAction={props.classAction}
        />
    );
};

export default classActionResultCard;