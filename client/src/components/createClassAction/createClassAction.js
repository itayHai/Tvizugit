import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';
import classes from "./createClassAction.module.css";
import { AddCircle } from "@material-ui/icons";
import { useMutation } from "@apollo/react-hooks";
import { classActionsRequest } from '../../utils/requests';
import { useSelector } from 'react-redux';
import ClassActionInfo from './classActionInfo/classActionInfo';
import ClassActionDefendants from './classActionDefendants/classActionDefendants';
import ClassActionAutoData from './classActionAutoData/classActionAutoData';

function getSteps() {
    return ['יצירת פרטים ראשוניים', 'פרטי נתבעים', 'נתונים אוטומטיים'];
}
const inputsInStep = [
    {
        inputs: [
            "name",
            "description",
            "type",
            "reason",
            "category"
        ]
    },
    {
        inputs: [
            "defendants"
        ]
    }
]
const CreateClassAction = props => {
    const [classAction] = useState({ defendants: [{}, {}, {}, {}, {}], users: [] });
    const [addClassAction] = useMutation(classActionsRequest.addClassAction);
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
    const [activeStep, setActiveStep] = React.useState(0);
    const [showMandatory, setShowMandatory] = React.useState(false);
    const steps = getSteps();

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <ClassActionInfo
                    handleChangeInput={handleChangeInput}
                    handleChangeAutoField={handleChangeAutoField}
                    showMandatory={showMandatory}
                    classAction={classAction}
                />;
            case 1:
                return <ClassActionDefendants
                    handleChangeInput={handleChangeInput}
                    handleChangeDefField={handleChangeDefField}
                    showMandatory={showMandatory}
                    defendants={classAction.defendants}
                />;
            case 2:
                return <ClassActionAutoData
                    handleChangeInput={handleChangeInput}
                    handleChangeAutoField={handleChangeAutoField}
                    classAction={classAction}
                    addHashtags={(hashtags) => { classAction.hashtags = hashtags }}
                />;
            default:
                return 'שלב לא ידוע';
        }
    }
    const isEmptyFileds = (step) => {
        if (step === 0) {
            for (let index = 0; index < inputsInStep[step].inputs.length; index++) {
                if (!classAction[inputsInStep[step].inputs[index]]) {
                    return true;
                }
            }
        } else if (step === 1) {
            if (!(classAction.defendants[0].name && !classAction.defendants[0].type && !classAction.defendants[0].theme)) {
                return true;
            } else {
                for (let index = 1; index < classAction.defendants.length; index++) {
                    if ((classAction.defendants[index].name || classAction.defendants[index].type || classAction.defendants[index].theme) &&
                        !(classAction.defendants[index].name && classAction.defendants[index].type && classAction.defendants[index].theme)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    const handleNext = () => {
        if (!isEmptyFileds(activeStep)) {
            if (activeStep === steps.length - 1)
                handleSave();
            else
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setShowMandatory(true);
        }
    };
    const handleBack = () => {
        setShowMandatory(false);
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleChangeInput = (event, value, defendantNumber) => {
        setShowMandatory(false);
        if (event.target.id.includes("defendant"))
            classAction.defendants[defendantNumber].name = event.target.value;
        else
            classAction[event.target.id] = event.target.value;
    }
    const handleChangeAutoField = (event, values, field) => {
        setShowMandatory(false);
        classAction[field] = values;
    }
    const handleChangeDefField = (event, values, field, defendantNumber) => {
        setShowMandatory(false);
        classAction.defendants[defendantNumber][field] = values;
    }

    const handleSave = () => {
        classAction.openDate = new Date();
        classAction.status = "תובענה חדשה בשוק חבר'ה!";
        classAction.users.push({ user: loggedInUser.id, isWaiting: Boolean(false) });
        classAction.leadingUser = loggedInUser.id;
        classAction.category = classAction.category.id;
        classAction.defendants = classAction.defendants.filter(def => Object.keys(def).length !== 0)

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