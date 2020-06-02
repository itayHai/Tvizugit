import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classes from "./questionsAndAnswers.module.css";

const QuestionsAndAnswers = () => {
  //const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <h1>שאלות נפוצות</h1>

      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            למה צריך תובענות ייצוגיות?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            ברוב המקרים נזקו של כל אחד מהקבוצה הינו קטן באופן יחסי, ואילו סכום
            תביעתם הכולל של חברי הקבוצה גבוה ביותר נוכח ריבוי מספרם. לכן, ישנה
            כדאיות בהגשת התובענה הייצוגית. יתרונות נוספים בהגשת תובענה ייצוגית
            הינם חיסכון במשאבים, מניעת ריבוי תביעות והגברת האחידות בהחלטות
            המתקבלות על ידי בתי המשפט בעניינים דומים.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            מי רשאי לתבוע תביעה ייצוגית?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              יחיד שניזוק מהעילה ומשותפת לכלל הקבוצה בשמה הוא תובע – בשם אותה
              הקבוצה
            </p>
            <p>
              רשות ציבורית שבתחום אחת המטרות הציבוריות שבהן היא עוסקת בוצע המעשה
              שבגינו תובעת – בשם קבוצת האנשים שנפגעו מן המעשה.
            </p>
            <p>
              ארגון שבתחום אחת המטרות הציבוריות שבהן הוא עוסק בוצע המעשה מעורר
              התביעה – בשם קבוצת האנשים שנפגעו מן המעשה, אך ורק אם התובע השתכנע
              שאין ביכולת אדם פרטי להגיש את התביעה
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            מהו הגמול בתביעה ייצוגית?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            פיצוי בתביעה ייצוגית יכול להיות החזר, פיצוי או צו מניעה שאחיד לגבי
            הקבוצה, גם אם לא נקטו חלק פעיל בתביעה. כך למשך תובע ייצוגי יכול
            לטעון להקפצת מחירים אצל ספקית אינטרנט, והגמול יהיה החזר כספי לכל
            מנויי החברה.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            איך מצטרפים לתביעה ייצוגית?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
              אם בית המשפט מקבל תביעה כתביעה ייצוגית, כל אדם שרואה את עצמו כחלק
              מהקבוצה שבשמה התביעה הוגשה יכול להיות חלק מהתובעים. בעיתונים
              מתפרסמות ידיעות על אישור תביעה כתביעה ייצוגית, וכך למדים על
              האפשרות להצטרף לתביעה.
            </p>
            <p>
              באתר שלנו זה כל כך פשוט - לחץ על הצטרפות לתבוענה, תאר את המקרה שלך
              ואתה בפנים!
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
          מה התובע הייצוגי (מוביל התובענה) מקבל?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p>
            במקרה שהתביעה מתקבלת לתובע הייצוגי מגיע פיצוי מוגדל  לעומת הקבוצה, בגין הזמן והטרחה שלקח על עצמו. פיצוי זה נקבע כדי לעודד אנשים להגיש תביעות ייצוגיות וכדי שלא יוותרו בגלל הזמן והטרחה, וכך הצרכן או הקבוצה יקבלו מה שמגיע להם.
            </p>
            
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};
export default QuestionsAndAnswers;
