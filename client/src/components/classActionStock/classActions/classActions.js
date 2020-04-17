import React from "react";
import ClassAction from "./classAction/classAction";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";
import { dummyData } from '../../../utils/globalConsts';

const classActions = (props) => {

  const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order === "desc" ? comparison * -1 : comparison;
    };
  }

  const classActions = dummyData.sort(compareValues(props.sortBy)).map((cAction) => {
    return <ClassAction
      classAction={cAction}
      key={cAction.Id} />;
  });

  return (
    <div>{classActions}</div>
  );
};

const mapStateToProps = (state) => {
  return {
    sortBy: state.sortBy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortChanged: (sortBy) =>
      dispatch({ type: actionTypes.CHANGED_SORT, sortBy: sortBy }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(classActions);

