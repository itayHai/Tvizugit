import React from "react";
import Typography from "@material-ui/core/Typography";
import classes from "./homePage.module.css";
import { Button } from "@material-ui/core";
import ClassActionsByFilter from "../classActionsByFilter/classActionsByFilter";
import CategoriesCards from "../categoriesCards/categoriesCards";
import SearchClassAction from "../searchClassAction/searchClassAction";

const CONSTS = {
  filters: {
    MOST_PROMINENT: "MOST_PROMINENT",
    LOGGED_USER: "LOGGED_USER",
  },
};

export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

export default function HomePage() {
  return (
    <div>
      <section className={classes.section}>
        <div className={classes.text}>
          <Typography className={classes.headLine} variant="h4">
            נפגעת? חלית? אולי מגיעים לך פיצויים מתביעה ייצוגית!
          </Typography>

          <label className={classes.para}>
            כל כך הרבה תובענות ייצוגיות נתבעות ונפסקות,
          </label>
          <label className={classes.para}>
            בלי שבכלל נדע שמגיע לנו פיצויים בזכותן!
          </label>
          <Button
            className={classes.sectionButtons}
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleOpen}
          >
            בדוק את זכאותך עוד היום
          </Button>
          <Modal show={open} onClose={handleClose}>
            <SearchClassAction close={handleClose} />
          </Modal>

          <Button
            className={classes.sectionButtons}
            variant="contained"
            color="secondary"
            size="large"
          >
            גיבוש תובענה ייצוגית חדשה
          </Button>
        </div>
      </section>
      <article className={classes.article}>
        <p className={classes.classActionTitle}>התובענות הבולטות ביותר</p>
        <ClassActionsByFilter filter={CONSTS.filters.MOST_PROMINENT} size={4} />
                </p>
                <ClassActionsByFilter
      </article>
    </div>
  );
}
