import React from "react";
import ClassAction from "./classAction/classAction";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import Modal from "../../modal/modal";
import { classActionsRequest } from "../../../utils/requests";
import {
  changeCurAction,
  updateClassActions,
  changeActionBeforeSave
} from "../../../store/classAction";
import UpdateModalTabs from "./classAction/classActionContent/updateModalTabs/updateModalTabs";
import { useParams } from "react-router";
import gql from "graphql-tag";

const getClassActionsByParams = (params) => {
  return params
    ? gql`
        ClassActionQueries  {
            classActions(name: $name) {
              id
              name
              description
              category {
                name
                engName
              }
              defendants
              messages {
                id
                title
                date
                content
              }
              users {
                id
                name
              }
              status
              leadingUser {
                id
                name
              }
              openDate
              successChances
              hashtags
            }
          }
        }
      `
    : gql`
        {
          ClassActionQueries {
            classActions {
              id
              name
              description
              category {
                id
                name
                engName
              }
              defendants
              messages {
                id
                title
                date
                content
              }
              users {
                user{
                id
                name
                }
                isWaiting
              }
              status
              leadingUser {
                id
                name
              }
              openDate
              successChances
              hashtags
            }
          }
        }
      `;
};

const ClassActions = (props) => {
  let { ids } = useParams();
  const { loading, error, data } = useQuery(
    getClassActionsByParams(ids), { variables: { ids }, }
  );

  const sortBy = useSelector((state) => state.classAction.sortBy);
  const stateClassActions = useSelector((state) => state.classAction.classActions);
  const currClassAction = useSelector(
    (state) => state.classAction.currClassAction
  );
  const showEditModal = Object.keys(currClassAction).length !== 0;

  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) console.log(error);

  if (!ids && stateClassActions.length === 0) {
    dispatch(updateClassActions(data.ClassActionQueries.classActions));
  }

  const handleCloseEditAction = () => {
    dispatch(changeActionBeforeSave())
    dispatch(changeCurAction({}));
  };

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
  };
  const classActions = stateClassActions
    .sort(compareValues(sortBy))
    .map((cAction) => {
      return <ClassAction classAction={cAction} key={cAction.id} />;
    });

  return (
    <div>
      <Modal show={showEditModal} onClose={() => handleCloseEditAction()}>
        <UpdateModalTabs close={() => handleCloseEditAction()} />
      </Modal>

      {stateClassActions.length === 0 ? "לא נמצאו תביעות בחיפוש" : ""}
      {classActions}
    </div>
  );
};

export default ClassActions;
