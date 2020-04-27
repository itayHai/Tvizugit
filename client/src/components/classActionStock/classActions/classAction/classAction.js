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
        return { ...bProp, content: props.classAction[bProp.engName] };
    });
    return (
        <ResultBanner
            selectedProperties={selectedProperties}
            handleOpenEditAction={() => handleOpenEditAction()}
            editAuth={props.classAction.managerUser.Id === dummyUser.Id}
            showBookmark = {props.classAction.users.find(usr => usr.Id === dummyUser.Id)}
        >
                <ClassActionContent cAction={props.classAction} />
            </ResultBanner>
    );
};

export default ClassAction;