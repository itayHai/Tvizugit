import React from "react";
import { Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import SimpleSelect from "../simpleSelect/simpleSelect";

import "./searchHeader.css";

const searchHeader = (props) => {
  return (
    <div className="searchHeader">
      <h1 className="searchTitle">{props.title}</h1>
      <div className="buttonRow">
        <SimpleSelect
          className="select"
          label="מיון"
          items={{ name: "שם", description: "תאור" }}
        />
        <Button
          style={{ justifyContent: "space-around", height: "53px" }}
          className="sortButton"
          startIcon={<SortIcon />}
        >
          סינון
        </Button>
      </div>
    </div>
  );
};

export default searchHeader;
