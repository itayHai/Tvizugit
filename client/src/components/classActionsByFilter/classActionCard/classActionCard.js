import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import people_icon from '../../../images/icons/people_icon.png'
import trophy_icon from '../../../images/icons/trophy_icon.png'
import classes from './classActionCard.module.css'

const classActionCard = (props) => {
    const {name, participants, chance} = props.classAction

    return (
        <Card className={classes.root}>
            <CardContent>
                <label className={classes.title}>
                    {name}
                </label>
                <hr className={classes.underlineTitle} />
                <br/>
                <img className={classes.icon} src={people_icon} alt="members"/>
                <label>
                    <b>{participants}</b> כבר הצטרפו למאבק
                </label>
                <br/>
                <img className={classes.icon} src={trophy_icon} alt="trophy"/>
                <label>
                <b>{chance}</b> סיכויי זכייה 
                </label>
            </CardContent>
            <CardActions>
                <Button size="small">קרא עוד</Button>
            </CardActions>
      </Card>
    )
}

export default classActionCard