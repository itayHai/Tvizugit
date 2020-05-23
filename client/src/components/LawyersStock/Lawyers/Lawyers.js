import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import Modal from '../../modal/modal';
import { useParams} from "react-router";
import ResultBanner from '../../resultBanner/resultBanner';
import { dummyData } from '../../../utils/globalConsts';
import Lawyer from "./Lawyer/Lawyer";

const lawyersData = [{
        id : "5ec1109c32cbb037fad83823",
        name: "המשרד של טלי",
        description: "תיאור של המשרד",
        expertise:["נזיקין", "חוזים", "חברות"],
        email:"t@gmail.com",
        address:"רחוב שקר כלשהו",
        phone:"0546875959",
        seniority:50,
        img:{"$binary":{"base64":"","subType":"00"}},
        classactions: dummyData,
    },
    {
        id : "5ec1109c32cbb037fad83824",
        name: "2 המשרד של טלי",
        description: "תיאור של המשרד",
        expertise:["נזיקין"],
        email:"t@gmail.com",
        address:"רחוב שקר כלשהו",
        phone:"0546875959",
        seniority:50,
        img:{"$binary":{"base64":"","subType":"00"}},
        classactions: dummyData,
        },

];

const Lawyers = (props) => {

    const lawyersElements = lawyersData
    .map((lawyer) => {
        return <Lawyer lawyer={lawyer} key={lawyer.id} />;
    });

    return (
        <div>
            {lawyersData.length === 0 ? "לא קיימים משרדי עורכי דין במאגר" : ""}
            {lawyersElements}
        </div>
    );
};



export default Lawyers;