import React from "react";
import ClassAction from "./classAction/classAction";
import { useSelector, useDispatch } from "react-redux";
import Modal from '../../modal/modal';
import { changeCurAction, updateClassActions } from '../../../store/classAction';
import UpdateClassAction from './classAction/classActionContent/updateClassAction/updateClassAction';

const ClassActions = (props) => {
  const sortBy = useSelector(state => state.classAction.sortBy);
  const stateClassActions = useSelector(state => state.classAction.classActions);
  const currClassAction = useSelector(state => state.classAction.currClassAction)
  const showEditModal = Object.keys(currClassAction).length !== 0;
  const dispatch = useDispatch();

  if(error) console.log(error);
    dispatch(updateClassActions(dummyData));

  }, [dispatch]);

  const handleCloseEditAction = () => {
    dispatch(changeCurAction({}))
  }

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
    return (
        <ClassAction
          classAction={cAction}
        key={cAction.id} />
    )
  });

  return (
    <div>
      <Modal
        show={showEditModal}
        onClose={() => handleCloseEditAction()}>
        <UpdateClassAction
          close={() => handleCloseEditAction()}
        />
      </Modal>
      {classActions}
    </div>
  );
};

export default ClassActions;

