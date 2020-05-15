import React from "react";
import classes from "./homePage.module.css";
import ClassActionsByFilter from "../classActionsByFilter/classActionsByFilter";
import CategoriesCards from "../categoriesCards/categoriesCards";
import ViewerHomePage from "./viewerHomePage/viewerHomePage"
import { useSelector } from "react-redux";
import PlaintiffHomePage from "./plaintiffHomePage/plaintiffHomePage";
import { classActionsFilters } from "../../utils/globalConsts"

export default function HomePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  return (
    <div>
      {(Object.keys(loggedInUser).length === 0) &&
        <ViewerHomePage />}
      {
        (Object.keys(loggedInUser).length !== 0 && loggedInUser.role.engName === "viewer") &&
        <PlaintiffHomePage user={loggedInUser} />
      }
      <article className={classes.article}>
        <p className={classes.classActionTitle}>התובענות הבולטות ביותר</p>
        <ClassActionsByFilter filter={classActionsFilters.MOST_PROMINENT} size={4} />
        <p className={classes.classActionTitle}>קטגוריות התובענות</p>
        <CategoriesCards homePage={true}/>
      </article>
    </div>
  );
}
