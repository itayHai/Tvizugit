import React from 'react';
import ResultBanner from '../../../resultBanner/resultBanner';
import { propertiesToShow } from '../../../../utils/globalConsts';
import ClassActionContent from '../classAction/classActionContent/classActionContent';

const classAction = props => {
    const basicProperties = propertiesToShow[0].classActionPro;
    // TODO: this or send in children
    const selectedProperties = basicProperties.map((bProp) => {
        return { ...bProp, content: props.classAction[bProp.key] };
    });

    return (
        <ResultBanner selectedProperties={selectedProperties}>
            <ClassActionContent cAction={props.classAction} />
        </ResultBanner>
    );
};

export default classAction;