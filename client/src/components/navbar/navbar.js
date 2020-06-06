import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Button } from "@material-ui/core";
import GavelIcon from "@material-ui/icons/Gavel";
import PersonIcon from "@material-ui/icons/Person";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ManageLogin from "../login/manageLogin";
import Modal from "../modal/modal";
import { setMode, changeLoggedInUser, LoginUser } from '../../store/user';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CustomerIcon from '../../images/icons/customer_icon.png';
import LogoutIcon from '../../images/icons/logout.png';
import './navbar.css';
import { changeFilter } from "../../store/classAction";

const Navbar = (props) => {
  const loggedInUser = useSelector(state => state.user.loggedInUser)
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const localUser = {
    email: localStorage.getItem('localEmail'),
    password: localStorage.getItem('localPassword')
  }

  if ( !localUser.email !== 'undefined' && localUser.password !== 'undefined' ){
    dispatch(LoginUser(localUser))
  }

  const handleOpen = () => {
    setOpen(true);
    dispatch(setMode("login"));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    dispatch(changeLoggedInUser({}));
  };

  const show = Object.keys(loggedInUser).length !== 0 ?
    <div>
      <img className="Icon" src={CustomerIcon} alt="Customer" />
      <label> {loggedInUser.displayName} <img onClick={logout} className="Icon" src={LogoutIcon} alt="Logout" /></label>
    </div> :
    <Button onClick={handleOpen}
      className="login"
      variant="contained"> <PersonIcon /> כניסה  </Button>;

  return (
    <AppBar position="static">
      <Toolbar className="navbar">
        <Link to="/" className="link">
          <GavelIcon className="icon" fontSize="large" />
          <div className="titleContainer">
            <label className="mainTitle">תביצוגית</label>
            <label className="slogan">לתבוע בידיים טובות</label>
          </div>
        </Link>
        <Link to="/classActionsStock/" className="link" onClick={() => dispatch(changeFilter())}>
          <h3>מאגר התביעות</h3>
        </Link>
        <Link to="/lawyers" className="link" >
          <h3>מאגר עורכי הדין</h3>
        </Link>
        {
          (Object.keys(loggedInUser).length !== 0 && loggedInUser.role.engName === "admin") &&
          < Link to="/reportedClassActions" className="link" >
            <h3>ניהול תובענות מדווחות</h3>
          </Link>
        }
      <div className="login">
        {show}
      </div>
      <Modal show={open} onClose={handleClose}>
        <ManageLogin close={handleClose} />
      </Modal>
        </Toolbar>
      </AppBar >
  );
};

export default withRouter(Navbar);