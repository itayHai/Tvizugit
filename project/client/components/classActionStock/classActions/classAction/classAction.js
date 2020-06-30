import React from "react";
import ResultBanner from "../../../resultBanner/resultBanner";
import { propertiesToShow, resultTypes } from "../../../../utils/globalConsts";
import ClassActionContent from "../classAction/classActionContent/classActionContent";
import { useDispatch } from "react-redux";
import { changeCurAction } from "../../../../store/classAction";
import { useSelector } from "react-redux";

const ClassAction = (props) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const handleOpenEditAction = () => {
    dispatch(changeCurAction(props.classAction));
  };
  const basicProperties = propertiesToShow[0].classActionPro;
  const selectedProperties = basicProperties.map((bProp) => {
    let content = props.classAction[bProp.engName];
    if (bProp.engName === "defendants") {
      content = props.classAction[bProp.engName][0].name;
    }
    if (bProp.engName === "numberOfProsecutors") {
      const insideUsers = props.classAction["users"].filter(usr => {
          return !usr.isWaiting
      })
      content = insideUsers.length;
    }
    if (bProp.engName === "category") {
      content = props.classAction[bProp.engName].name;
    }
    return { ...bProp, content: content };
  });

  
  const flatennedUsers = props.classAction.users.map(usr => {
    return {
      isWaiting: usr.isWaiting,
      ...usr.user
    }
  });

  return (
    <ResultBanner
      refetch={props.refetch}
      entityType={resultTypes.CLASS_ACTION}
      entityId={props.classAction.id}
      selectedProperties={selectedProperties}
      handleOpenEditAction={() => handleOpenEditAction()}
      editAuth={props.classAction.leadingUser.id === loggedInUser.id}
      showBookmark={flatennedUsers.find(usr => (usr.id === loggedInUser.id && !usr.isWaiting))}
      name={props.classAction.name}
    >
      <ClassActionContent cAction={props.classAction} />
    </ResultBanner>
  );
};

export default ClassAction;
