import React from 'react';
import ResultBanner from '../../../resultBanner/resultBanner';
import { propertiesToShow } from '../../../../utils/globalConsts';
import ClassActionContent from '../classAction/classActionContent/classActionContent';
import UpdateClassAction from './classActionContent/updateClassAction/updateClassAction';
import { useDispatch } from 'react-redux';
import { updateClassAction } from '../../../../store/actions'

const ClassAction = props => {
    const dispatch = useDispatch();

    const handleSaveDescClick = (classAction) => {
        // handleCloseChangeDesc();
        dispatch(updateClassAction(classAction))
    }
    const basicProperties = propertiesToShow[0].classActionPro;
    const selectedProperties = basicProperties.map((bProp) => {
        return { ...bProp, content: props.classAction[bProp.engName] };
    });
    return (
            <ResultBanner 
            selectedProperties={selectedProperties}
            // edit = {props.}
            classAction = {props.classAction} 
            // editComp={<UpdateClassAction saveClick={(classAction) => handleSaveDescClick(classAction)} classAction={props.classAction}/>}
            >
                <ClassActionContent cAction={props.classAction} />
            </ResultBanner>
    );
};

export default ClassAction;