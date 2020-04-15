import React from "react";
import SearchHeader from '../searchHeader/searchHeader';
import ClassActionResultCards from './classActionResultCards/classActionResultCards';
import classes from './classActionStock.module.css';

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


  return <div className={classes.page}>
    <SearchHeader
      title='מאגר תביעות'
      itemsToSelect={basicProperties}
    />
    <ClassActionResultCards
      basicProperties={basicProperties}
    />
  </div>;
};

export default classActionsStock;
