import React from "react"
import classes from "./viewerHomePage.module.css";
import { Typography, Button } from "@material-ui/core";
import SearchClassAction from "../../searchClassAction/searchClassAction";
import Modal from "../../modal/modal";


export default function ViewerHomePage() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
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
    );
}