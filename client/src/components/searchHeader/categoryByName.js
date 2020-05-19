import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const getCategory = (params) => {
  return gql`
    query getCategory($id: String) {
      CategoryQueries {
        category(id: $id) {
          id
          name
        }
      }
    }
  `;
};

const CategoryByName = (props) => {
  const id = props.id;
  const { loading, data } = useQuery(getCategory(id), {
    variables: { id },
  });

  if (loading) return "";

  return data.CategoryQueries.category?.name + ", ";

};

export default CategoryByName;
