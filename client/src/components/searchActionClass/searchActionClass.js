import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import CategoryCard from "../categoryCard/categoryCard";
import { categories } from "../../utils/globalConsts";

import classes from "./searchActionClass.module.css";

const searchActionClass = (props) => {
  let allCategories = [];
  for (let i = 0; i < categories.length; i += 3) {
    allCategories.push(
      <div>
        <CategoryCard
          key={categories[i].id}
          icon={categories[i].icon}
          title={categories[i].name}
        />
        <CategoryCard
          key={categories[i + 1].id}
          icon={categories[i + 1].icon}
          title={categories[i + 1].name}
        />
        <CategoryCard
          key={categories[i + 2].id}
          icon={categories[i + 2].icon}
          title={categories[i + 2].name}
        />
      </div>
    );
  }

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
      <div className={classes.Categories}>{allCategories}</div>
      <Button variant="contained" onClick={props.close}>
        ביטול
      </Button>
      <Button
        className={classes.SearchButton}
        style={{ backgroundColor: "#009688", color: "white" }}
      >
        חיפוש
      </Button>
    </div>
  );
};

export default searchActionClass;
