import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Button } from '@material-ui/core'
import GavelIcon from '@material-ui/icons/Gavel';
import PersonIcon from '@material-ui/icons/Person';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Login from "../login/login";
import Modal from "../modal/modal";

import './navbar.css' 

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//function Navbar() {
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
          <Button onClick={handleOpen} className="login"
                  variant="contained"
          > <PersonIcon/> כניסה
          </Button>
          <Modal show={open} onClose={handleClose}>
          <Login close={handleClose} />
        </Modal>    
        </Toolbar>
      </AppBar>
  );
}

export default withRouter(Navbar)