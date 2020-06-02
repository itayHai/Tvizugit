import React from "react";
import SearchHeader from '../searchHeader/searchHeader';
import Lawyers from './Lawyers/Lawyers';
import classes from '../classActionStock/classActionStock.module.css';

const LawyersStock = (props) => {
  const selectOptions = ['שם המשרד', 'שנות ניסיון'];
  return <div className={classes.page}>
    <SearchHeader
      title='מאגר עורכי הדין'
      itemsToSelect={selectOptions}
    />
    <Lawyers
    />
  </div>;
};

export default LawyersStock;
