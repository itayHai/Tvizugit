import React from "react";
import SearchHeader from '../searchHeader/searchHeader';
import ClassActionResultCards from './classActionResultCards/classActionResultCards';
import classes from './classActionStock.module.css';
import { propertiesToShow } from '../../utils/globalConsts';

const classActionsStock = (props) => {
  
  return <div className={classes.page}>
    <SearchHeader
      title='מאגר תביעות'
      itemsToSelect={propertiesToShow.find(m => m.name === "classAction").classActionPro}
    />
    <ClassActionResultCards
      basicProperties={propertiesToShow.find(m => m.name === "classAction").classActionPro}
    />
  </div>;
};

export default classActionsStock;
