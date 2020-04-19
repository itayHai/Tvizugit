import React, { useEffect } from "react";
import ClassAction from "./classAction/classAction";
import { useSelector, useDispatch } from "react-redux";
import { updateClassActions } from "../../../store/actions";
import { dummyData } from '../../../utils/globalConsts';

const ClassActions = (props) => {
  const sortBy = useSelector(state => state.sortBy);
  const stateClassActions = useSelector(state => state.classActions);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(updateClassActions(dummyData));

  }, [dispatch]);

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
  
  const classActions = stateClassActions.sort(compareValues(sortBy)).map((cAction) => {
    return <ClassAction
      classAction={cAction}
      key={cAction.Id} />;
  });

  return (
    <div>{classActions}</div>
  );
};

export default ClassActions;

