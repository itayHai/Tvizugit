import React from "react";
import { Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import SimpleSelect from "../simpleSelect/simpleSelect";

import classes from "./searchHeader.module.css";

const searchHeader = (props) => {

    


  return (
    <div className={classes.searchHeader}>
      <h1 className={classes.searchTitle}>{props.title}</h1>
      <div className={classes.buttonRow}>
        <SimpleSelect
          className={classes.select}
          label="מיון"
          items={props.itemsToSelect}
          changed = {props.changed}
        />
  
        <Button style={{display:'flex',justifyContent:'space-around',border:'0.5px solid rgba(0, 0, 0, 0.331)',margin: '6px'}}
          className={classes.filterButton}
          startIcon={<SortIcon />}
        >
          סינון
        </Button>
      </div>
    </div>
  );
};

export default searchHeader;
