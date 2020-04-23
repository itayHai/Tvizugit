import React, { useState,useEffect } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import CategoryCard from "../categoryCard/categoryCard";
import Chip from "@material-ui/core/Chip";
import { useQuery } from "@apollo/react-hooks";
import { categoriesIcons } from "../../utils/globalConsts";
import { categoriesRequest } from "../../utils/requests";
import classes from "./searchClassAction.module.css";

const SearchActionClass = (props) => {
  const [value, setValue] = useState("");
  const [hashtags] = useState([]);

  const { data } = useQuery(categoriesRequest.getAll);
  useEffect(() => {
    console.log("updated");
  }, [data]);
  const categories = data.CategoryQueries.categories;

  let allCategories = [];
  let threeCategories = [];
  for (let i = 0; i < categories.length; i += 3) {
    for (let j = i; j < i + 3; j++) {
      threeCategories.push(
        <CategoryCard
          key={categories[j].id}
          icon={categoriesIcons[categories[j].name]}
          title={categories[j].name}
        />
      );
    }
    allCategories.push(<div key={i}>{threeCategories}</div>);
    threeCategories = [];
  }

  const keyDownHandler = (event) => {
    if (["Enter", "Tab", ","].includes(event.key)) {
      event.preventDefault();
      hashtags.push(value.trim());
      setValue("");
    }
  };

  const inputChangedHandler = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.SearchClassAction}>
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
        placeholder=" חיפוש לפי תגיות (לחץ Enter עבור כל תגית)"
        className={classes.InputSearch}
        fullWidth={true}
        value={value}
        onChange={inputChangedHandler}
        onKeyDown={keyDownHandler}
      />

      {hashtags.map((hashtag, index) => {
        return <Chip className={classes.Chip} key={index} label={hashtag} />;
      })}

      <h3 className={classes.SearchByCategory}>חיפוש לפי קטגוריה</h3>
      <div className={classes.Categories}>{allCategories}</div>
      <Button variant="contained" onClick={props.close}>
        ביטול
      </Button>
      <Button className={classes.SearchButton}>חיפוש</Button>
    </div>
  );
};

export default SearchActionClass;
