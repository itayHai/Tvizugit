import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from './tabPanel/tabPanel';
import UpdateClassAction from './updateClassAction/updateClassAction';
import UpdateUsersClassAction from './updateUsersClassActions/updateUsersClassActions';
import { updateClassAction } from '../../../../../../store/classAction';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from "@apollo/react-hooks";
import { classActionsRequest } from '../../../../../../utils/requests';
import classes from './updateModalTabs.module.css';
import Button from "@material-ui/core/Button";
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}
function buildClassAction(classAction) {
    let classActionToAdd = {
        defendants: classAction.defendants.map(def => { return { name: def.name, type: def.type.id, theme: def.theme.id } }),
        users: classAction.users.map(usr => { return { user: usr.user.id, isWaiting: usr.isWaiting } }),
        hashtags: classAction.hashtags,
        name: classAction.name,
        description: classAction.description,
        category: classAction.category.id,
        status: classAction.status,
        reasons: classAction.reasons.map(res => res.id),
        type: classAction.type.id,
        leadingUser: classAction.leadingUser.id,
        representingLawyer: classAction.representingLawyer?.id ? classAction.representingLawyer.id : null
    };

    return classActionToAdd;
}
export default function UpdateModalTabs(props) {
    const [tab, setTab] = React.useState(0);
    const stateClassAction = useSelector(state => state.classAction.currClassAction);
    const [classAction] = React.useState({ ...stateClassAction });
    const dispatch = useDispatch();
    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer
    );

    const handleChangeAction = (event) => {
        classAction[event.target.name] = event.target.value;
    };
    const handleChangeAutoField = (id, event, values) => {
        classAction[id] = values;
    }
    const handleArrayFields = (id, event, values) => {
        classAction[id] = [];
        for (let index = 0; index < values.length; index++) {
            classAction[id].push(values[index]);
        }
    }
    const handleSave = () => {
        classAction.users = classAction.users.map(usr => {
            if (classAction.waitingUsers?.includes(usr))
                usr.isWaiting = false;
            return usr;
        });
        classAction.users = classAction.users.filter(usr => {
            return !classAction.insideUsers?.includes(usr);
        });
        const classActionToSend = buildClassAction(classAction);
        updateClassActionServer({
            variables:
            {
                classAction: classActionToSend,
                id: classAction.id
            }
        }).then(data => {
            dispatch(updateClassAction(data.data.ClassActionMutation.classAction));
            props.close();
        })

    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={tab}
                    onChange={(event, newValue) => setTab(newValue)}
                    variant="fullWidth">
                    <Tab label="עריכת פרטי תובענה"{...a11yProps(0)} />
                    <Tab label="עריכת משתתפים" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0}>
                <UpdateClassAction
                    classAction={classAction}
                    handleChangeAutoField={handleChangeAutoField}
                    handleChange={handleChangeAction}
                    handleReasons={handleArrayFields}
                />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <UpdateUsersClassAction
                    classAction={classAction}
                    handleUsers={handleArrayFields}
                    handleChangeAutoField={handleChangeAutoField}
                />
            </TabPanel>
            <div className={classes.buttons}>
                <Button variant="contained" onClick={props.close}>
                    ביטול
                </Button>
                <Button
                    className={classes.saveButton}
                    onClick={() => handleSave()}
                >שמור</Button>
            </div>
        </div>
    );
}

