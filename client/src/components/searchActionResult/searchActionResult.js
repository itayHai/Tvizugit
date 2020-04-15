import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./searchActionResult.module.css";

const searchActionResult = (props) => {
   
  return (
    <div>
      <div className={classes.Title}>
        <SearchIcon className={classes.SearchIcon} />
        <h1>חיפוש תובענה ייצוגית</h1>
      </div>
      <Input
        placeholder="חיפוש לפי הגורם הנתבע"
        className={classes.InputSearch}
        autoFocus={true}
        fullWidth={true}
      />
      <Input
        placeholder="חיפוש לפי תגיות"
        className={classes.InputSearch}
        fullWidth={true}
      />

      <h3 className={classes.SearchByCategory}>חיפוש לפי קטגוריה</h3>

      <Button variant="contained" onClick={props.close}>ביטול</Button>
      <Button className={classes.SearchButton} style={{backgroundColor:"#009688",color:"white"}}>
        חיפוש
      </Button>
    </div>
  );
};

export default searchActionResult;
