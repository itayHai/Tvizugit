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

export default function UpdateModalTabs(props) {
    const [value, setValue] = React.useState(0);
    const stateClassAction = useSelector(state => state.classAction.currClassAction);
    const actionBeforeSave = useSelector(state => state.classAction.actionBeforeSave);
    const classAction = { ...stateClassAction };
    const dispatch = useDispatch();
    const [updateClassActionServer] = useMutation(classActionsRequest.updateClassActionServer);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSave = () => {
        actionBeforeSave.users = classAction.users.map(usr => {
            if (actionBeforeSave.waitingUsers.includes(usr)) {
                usr.isWaiting = false;
                return usr;
            }
        });
        actionBeforeSave.users = classAction.users.filter(usr => {
            if (!actionBeforeSave.insideUsers.includes(usr)) {
                return usr;
            }
        });
        updateClassActionServer({
            variables:
            {
                classAction:
                {
                    defendants: classAction.defendants,
                    users: actionBeforeSave.users.map(usr => { return { user: usr.user.id, isWaiting: usr.isWaiting } }),
                    hashtags: classAction.hashtags,
                    name: actionBeforeSave.name ? actionBeforeSave.name : classAction.name,
                    description: actionBeforeSave.description ? actionBeforeSave.description : classAction.description,
                    category: actionBeforeSave.category?.id ? actionBeforeSave.category?.id : classAction.category.id,
                    status: actionBeforeSave.status ? actionBeforeSave.status : classAction.status,
                    leadingUser: actionBeforeSave.leadingUser?.id ? actionBeforeSave.leadingUser?.id : classAction.leadingUser.id,
                },
                id: classAction.id
            }
        }).then(data => {
            console.log(data)
            dispatch(updateClassAction(data.data.ClassActionMutation.classAction));
            props.close();
        })
    }

    const handleChangeField = (event) => {
        classAction[event.target.name] = event.target.value;
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                >
                    <Tab label="עריכת פרטי תובענה"{...a11yProps(0)} />
                    <Tab label="עריכת משתתפים" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <UpdateClassAction
                    classAction={classAction}
                    handleChange={(event) => handleChangeField(event)}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UpdateUsersClassAction
                    classAction={classAction}
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

