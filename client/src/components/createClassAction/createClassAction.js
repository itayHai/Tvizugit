import React, { useState } from 'react';
import { Stepper, Step, StepLabel,Button } from '@material-ui/core';
import classes from "./createClassAction.module.css";
import { AddCircle } from "@material-ui/icons";
import { useMutation } from "@apollo/react-hooks";
import { classActionsRequest } from '../../utils/requests';
import { useSelector } from 'react-redux';
import ClassActionInfo from './classActionInfo/classActionInfo';
import ClassActionDefendants from './classActionDefendants/classActionDefendants';

function getSteps() {
    return ['יצירת פרטים ראשוניים', 'פרטי נתבעים'];
}

const CreateClassAction = props => {
    const [classAction] = useState({ defendants: [], users: [] });
    let [defendants] = useState([]);
    const [addClassAction] = useMutation(classActionsRequest.addClassAction);
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <ClassActionInfo
                    handleChangeInput={handleChangeInput}
                    handleChangeAutoField={handleChangeAutoField}
                />;
            case 1:
                return <ClassActionDefendants
                    handleChangeInput={handleChangeInput}
                    handleChangeAutoField={handleChangeAutoField}
                />;
            default:
                return 'Unknown step';
        }
    }
    const handleNext = () => {
        if (activeStep === steps.length - 1)
            handleSave();
        else
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleChangeInput = (event, value) => {
        classAction[event.target.id] = event.target.value;
    }
    const handleChangeAutoField = (event, values) => {
        if (event.target.id.includes("category"))
            classAction.category = values.id
    }
    const handleSave = () => {
        classAction.openDate = new Date();
        classAction.status = "תובענה חדשה בשוק חבר'ה!";
        classAction.users.push({ user: loggedInUser.id, isWaiting: Boolean(false) });
        classAction.leadingUser = loggedInUser.id;
        classAction.defendants = defendants;
        addClassAction({
            variables: {
                classAction
            }
        }).then(data => {
            props.close(true);
        }).catch(err => {
            props.close(false);
        })
    }
    return (
        <div className={classes.SearchClassAction}>
            <div className={classes.Title}>
                <AddCircle className={classes.SearchIcon} />
                <h1>הוספת תובענה ייצוגית</h1>
            </div>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                <div>
                    {getStepContent(activeStep)}
                    <div >
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            הקודם
              </Button>
                        <Button
                            className={classes.SearchButton}
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                        >
                            {activeStep === steps.length - 1 ? 'שמור' : 'הבא'}
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CreateClassAction;