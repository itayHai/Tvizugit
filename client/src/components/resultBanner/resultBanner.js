import React from "react";
import classes from './resultBanner.module.css'
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import { Share, ExpandMore, Edit } from "@material-ui/icons";
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { dummyUser } from '../../utils/globalConsts';
import Modal from '../modal/modal';

export default function ResultBanner(props) {
    const [expanded, setExpanded] = React.useState(false);
    const [updateMode, setupdateMode] = React.useState(false);

    const isUserManager = props.classAction.managerUser?.Id === dummyUser.Id;

    const handleOpenUpdateMode = () => {
        setupdateMode(true);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    let combinedPropertiesToShow = props.selectedProperties.map((p) => {
        return <CardHeader
            className={classes.cellInRow}
            title={p.content}
            subheader={p.name}
            key={p.engName}
        />
    });

    return (
        <Card className={classes.root}>
            <div className={classes.rootDiv}>
                {combinedPropertiesToShow}
                <CardActions disableSpacing>
                    {isUserManager ?
                        <IconButton
                            onClick={handleOpenUpdateMode}
                        >
                            <Edit />
                        </IconButton> : null}
                    <Modal
                        show={updateMode}>
                        {props.editComp}
                    </Modal>
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

ResultBanner.propTypes = {
    // The children is the component to show when opening the banner
    children: PropTypes.element,
    // Array of the properties to show in the banner {content: content of property, 
    //                                                value: Hebrew name of the property, 
    //                                                key: english name of the property}
    selectedProperties: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.any,
        engName: PropTypes.string,
        name: PropTypes.string
    }))
}
