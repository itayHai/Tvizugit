import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import Modal from '../../modal/modal';
import { useParams} from "react-router";
import ResultBanner from '../../resultBanner/resultBanner';
import { dummyData } from '../../../utils/globalConsts';
import { lawyersRequests } from "../../../utils/requests";
import Lawyer from "./Lawyer/Lawyer";

const Lawyers = (props) => {
    const { loading, error, data } = useQuery(
        lawyersRequests.getAllLawyers
      );
    if (loading) return <p>Loading...</p>;
    if (error) console.log(error);  

  
    const lawyersElements = data.LawyerQueries.lawyers
    .map((lawyer) => {
        return <Lawyer lawyer={lawyer} key={lawyer.id} />;
    });

    return (
        <div>
            {data.LawyerQueries.lawyers.length === 0 ? "לא קיימים משרדי עורכי דין במאגר" : ""}
            {lawyersElements}
        </div>
    );
};


export default Lawyers;