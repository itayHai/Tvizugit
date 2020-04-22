import React from "react";
import classes from "./userCard.module.css";

const userCard = (props) => {
    return (
      <div className={classes.UserCard} onClick={props.click}>
          {props.icon}
         <h3> {props.title}</h3>
      </div>
    );
  };

export default userCard;