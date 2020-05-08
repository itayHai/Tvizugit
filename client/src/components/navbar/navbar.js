import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import {Toolbar, Button } from '@material-ui/core'
import GavelIcon from '@material-ui/icons/Gavel';
import PersonIcon from '@material-ui/icons/Person';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ManageLogin from "../login/manageLogin";
import Modal from "../modal/modal";
import { setMode } from '../../store/user';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CustomerIcon from '../../images/icons/customer_icon.png';
import './navbar.css';

const Navbar = (props) => {

  const loggedInUser = useSelector(state => state.user.loggedInUser)  
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    dispatch(setMode("login"));
  };

  const handleClose = () => {
    setOpen(false);
  };

  function isLoginUser(){
    if(loggedInUser.displayName == null){
      return false;
    }
    else{
      return true;
    }
  }

  return (
      <AppBar position="static">
        <Toolbar className="navbar">
          <Link to="/" className="link">
            <GavelIcon className="icon" fontSize="large"/>
            <div className="titleContainer">
              <label className="mainTitle">תביצוגית</label>
              <label className="slogan">לתבוע בידיים טובות</label>
            </div>
          </Link>
          <Link to="/classActionsStock" className="link" >
            <h3>מאגר התביעות</h3>
          </Link>
          <Link to="/lawyers" className="link" >
            <h3>מאגר עורכי הדין</h3>
          </Link>
          <div className="login" style={{display: isLoginUser()? "none" : "block"}} >
            <Button 
                    onClick={handleOpen} 
                    className="login"
                    variant="contained"
                    > <PersonIcon/> כניסה
            </Button> 
            <Modal show={open} onClose={handleClose}>
              <ManageLogin close={handleClose} />
            </Modal>
          </div>
          <div className="login" style={{display: isLoginUser()? "block" : "none"}}>
            <img className="Icon" src={CustomerIcon} alt="Customer"/>
            <label>{loggedInUser.displayName}</label>
          </div>
        </Toolbar>
      </AppBar>
  );
}

export default withRouter(Navbar)