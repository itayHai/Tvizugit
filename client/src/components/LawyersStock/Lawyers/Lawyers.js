import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import Modal from '../../modal/modal';
import { useParams} from "react-router";
import ResultBanner from '../../resultBanner/resultBanner'

const data = [{"name":"שם המשרד","engName":"lawyer","content":"גולדמן ושותפיו"},{"name":"ותק","engName":"seniority","content":"50 שנים"},{"name":"התמחות","engName":"expertise","content":"נזיקין"},{"name":"כמות תיקים באתר","engName":"NumOfCases","content":2},{"name":"אחוזי ההצלחה","engName":"SuccessRate","content":"50%"}]

const Lawyers = (props) => {
    return (
        <div class="padding:50px">
    <ResultBanner selectedProperties = {data} />
    <ResultBanner selectedProperties = {data} />
    <ResultBanner selectedProperties = {data} />
    </div>
    );
};

export default Lawyers;