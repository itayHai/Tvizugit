import React, { useState } from "react"
import classes from "./plaintiffHomePage.module.css"
import { Typography, Card, CardContent, IconButton, Button } from "@material-ui/core"
import Modal from "../../modal/modal";
import { classActionsFilters } from "../../../utils/globalConsts"
import ClassActionsByFilter from "../../classActionsByFilter/classActionsByFilter"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { useSelector, useDispatch } from "react-redux"
import Spinner from "../../spinner/spinner"
import SearchClassAction from "../../searchClassAction/searchClassAction";
import CreateClassAction from '../../createClassAction/createClassAction';
import { AddCircleOutlineTwoTone, Search, More } from '@material-ui/icons';
import AlertUser from '../../alertUser/alertUser';
import { changeFilter } from "../../../store/classAction";
import { useHistory } from "react-router-dom";

const MAX_CLASS_ACTIONS_LIMIT = 3

const getNumberOfClassActions = () => {
    return gql`
    query getNumberOfClassActions ($userId:String) {
        ClassActionQueries {
          count (userId:$userId)
        }
      }
    `
}

const PlaintiffHomePage = ({ user }) => {
    const [open, setOpen] = useState(false);
    const [createOpen, setCreateOpen] = React.useState(false);
    const [alert, setAlert] = useState({ message: "הוספת תובענה ואתה מנהל התובענה!", severity: "success", open: false })
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCloseAlert = () => {
        setAlert(prevState => ({ ...prevState, open: false }));
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCreateOpen = () => {
        setCreateOpen(true);
    };

    const handleCreateClose = (isSuccess) => {
        if (isSuccess !== "cancel")
            if (isSuccess)
                setAlert(prevState => ({ ...prevState, open: true }));
            else
                setAlert({ message: "הייתה שגיאה בשמירה", severity: "error", open: true });
        setCreateOpen(false);
    };
    const loggedInUser = useSelector((state) => state.user.loggedInUser)

    const { loading, data } = useQuery(getNumberOfClassActions(), {
        variables: { userId: loggedInUser.id }
    })

    if (loading) {
        return <Spinner />
    }
    return (
        <section className={classes.section}>
            <Modal show={open} onClose={handleClose}>
                <SearchClassAction close={handleClose} />
            </Modal>
            <Modal show={createOpen} onClose={() => handleCreateClose("cancel")}>
                <CreateClassAction close={handleCreateClose} />
            </Modal>
            <div className={classes.text}>
                <div className={classes.userHeader}>
                    <Typography className={classes.headLine} variant="h4">
                        היי {user.displayName}, הנה התביעות שלך
                    </Typography>
                    {data.ClassActionQueries.count > 3 &&
                        <IconButton
                            onClick={() => {
                                const filter = {
                                    name: "",
                                    categories: [],
                                    hashtags: [],
                                    userId: loggedInUser.id
                                };
                                dispatch(changeFilter(filter));
                                history.push("/classActionsStock/");
                            }
                            }
                        ><More fontSize="small"/>לכל התביעות לחץ כאן </IconButton>
                    }
                </div>
                <div className={classes.myClassActions}>
                    <ClassActionsByFilter filter={classActionsFilters.LOGGED_USER} limit={MAX_CLASS_ACTIONS_LIMIT} />
                </div>
                <div>
                    {data.ClassActionQueries.count === 0 &&
                        <div>
                            <Typography className={classes.headLine} variant="h4">
                                היי {user.displayName}, הגיע הזמן להתחיל את המסע שלך בתביצוגית
                        </Typography>
                            <div className={classes.cardsContainer}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.carContent} onClick={handleCreateOpen}>
                                        <IconButton color="primary" aria-label="add class action" component="span">
                                            <AddCircleOutlineTwoTone fontSize="large" />
                                        </IconButton>
                                        <Typography color="textSecondary" variant="h5">
                                            יצירת תובענה חדשה
                                    </Typography>
                                    </CardContent>
                                </Card>
                                <Card className={classes.card}>
                                    <CardContent className={classes.carContent} onClick={handleOpen}>
                                        <IconButton color="primary" aria-label="add class action" component="span" >
                                            <Search fontSize="large" />
                                        </IconButton>
                                        <Typography color="textSecondary" variant="h5">
                                            מציאת תובענה קיימת
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    }

                </div>
                <Button
                    className={classes.sectionButtons}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleOpen}
                >
                    בדוק את זכאותך עוד היום
                </Button>
                <Button
                    className={classes.sectionButtons}
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={handleCreateOpen}
                >
                    גיבוש תובענה ייצוגית חדשה
                </Button>
                <AlertUser open={alert.open} handleClose={handleCloseAlert} message={alert.message} severity={alert.severity} />

            </div>

        </section>

    )
}

export default PlaintiffHomePage