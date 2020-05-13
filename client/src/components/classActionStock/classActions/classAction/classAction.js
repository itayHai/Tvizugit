import React from 'react';
import ResultBanner from '../../../resultBanner/resultBanner';
import { propertiesToShow } from '../../../../utils/globalConsts';
import ClassActionContent from '../classAction/classActionContent/classActionContent';
import { useDispatch } from 'react-redux';
import { changeCurAction } from '../../../../store/classAction'
import { dummyUser } from '../../../../utils/globalConsts';

const ClassAction = props => {
    const dispatch = useDispatch();
    const handleOpenEditAction = () => {
        dispatch(changeCurAction(props.classAction))
    }
    const basicProperties = propertiesToShow[0].classActionPro;
    const selectedProperties = basicProperties.map((bProp) => {
        let content = props.classAction[bProp.engName];
        if (bProp.engName === "defendants") {
            content = props.classAction[bProp.engName][0];
        }
        if (bProp.engName === "numberOfProsecutors"){
            content = props.classAction["users"].length;
        }
        if (bProp.engName === "category"){
            content = props.classAction[bProp.engName].name;
        }
        return { ...bProp, content: content };
    });
    return (
        <ResultBanner
            selectedProperties={selectedProperties}
            handleOpenEditAction={() => handleOpenEditAction()}
            editAuth={props.classAction.leadingUser.id === dummyUser.id}
            showBookmark = {props.classAction.users.find(usr => usr.id === dummyUser.id)}
        >
                <ClassActionContent cAction={props.classAction} />
            </ResultBanner>
    );
};

export default ClassAction;