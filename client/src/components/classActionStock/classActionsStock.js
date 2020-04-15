import React from "react";
import SearchHeader from '../UI/searchHeader/searchHeader';
import ClassActionResultCards from '../classActionResultCards/classActionResultCards';

const classActionsStock = (props) => {

  let basicProperties = [{
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

  
  return <div>
    <SearchHeader
      title='מאגר תביעות'
      itemsToSelect = {basicProperties}
    />
    <ClassActionResultCards
      basicProperties = {basicProperties}
    />
  </div>;
};

export default classActionsStock;
