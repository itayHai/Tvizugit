import React from "react";
import ResultBanner from "../../../resultBanner/resultBanner";
import { propertiesToShow, resultTypes } from "../../../../utils/globalConsts";
import LawyerContent from "./LawyerContent/LawyerContent";

const Lawyer = (props) => {
    const basicProperties = propertiesToShow[1].lawyerProp;
    const selectedProperties = basicProperties.map((bProp) => {
        let content = props.lawyer[bProp.engName];
        if (bProp.engName === "classactions") {
          content = props.lawyer[bProp.engName].length;
        }
        if (bProp.engName === "expertise" && content !== null) {
            content = '';

            for (let num = 0; num < props.lawyer["expertise"].length; num++) {
                content += props.lawyer["expertise"][num];

                if (num + 1 < props.lawyer["expertise"].length) {
                    content += ', ';
                }
            }           
        }
        return { ...bProp, content: content };
      });

    return (
        <ResultBanner
            entityType={resultTypes.LAWYER}
            imgUrl="test"
            entityId={props.lawyer.id}
            selectedProperties = {selectedProperties}
            lawyer={props.lawyer}>
            <LawyerContent lawyer={props.lawyer}/>
        </ResultBanner>
    );
};

export default Lawyer;