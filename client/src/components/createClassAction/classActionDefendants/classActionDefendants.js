import React from 'react';
import ClassActionDefendant from './classActionDefendant/classActionDefendant';

const ClassActionDefendants = props => {
    const defendants = props.classAction.defendants.map((def, index) =>{
        return (
            <ClassActionDefendant
                handleChangeInput={props.handleChangeInput}
                handleChangeAutoField={props.handleChangeAutoField}
                defendantNumber = {index}
                defendant={def}
                key={"def" + index}
            />
        )
    })
    return (
        <div>
            עלייך למלא לפחות נתבע אחד, עם כל שלושת השדות
            {defendants}
        </div>
    );
};

export default ClassActionDefendants;