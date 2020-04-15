import React from 'react';
import ResultCard from '../../../resultCard/resultCard';
import {propertiesToShow} from '../../../../utils/globalConsts'

const classActionResultCard = props => {
   
    return (
        <ResultCard
            propertiesToShow={propertiesToShow.find(x => x.name === 'classAction').classActionPro}
            item={props.classAction}
            descTitleCard="תיאור תובענה"
        />
    );
};

export default classActionResultCard;