import React from "react";
import { useQuery } from "@apollo/react-hooks";
import CategoryCard from "../categoryCard/categoryCard";
import { categoriesIcons } from "../../utils/globalConsts";
import classes from "./categoriesCards.module.css";
import { categoriesRequest } from "../../utils/requests";
import { useHistory } from "react-router-dom";

function CategoriesCards(props) {
  const { loading, data } = useQuery(categoriesRequest.getAll);
  const history = useHistory();
  if (loading) return <p>Loading...</p>;

  const handleClick = () => {
    history.push("/classActionsStock/");
  };

  const categoryCards = data.CategoryQueries.categories.map((category) => (
    <CategoryCard
      key={category.id}
      icon={categoriesIcons[category.name]}
      title={category.name}
      homePage={props.homePage}
      clicked={handleClick}
    />
  ));

  return <div className={classes.categoryBanner}>{categoryCards}</div>;
}

export default CategoriesCards;
