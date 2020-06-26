import React from 'react';
import ClassActionDefendant from './classActionDefendant/classActionDefendant';

const ClassActionDefendants = props => {
    const defendants = props.defendants.map((def, index) =>{
        return (
            <ClassActionDefendant
                handleChangeInput={props.handleChangeInput}
                handleChangeDefField={props.handleChangeDefField}
                defendantNumber = {index}
                defendant={def}
                showMandatory={props.showMandatory}
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