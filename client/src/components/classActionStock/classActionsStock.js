import React from "react";
import SearchHeader from '../searchHeader/searchHeader';
import ClassActions from './classActions/classActions';
import classes from './classActionStock.module.css';
import { propertiesToShow } from '../../utils/globalConsts';

const classActionsStock = (props) => {
  const selectOptions = propertiesToShow[0].classActionPro;
  return <div className={classes.page}>
    <SearchHeader
      className={classes.searchHeader}
      title='מאגר תביעות'
      itemsToSelect={selectOptions}
      showSort="true"
      showSearch="true"
    />
    <ClassActions
    />
  </div>;
};

export default classActionsStock;

