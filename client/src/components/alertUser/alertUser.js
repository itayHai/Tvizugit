import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

const AlertUser = (props) => {

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    return (
        <div>
            <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
                <Alert onClose={props.handleClose} severity={props.severity}>
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

AlertUser.propTypes = {
    severity: PropTypes.string //error, warning, info, success
  };
export default AlertUser;