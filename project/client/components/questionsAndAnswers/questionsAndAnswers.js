import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classes from "./questionsAndAnswers.module.css";
import questions from "./allQuestions";

const QuestionsAndAnswers = () => {
  //const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h1>שאלות נפוצות</h1>

      {questions.map((question, index) => {
        return (
          <ExpansionPanel
            expanded={expanded === "panel" + index}
            onChange={handleChange("panel" + index)}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={"panel" + index + "bh-content"}
              id={"panel" + index + "bh-header"}
            >
              <Typography className={classes.heading}>
                {question.question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>{question.answer}</ExpansionPanelDetails>
          </ExpansionPanel>
        );
      })}
    </div>
  );
};
export default QuestionsAndAnswers;
