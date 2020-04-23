import React, { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import CategoryCard from "../categoryCard/categoryCard";
import { categoriesIcons } from "../../utils/globalConsts";
import classes from "./categoriesCards.module.css";
import { categoriesRequest } from "../../utils/requests";

function CategoriesCards() {
  const { loading, error, data } = useQuery(categoriesRequest.getAll);
  useEffect(() => {
    console.log("updated");
  }, [data]);

  if (loading) return <p>Loading...</p>;

  const categoryCards = data.CategoryQueries.categories.map((category) => (
    <CategoryCard
      key={category.id}
      icon={categoriesIcons[category.name]}
      title={category.name}
    />
  ));

  return <div className={classes.categoryBanner}>{categoryCards}</div>;
}

export default CategoriesCards;
