import React, { useState } from "react";
import { Button } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import SimpleSelect from "../simpleSelect/simpleSelect";
import Modal from "../modal/modal";
import SearchClassAction from "../searchClassAction/searchClassAction";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import classes from "./searchHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../store/classAction";
import Spinner from "../spinner/spinner";

const getCategory = (params) => {
  return gql`
    query getCategory($id: String) {
      CategoryQueries {
        category(id: $id) {
          name
        }
      }
    }
  `;
};

const SearchHeader = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.classAction.filter);

  const id = filter.categories[0];
  const { loading, data } = useQuery(getCategory(id), {
    variables: {id },
  });


  if (loading) {
    return <Spinner />
  }
  const categoryName = data.CategoryQueries.category?.name;

  return (
    <div className={classes.searchHeader}>
      <h1 className={classes.searchTitle}>{props.title}</h1>
      <div>
        {filter.name === " " || filter.name === "" || filter.name ===undefined
          ? ""
          : "תוצאת חיפוש לפי שם: " + filter.name}
      </div>
      <div>
        {filter.categories.length === 0
          ? ""
          : "תוצאת חיפוש לפי קטגוריה: " + categoryName}
      </div>
      <div>
        {filter.hashtags?.length === 0 || filter.hashtags === undefined
          ? ""
          : "תוצאת חיפוש לפי תגיות: " + filter.hashtags}
      </div>
      <div className={classes.buttonRow}>
        <SimpleSelect
          className={classes.select}
          label="מיון"
          items={props.itemsToSelect}
          changed={(event) => dispatch(changeSort(event.target.value))}
        />

        <Button
          className={classes.filterButton}
          onClick={handleOpen}
          startIcon={<SortIcon />}
        >
          חפש שוב
        </Button>
        <Modal show={open} onClose={handleClose}>
          <SearchClassAction close={handleClose} />
        </Modal>
      </div>
    </div>
  );
};

export default SearchHeader;
