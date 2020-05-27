import React from "react";
import { useQuery } from "@apollo/react-hooks";
import CategoryCard from "../categoryCard/categoryCard";
import { categoriesIcons } from "../../utils/globalConsts";
import classes from "./categoriesCards.module.css";
import { categoriesRequest } from "../../utils/requests";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from '../spinner/spinner';
import { changeFilter } from "../../store/classAction";

function CategoriesCards(props) {
  const { loading, data } = useQuery(categoriesRequest.getAll);
  const history = useHistory();
  const dispatch = useDispatch();

  if (loading) return <Spinner />

  const handleClick = (id) => {
    
    dispatch(changeFilter({ name: " ", categories: [id], hashtags: [] }));

    history.push("/classActionsStock/");
  };

  const categoryCards = data.CategoryQueries.categories.map((category) => (
    <CategoryCard
      key={category.id}
      icon={categoriesIcons[category.name]}
      title={category.name}
      homePage={props.homePage}
      clicked={()=>handleClick(category.id)}
    />
  ));

  return <div className={classes.categoryBanner}>{categoryCards}</div>;
}

export default CategoriesCards;
