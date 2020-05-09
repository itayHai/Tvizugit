import React from "react";
import { useQuery } from "@apollo/react-hooks";
import CategoryCard from "../categoryCard/categoryCard";
import { categoriesIcons } from "../../utils/globalConsts";
import classes from "./categoriesCards.module.css";
import { categoriesRequest } from "../../utils/requests";

function CategoriesCards(props) {
  const { loading, data } = useQuery(categoriesRequest.getAll);

  if (loading) return <p>Loading...</p>;

  const categoryCards = data.CategoryQueries.categories.map((category) => (
    <CategoryCard
      key={category.id}
      icon={categoriesIcons[category.name]}
      title={category.name}
      homePage={props.homePage}
    />
  ));

  return <div className={classes.categoryBanner}>{categoryCards}</div>;
}

export default CategoriesCards;
