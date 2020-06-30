import React, {useState} from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField,
  } from "@material-ui/core";
import classes from "./EditLawyer.module.css";
import GavelIcon from '@material-ui/icons/Gavel';
import SaveIcon from '@material-ui/icons/Save'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { specialties } from "../../../../../utils/globalConsts";
import { useMutation } from "@apollo/react-hooks";
import { lawyersRequests } from '../../../../../utils/requests';
import AlertUser from '../../../../alertUser/alertUser';

const EditLawyer = (props) => {
  const [editLawyer, setEditLawyer] = useState({...props.lawyer});  
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isErrorName, SetIsErrorName] = useState(false);
  const [isErrorDesc, SetIsErrorDesc] = useState(false);
  const [isErrorAddress, SetIsErrorAddress] = useState(false);
  const [isErrorPhone, SetIsErrorPhone] = useState(false);
  const [isErrorSen, SetIsErrorSen] = useState(false);
  const [isErrorExp, SetIsErrorExp] = useState(false);
  const [updateLawyer] = useMutation(lawyersRequests.updateLawyer);

    const handleChange = (event) => {
      editLawyer[event.target.name] = event.target.value;
    };

    const handleChangeAutoField = (event, values) => {
      editLawyer["expertise"] = values;
    }

    const handleSave= () => {
      if( editLawyer.description === "") {
        SetIsErrorDesc(true);
      } else {
        SetIsErrorDesc(false);  
      } 
      
      if ( editLawyer.address === "" ) {
        SetIsErrorAddress(true);
      } else {
        SetIsErrorAddress(false);
      }

      if ( editLawyer.name === "" ) {
        SetIsErrorName(true);
      } else {
        SetIsErrorName(false);
      }

      if ( editLawyer.phone === "" ) {
        SetIsErrorPhone(true);
      } else {
        SetIsErrorPhone(false);
      }

      if ( editLawyer.seniority === "" ) {
        SetIsErrorSen(true);
      } else {
        SetIsErrorSen(false);
      }

      if ( editLawyer.expertise.length < 1 ) {
        SetIsErrorExp(true);
      } else {
        SetIsErrorExp(false);
      }
      
      if (!(editLawyer.description === "" || 
            editLawyer.address === ""  || 
            editLawyer.name === "" || 
            editLawyer.phone === "" || 
            editLawyer.seniority === "" || 
            editLawyer.expertise.length < 1 )) {
        updateLawyer ({
          variables:
          {
              id: editLawyer.id,
              lawyer:
              {
                  name: editLawyer.name,
                  description: editLawyer.description ,
                  expertise: editLawyer.expertise,
                  email: editLawyer.email,
                  address: editLawyer.address,
                  phone: editLawyer.phone,
                  seniority: editLawyer.seniority,
                  img: editLawyer.img,
              },              
          }
      }).then(data => {
        props.close();
      })
        
      }
    }

    return(
      <div>
        <Dialog
        open={props.editOpen}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={() => props.close()}
      >
      <div className={classes.main}>
            <div className={classes.Center}>
                <h2> <GavelIcon/> עריכת משרד עו"ד בתביצוגית</h2>
                <hr color="#e6e6e6"/>
            </div>
            <TextField label="שם המשרד" 
                        name="name"
                        required
                        error={isErrorName}
                        fullWidth={true}
                        multiline
                        onChange={handleChange}
                        rowsMax={5}
                        className={classes.Input}
                        defaultValue={props.lawyer.name}/><br/><br/>
            <TextField label="תיאור המשרד" 
                        name="description"
                        required
                        error={isErrorDesc}
                        fullWidth={true}
                        multiline                        
                        rowsMax={5}
                        onChange={handleChange}
                        className={classes.Input}
                        defaultValue={props.lawyer.description}/><br/><br/>
            <Autocomplete multiple
                          name="expertise"
                          required
                          multiline
                          options={specialties}
                          renderInput={(params) => (
                          <TextField {...params}
                                     variant="standard"
                                     name="expertise"
                                     id="expertise"
                                     error={isErrorExp}
                                     label="תחומי התמחות של המשרד"/>)}
                                     onChange={handleChangeAutoField}
                                     defaultValue={props.lawyer.expertise}/><br/>
            <TextField label="כתובת המשרד"
                        name="address"
                        required
                        error={isErrorAddress}
                        fullWidth={true}
                        onChange={handleChange}
                        className={classes.Input}
                        defaultValue={props.lawyer.address}/><br/><br/>
            <TextField label="טלפון המשרד"
                        name="phone"
                        required
                        error={isErrorPhone}
                        fullWidth={true}
                        onChange={handleChange}
                        type="tel"
                        className={classes.Input}
                        defaultValue={props.lawyer.phone}/><br/><br/>
            <TextField label="ותק המשרד (בשנים)"
                        name="seniority"
                        required
                        error={isErrorSen}
                        defaultValue={0}
                        onChange={handleChange}
                        fullWidth={true}
                        type="number"
                        className={classes.Input}
                        defaultValue={props.lawyer.seniority}/><br/>
            <div className={classes.buttons}>
                <Button variant="contained" onClick={() => props.close()} size="small">
                    ביטול
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    className={classes.saveButton}
                    onClick={handleSave}
                >שמירה</Button>
            </div>
        </div>
      </Dialog>
      {/* <AlertUser open={openMessage} handleClose={setOpenMessage(false)} message={message} severity="error" /> */}
      </div>
    );
};

export default EditLawyer; 