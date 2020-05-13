import React from "react";
import SearchHeader from '../searchHeader/searchHeader';
import Lawyers from './Lawyers/Lawyers';
import SearchBar from '../SearchBar/SearchBar'

const LawyersStock = (props) => {
  const selectOptions = ['שם המשרד', 'שנות ניסיון'];
  return <div >
    <SearchHeader
      title='מאגר עורכי הדין'
      itemsToSelect={selectOptions}
    />
    <Lawyers
    />
  </div>;
};

export default LawyersStock;
