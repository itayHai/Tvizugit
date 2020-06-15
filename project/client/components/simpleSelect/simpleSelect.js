import React from "react";
import classes from "./simpleSelect.module.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useSelector } from "react-redux";

const SimpleSelect = (props) => {
  const sortBy = useSelector((state) => state.classAction.sortBy);

  const itemsOutput = props.items.map((item) => {
    return (
      <MenuItem key={item.engName} value={item.engName}>
        {item.name}
      </MenuItem>
    );
  });

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel className={classes.label}>{props.label}</InputLabel>
      <Select value={sortBy} onChange={props.changed} label={props.label}>
        {itemsOutput}
      </Select>
    </FormControl>
  );
};

export default SimpleSelect;
