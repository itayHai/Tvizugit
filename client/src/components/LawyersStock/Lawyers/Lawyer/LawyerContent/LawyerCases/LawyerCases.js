import React from 'react';
import LawyerCase from './LawyerCase/LawyerCase';

const LawyerCases = (props) => {
    const casesToShow = props.cases.map((cAction) => {
        return  <LawyerCase key={cAction.id} case={cAction}></LawyerCase>
    });
    
    return (
        <div>
            {props.cases.length !== 0 ? 
            props.cases.map((cAction) => {
                return  <LawyerCase key={cAction.id} case={cAction}></LawyerCase>
    }) : null}
        </div>        
    );
}

export default LawyerCases;