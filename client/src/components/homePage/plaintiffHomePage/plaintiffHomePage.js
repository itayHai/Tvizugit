import React from "react"
import classes from "./plaintiffHomePage.module.css"
import { Typography } from "@material-ui/core"
import { classActionsFilters } from "../../../utils/globalConsts"
import ClassActionsByFilter from "../../classActionsByFilter/classActionsByFilter"

const PlaintiffHomePage = ({ user }) => {
    const MAX_CLASS_ACTIONS_LIMIT = 3

    return (
        <section className={classes.section}>
            <div className={classes.text}>
                <Typography className={classes.headLine} variant="h4">
                    היי {user.displayName}, הנה התביעות שלך
                </Typography>
                <div className={classes.myClassActions}>
                    <ClassActionsByFilter filter={classActionsFilters.LOGGED_USER} limit={MAX_CLASS_ACTIONS_LIMIT} />
                </div>
            </div>
        </section>

    )
}

export default PlaintiffHomePage