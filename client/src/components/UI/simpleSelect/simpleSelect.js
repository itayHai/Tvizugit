import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import classes from './simpleSelect.module.css';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    boxShadow: '0px 2px 6px #00000029',
    fontFamily: 'Segoe UI',
       
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = (props) => {
  const classesStyle = useStyles();

  const itemsOutput = props.items.map((item)=>{
    return <MenuItem  key={item.key} value={item.key}>{item.value}</MenuItem>;

  });

  return (
    <div>
      <FormControl variant="outlined" className={classesStyle.formControl}>
        <InputLabel> 
          {props.label}
        </InputLabel >
        <Select 
          onChange={props.changed}
          label={props.label}
        >
          {itemsOutput}
        </Select>
      </FormControl>
    </div>
  );
}

export default SimpleSelect;
