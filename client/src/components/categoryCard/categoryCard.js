import React from "react";
import classes from "./categoryCard.module.css";

const categoryCard = (props) => {
  return (
    <div className={classes.CategoryCard} onClick={props.click}>
        {props.icon}
       <h3> {props.title}</h3>
    </div>
  );
};

export default categoryCard;
