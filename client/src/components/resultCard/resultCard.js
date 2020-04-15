import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from '@material-ui/core/Divider';
import propTypes from 'prop-types';
import ActionCardContent from '../classActionStock/classActionResultCards/classActionResultCard/actionCardContent/actionCardContent';


const useStyles = makeStyles(theme => ({
    root: {
        margin: 10
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
}));


export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const cardContent = props.descTitleCard === "תיאור תובענה" ?
        <ActionCardContent cAction={props.item} /> :
        // TODO: insert here <LawyerCardContent />
        null
        ;

    let combinedPropertiesToShow = props.propertiesToShow.map((p) => {
        return <CardHeader
            title={props.item[p.key]}
            subheader={p.value}
            key={p.key}
        />
    });

    return (
        <Card className={classes.root}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {combinedPropertiesToShow}
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
            </div>
            <Divider />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <h1 >{props.descTitleCard}:</h1>
                    <Typography paragraph>
                        {props.item.description}
                    </Typography>
                    {
                        cardContent
                    }
                </CardContent>
            </Collapse>
        </Card>
    );
};
RecipeReviewCard.propTypes = {
    //Title to display in the description section
    descTitleCard: propTypes.string,
    // classAction || lawyer
    item: propTypes.object
}
