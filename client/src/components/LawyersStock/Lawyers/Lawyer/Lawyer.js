import React from "react";
import ResultBanner from "../../../resultBanner/resultBanner";
import { useDispatch } from "react-redux";
import { propertiesToShow } from "../../../../utils/globalConsts";
import LawyerContent from "./LawyerContent/LawyerContent";
import { string } from "prop-types";

const Lawyer = (props) => {
    const basicProperties = propertiesToShow[1].lawyerProp;
    const selectedProperties = basicProperties.map((bProp) => {
        let content = props.lawyer[bProp.engName];
        if (bProp.engName === "classactions") {
          content = props.lawyer[bProp.engName].length;
        }
        if (bProp.engName === "expertise") {
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
            imgUrl="test"
            entityId={props.lawyer.id}
            selectedProperties = {selectedProperties}>
            <LawyerContent lawyer={props.lawyer}/>
        </ResultBanner>
    );
};

export default Lawyer;