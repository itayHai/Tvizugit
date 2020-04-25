import { useState } from "react";
import React from "react";
import classes from "./categoryCard.module.css";

const CategoryCard = (props) => {
  let [classClicked, setClassClicked] = useState();
  //setClassClicked(false);

  const handleClick = (event) => {
    if (!classClicked) {
      setClassClicked(true);
    } else setClassClicked(false);
    props.click(props.id);
  };

  return (
    <div
      className={
        classClicked ? classes.CategoryCardClicked : classes.CategoryCard
      }
      id={props.id}
      onClick={handleClick}
    >
      {props.icon}
      <h3 id={props.id}> {props.title}</h3>
    </div>
  );
};

export default CategoryCard;
