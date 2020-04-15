import React from "react";
import ClassActionResultCard from "./classActionResultCard/classActionResultCard";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/actions";

const classActionResultCards = (props) => {
  //TODO: Just for QA, supposed to come from server
  let checkActions = [
    {
      Id: "1",
      actionName: "אתביעת המאה",
      startDate:"15/04/2020",
      manUser:"עידו פרלמן",
      manMessages:[{
        date:"11/11/2018",
        title:"הודעה ראשונה",
        content:"זה תוכן ההודעה הראשונה והשנייה לא תהיה שונה מאוד מזאת, תתכוננו"
      }],
      description: "כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבהכאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122 .כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122. אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122",
      defendantParty: "שטראוס1",
      actionStage: "תוך כדי משפט",
      numberOfProsecutors: 10000
    },
    {
      Id: "2",
      actionName: "בתביעת המאה",
      startDate:"15/04/2020",
      manUser:"עידו פרלמן",
      description: "כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבהכאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122 .כאן נרשום תיאור מאוד מאוד ארוך על התביעה עצמה ונספר מה העילה לתביעה. זה יכול להיות מאוד ארוך וצריך לספר הרבה אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122. אנחנו נסתמך על חוקים הגנת הצרכן סעיף 122",
      defendantParty: "פייסבוק",
      actionStage: "לפני משפט",
      numberOfProsecutors: 2000
    },
  ];

  function compareValues(key, order = "asc") {
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

  const classActions = checkActions.sort(compareValues(props.sortBy)).map((cAction) => {
    return <ClassActionResultCard classAction={cAction} key={cAction.Id} />;
  });

  return <div>{classActions}</div>;
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
)(classActionResultCards);
