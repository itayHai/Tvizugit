import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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

const CategoryByName = (props) => {
  const categoryId = props.id;

  const { loading, data } = useQuery(getCategory(categoryId), {
    variables: { categoryId },
  });

  if (loading) return "";

  console.log(data.CategoryQueries);
  return data.CategoryQueries.category?.name
};

export default CategoryByName;
