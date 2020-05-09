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

    if (props.click) props.click(props.name);
  };

  let categoryClassName = classes.CategoryCard;
  if (props.homePage) {
    categoryClassName = classes.homePageCategoryCard;
  } else if (classClicked) {
    categoryClassName = classes.CategoryCardClicked;
  }

  const clicked = props.homePage ? props.clicked : handleClick;

  return (
    <div className={categoryClassName} id={props.name} onClick={clicked}>
      {props.icon}
      <h3 id={props.id}> {props.title}</h3>
    </div>
  );
};

export default CategoryCard;
