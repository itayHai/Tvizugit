import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import classes from './classActionCard.module.css'

const classActionCard = (props) => {
    const {name, participants, chance} = props.classAction

    return (
        <Card className={classes.root}>
            <CardContent>
                <label className={classes.title}>
                    {name}
                </label>
                <hr style={{width: '75%', marginLeft: 0, marginRight: 0 }} />
                <br/>
                <label>
                    {participants} כבר הצטרפו למאבק
                </label>
                <br/>
                <label>
                {chance}סיכויי זכייה 
                </label>
            </CardContent>
            <CardActions>
                <Button size="small">קרא עוד</Button>
            </CardActions>
      </Card>
    )
}

export default classActionCard