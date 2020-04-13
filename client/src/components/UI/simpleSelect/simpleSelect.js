import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import './simpleSelect.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
   
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = (props) => {
  const classes = useStyles();
  const items = [];

  for ( let item in props.items ) {
    items.push(
        {
            value: item,
            label: props.items[item]
        }
    );
}

  const itemsOutput = items.map((item)=>{
    return <MenuItem  key={item.value} value={item.value}>{item.label}</MenuItem>;

  });

  return (
    <div>
      <FormControl variant="outlined" className="control" style={{marginLeft:'10px',backgroundColor: '#FFF'}}>
        <InputLabel id="demo-simple-select-outlined-label"> 
          {props.label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onChange={props.changed}
          label={props.label}
        >
          {itemsOutput}
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleSelect;
