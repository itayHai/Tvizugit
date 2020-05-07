import React, { useState } from "react"
import classes from "./plaintiffHomePage.module.css"
import { Typography, Card, CardContent, IconButton } from "@material-ui/core"
import Modal from "../../modal/modal";
import { classActionsFilters } from "../../../utils/globalConsts"
import ClassActionsByFilter from "../../classActionsByFilter/classActionsByFilter"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { useSelector } from "react-redux"
import Spinner from "../../spinner/spinner"
import SearchClassAction from "../../searchClassAction/searchClassAction";
import { AddCircleOutlineTwoTone, Search } from '@material-ui/icons';

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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const loggedInUser = useSelector((state) => state.user.loggedInUser)

    const { loading, data } = useQuery(getNumberOfClassActions(), {
        variables: { userId: loggedInUser.id }
    })

    if (loading) {
        return <Spinner />
    }
    console.log(open);

    return (
        <section className={classes.section}>
            <Modal show={open} onClose={handleClose}>
                <SearchClassAction close={handleClose} />
            </Modal>
            <div className={classes.text}>
                {data.ClassActionQueries.count !== 0 ?
                    <div>
                        <Typography className={classes.headLine} variant="h4">
                            היי {user.displayName}, הנה התביעות שלך
                        </Typography>
                        <div className={classes.myClassActions}>
                            <ClassActionsByFilter filter={classActionsFilters.LOGGED_USER} limit={MAX_CLASS_ACTIONS_LIMIT} />
                        </div>
                    </div> :
                    <div>
                        <Typography className={classes.headLine} variant="h4">
                            היי {user.displayName}, הגיע הזמן להתחיל את המסע שלך בתביצוגית
                        </Typography>
                        <div className={classes.cardsContainer}>
                            <Card className={classes.card}>
                                <CardContent className={classes.carContent}>
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

        </section>

    )
}

export default PlaintiffHomePage