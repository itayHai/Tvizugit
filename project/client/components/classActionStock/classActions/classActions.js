import React from "react";
import ClassAction from "./classAction/classAction";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import Modal from "../../modal/modal";
import {
  changeCurAction,
  updateClassActions,
  changeFilter,
  changeSort,
} from "../../../store/classAction";
import UpdateModalTabs from "./classAction/classActionContent/updateModalTabs/updateModalTabs";
import gql from "graphql-tag";
import Spinner from "../../spinner/spinner";

const getClassActionsByParams = (name, categories, hashtags, userId) => {
  return name || categories || hashtags || userId
    ? gql`
        query(
          $name: String
          $categories: [String]
          $hashtags: [String]
          $userId: String
        ) {
          ClassActionQueries {
            classActions(
              name: $name
              categories: $categories
              hashtags: $hashtags
              userId: $userId
            ) {
              id
              name
              description
              category {
                id
                name
                engName
              }
              defendants {
                name
                type {
                  id
                  name
                }
                theme {
                  id
                  name
                }
              }
              messages {
                _id
                title
                date
                content
              }
              users {
                user {
                  id
                  name
                  displayName
                }
                isWaiting
              }
              status
              leadingUser {
                id
                name
                displayName
              }
              representingLawyer {
                id
                name
              }
              openDate
              reasons {
                id
                name
              }
              type {
                id
                name
              }
              winRate {
                id
                idAI
                name
              }
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
              defendants {
                name
                type {
                  id
                  name
                }
                theme {
                  id
                  name
                }
              }
              messages {
                _id
                title
                date
                content
              }
              users {
                user {
                  id
                  name
                  displayName
                }
                isWaiting
              }
              status
              leadingUser {
                id
                name
                displayName
              }
              representingLawyer {
                id
                name
              }
              openDate
              reasons {
                id
                name
              }
              type {
                id
                name
              }
          winRate {
            id
            idAI
            name
          }
              hashtags
            }
          }
        }
      `;
};

const ClassActions = (props) => {
  const filter = useSelector((state) => state.classAction.filter);
  let name = filter.name;
  let categories = filter.categories;
  let hashtags = filter.hashtags;
  let userId = filter.userId;

  const { loading, error, data, refetch } = useQuery(
    getClassActionsByParams(name, categories, hashtags, userId),
    {
      variables: { name, categories, hashtags, userId },
      options: () => ({
        fetchPolicy: 'network-only',
      })
    });

  const sortBy = useSelector((state) => state.classAction.sortBy);
  const stateClassActions = useSelector(
    (state) => state.classAction.classActions
  );
  const currClassAction = useSelector(
    (state) => state.classAction.currClassAction
  );
  const showEditModal = Object.keys(currClassAction).length !== 0;

  const dispatch = useDispatch();

  if (loading) return <Spinner />;
  if (error) console.log(error);

  dispatch(updateClassActions(data.ClassActionQueries.classActions));

  const handleCloseEditAction = () => {
    dispatch(changeCurAction({}));
  };

  const compareValues = (key, order = "asc") => {
    return function innerSort(a, b) {
      let varA = "";
      let varB = "";

      if (key === "category") {
        varA = a[key]["name"].toUpperCase();
        varB = b[key]["name"].toUpperCase();
      } else if (key === "numberOfProsecutors") {
        order = "desc";
        varA = a["users"].length;
        varB = b["users"].length;
      } else {
        varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
      }
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
      return (
        <ClassAction refetch={refetch} classAction={cAction} key={cAction.id} />
      );
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
