import React from "react";
import classes from './resultBanner.module.css'
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { Share,ExpandMore } from "@material-ui/icons";
import Divider from '@material-ui/core/Divider';

export default function RecipeReviewCard(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let combinedPropertiesToShow = props.selectedProperties.map((p) => {
        return <CardHeader
            className={classes.cellInRow}
            title={p.content}
            subheader={p.value}
            key={p.key}
        />
    });

    return (
        <Card className={classes.root}>
            <div className={classes.rootDiv}>
                {combinedPropertiesToShow}
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMore />
                    </IconButton>
                </CardActions>
            </div>
            <Divider />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.content}>
                    {props.children}
                </CardContent>
            </Collapse>
        </Card>
    );
};


