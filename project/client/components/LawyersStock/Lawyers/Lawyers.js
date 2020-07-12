import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { lawyersRequests } from "../../../utils/requests";
import Lawyer from "./Lawyer/Lawyer";
import Spinner from "../../spinner/spinner";

const Lawyers = (props) => {

    const { loading, error, data, refetch } = useQuery(
        lawyersRequests.getAllLawyers, {
            fetchPolicy: "network-only"   
        }
      );

    if (loading) {
    return <Spinner />
    }
    if (error) {
        console.log(error);  
        return "HARA"
    } 

  
    const lawyersElements = data.LawyerQueries.lawyers
    .map((lawyer) => {
        return <Lawyer lawyer={lawyer} key={lawyer.id} refetch={refetch}/>;
    });

    return (
        <div>
            {data.LawyerQueries.lawyers.length === 0 ? "לא קיימים משרדי עורכי דין במאגר" : lawyersElements}
            </div>
    );
};


export default Lawyers;