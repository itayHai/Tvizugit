import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import people_icon from "../../../images/icons/people_icon.png";
import trophy_icon from "../../../images/icons/trophy_icon.png";
import classes from "./classActionCard.module.css";
import { useHistory } from "react-router-dom";
import { changeFilter } from "../../../store/classAction";
import { useDispatch } from "react-redux";

const ClassActionCard = ({ classAction }, props) => {
  const { name, users, successChances } = classAction;
  const history = useHistory();
  const dispatch = useDispatch();

  const readMoreClicked = () => {
    dispatch(changeFilter({ name: name, categories: [], hashtags: [] }));
    history.push("/classActionsStock/");
  };
  const insideUsers = users.filter(usr => {
    return !usr.isWaiting
  })
  return (
    <Card className={classes.root}>
      <CardContent>
        <label className={classes.title}>{name}</label>
        <hr className={classes.underlineTitle} />
        <br />
        <img className={classes.icon} src={people_icon} alt="members" />
        <label>
          <b>{insideUsers.length}</b> כבר הצטרפו למאבק
        </label>
        <br />
        <img className={classes.icon} src={trophy_icon} alt="trophy" />
        <label>
          <b>{successChances}</b> סיכויי זכייה
        </label>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={readMoreClicked}>
          קרא עוד
        </Button>
      </CardActions>
    </Card>
  );
};

export default ClassActionCard;
