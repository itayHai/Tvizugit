import React from "react";
import { useSelector } from 'react-redux';
import Login from "./login";
import Register from "./register";
import RegisterUser from "./registerUser";
import RegisterLawyer from "./registerLawyer";
import RegisterLawyerOffice from "./registerLawyerOffice";

function ManageLogin (props) {
    
    const mode = useSelector(state => state.users.mode)
    let showMode = <Login close={()=>props.close()}/>;
    
    switch(mode){
        case "register":
            showMode = <Register close={()=>props.close()}/>;
            break;
        case "user":
            showMode = <RegisterUser close={()=>props.close()}/>;
            break;
        case "lawyerProfile":
            showMode = <RegisterLawyer close={()=>props.close()}/>;
            break;
        case "lawyerOffice":
            showMode = <RegisterLawyerOffice close={()=>props.close()}/>;
            break;
        default:
            showMode = <Login close={()=>props.close()}/>;
    }

    return (
        <div> 
            { showMode }
        </div>
        )
    }

export default ManageLogin;