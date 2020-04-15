import React from "react";
import { Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import SimpleSelect from "../simpleSelect/simpleSelect";

import classes from "./searchHeader.module.css";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const searchHeader = (props) => {

  return (
    <div className={classes.searchHeader}>
      <h1 className={classes.searchTitle}>{props.title}</h1>
      <div className={classes.buttonRow}>
          <SimpleSelect
            className={classes.select}
            label="מיון"
            items={props.itemsToSelect}
            changed={(event) => props.onSortChanged(event.target.value)}
          />
        <Button
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "0.5px solid rgba(0, 0, 0, 0.331)",
            margin: "6px",
          }}
          className={classes.filterButton}
          startIcon={<SortIcon />}
        >
          סינון
        </Button>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(searchHeader);
