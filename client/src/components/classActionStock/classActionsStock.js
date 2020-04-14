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



  let sortResultsBy;
  const changeSelectHandler = (event) => {
    alert(event.target.value);
    sortResultsBy = event.target.value;
  }
  return <div>
    <SearchHeader
      title='מאגר תביעות'
      changed={(event) => changeSelectHandler(event)}
      itemsToSelect = {basicProperties}
    />
    <ClassActionResultCards
      sortBy={sortResultsBy}  
      basicProperties = {basicProperties}
    />
  </div>;
};

export default classActionsStock;
