import React from "react";
import ClassActionCard from "./classActionCard/classActionCard";
import classes from "./classActionsByFilter.module.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useSelector } from "react-redux";
import Spinner from "../spinner/spinner";
import { classActionsFilters } from "../../utils/globalConsts"

const getClassActionByUser = () => {
  return gql`
  query getClassActionByUser ($userId:String,$limit:Int) {
    ClassActionQueries {
      classActions (userId:$userId,limit:$limit) {
        id
        name
        description
        category {
          id
          name
          engName
        }
        defendants{
          name
          type{
            id
            name
          }
          theme{
            id
            name
          }
        }
        messages {
          _id
          title
          date
          content
        }
        users {
          user{
          id
          name
          displayName
          }
          isWaiting
        }
        status
        leadingUser {
          id
          name
          displayName
        }
        representingLawyer{
          id
          name
        }
        openDate
        reasons{
          id
          name
        }
        type{
          id
          name
        }
        successChances
        hashtags
      }
    }
  }
  `
}

function ClassActionsByFilter({ filter, limit }) {
  //const [classActions, setClassActions] = useState(null)
  const loggedInUser = useSelector((state) => state.user.loggedInUser)
  const variables = {
    limit
  }

  if (filter === classActionsFilters.LOGGED_USER) {
    variables.userId = loggedInUser.id;
  }

  const { loading, data } = useQuery(getClassActionByUser(), {
    variables
  })

  if (loading) {
    return <Spinner />
  }
  const { classActions } = data.ClassActionQueries
  const ClassActionCards = classActions.map((classAction) => {
    return <ClassActionCard key={classAction.id} classAction={classAction} />;
  });

  return (

    <div className={classes.cardsRow}>{ClassActionCards}</div>
  )
}

export default ClassActionsByFilter;
