import React, { useState } from "react";
import classes from "./resultBanner.module.css";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { Delete, ExpandMore, Edit, Report } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteClassAction, updateClassAction, changeCurAction } from "../../store/classAction";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import { useMutation } from "@apollo/react-hooks";
import { classActionsRequest } from '../../utils/requests'

export default function ResultBanner(props) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [reportDialogOpen, setReportDialogOpen] = useState(false);
  const [reportMessage, setReportMessage] = useState('');
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [reportClassAction] = useMutation(classActionsRequest.REPORT)

  const hadleDeleteClassAction = (entityId) => {
    dispatch(deleteClassAction(entityId));
    setDeleteDialogOpen(false);
  };

  const hadleReportClassAction = (entityId) => {
    reportClassAction({
      variables: {
        id: entityId,
        reportMessage: reportMessage
      }
    }).then((data) => {
      debugger;
      dispatch(updateClassAction(data.data.ClassActionMutation.reportClassAction))
      dispatch(changeCurAction({}));
    })
    setReportDialogOpen(false);
  };

  let combinedPropertiesToShow = props.selectedProperties.map((p) => {
    return (
      <CardHeader
        className={classes.cellInRow}
        title={p.content}
        subheader={p.name}
        key={p.engName}
      />
    );
  });

  return (
    <Card className={classes.root}>
      <div className={classes.rootDiv}>
        {props.showBookmark ? (
          <div style={{ backgroundColor: "#009688", width: "10px" }} />
        ) : null}
        {props.imgUrl ? 
          (<Avatar className={classes.img} src={props.imgUrl}></Avatar>) 
          : null}
        {combinedPropertiesToShow}
        <CardActions disableSpacing>
          {props.editAuth &&
            <IconButton onClick={() => props.handleOpenEditAction()}>
              <Edit />
            </IconButton>}
          <IconButton onClick={() => setReportDialogOpen(true)}>
            <Report />
          </IconButton>
          <Dialog
            open={reportDialogOpen}
            onClose={() => setReportDialogOpen(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              האם ברצונך לדווח על התביעה?
                </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                דיווח על תביעה מגיע למנהלי המערכת שלנו ובהתאם לפירוט נבחן את טענתך ונטפל בהתאם
                </DialogContentText>
              <TextField
                onChange={(event) => setReportMessage(event.target.value)}
                autoFocus
                margin="dense"
                variant="outlined"
                rows={4}
                id="reportDesc"
                label="פירוט הדיווח"
                fullWidth
                multiline
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setReportDialogOpen(false)}
                color="primary"
              >
                וואלה התחרטתי
                  </Button>
              <Button
                onClick={() => hadleReportClassAction(props.entityId)}
                color="primary"
                autoFocus
              >
                כן
                  </Button>
            </DialogActions>
          </Dialog>
          {Object.keys(loggedInUser).length !== 0 && loggedInUser.role.engName === "admin" && (
            <div>
              <IconButton
                aria-label="delete"
                onClick={
                  () =>
                    setDeleteDialogOpen(true) /* dispatch(deleteClassAction()*/
                }
              >
                <Delete />
              </IconButton>
              <Dialog
                open={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  בוודאות בא לך למחוק? אין חרטות
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    לאחר אישור המחיקה התובענה תמחק ואף משתמש לא יוכל לצפות בה
                    יותר.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={() => setDeleteDialogOpen(false)}
                    color="primary"
                  >
                    וואלה התחרטתי
                  </Button>
                  <Button
                    onClick={() => hadleDeleteClassAction(props.entityId)}
                    color="primary"
                    autoFocus
                  >
                    כן
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
      </div>
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.content}>{props.children}</CardContent>
      </Collapse>
    </Card>
  );
}

ResultBanner.propTypes = {
  // The children is the component to show when opening the banner
  children: PropTypes.element,
  // Array of the properties to show in the banner {content: content of property,
  //                                                name: Hebrew name of the property,
  //                                                engName: english name of the property}
  selectedProperties: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.any,
      engName: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  // True - has authorization to edit, False - otherwise
  editAuth: PropTypes.bool,
  // Function the fires when pressing the edit button, only if editAuth is True
  handleOpenEditAction: PropTypes.func,
};
