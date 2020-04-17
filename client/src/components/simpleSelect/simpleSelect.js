import React from "react";
import classes from './simpleSelect.module.css'
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";

const SimpleSelect = (props) => {
  const itemsOutput = props.items.map((item) => {
    return (
      <MenuItem key={item.key} value={item.key}>
        {item.value}
      </MenuItem>
    );
  });

  return (
    
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.label}>{props.label}</InputLabel>
        <Select value={props.sortBy} onChange={props.changed} label={props.label}>
          {itemsOutput}
        </Select>
      </FormControl>
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

export default connect(mapStateToProps,mapDispatchToProps)(SimpleSelect);
