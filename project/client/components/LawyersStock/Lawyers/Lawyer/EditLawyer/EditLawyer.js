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
  const editLawyer = {...props.lawyer};  
  const [openMessage, setOpenMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [updateLawyer] = useMutation(lawyersRequests.updateLawyer);

    const handleChange = (event) => {
      editLawyer[event.target.name] = event.target.value;
    };

    const handleChangeAutoField = (event, values) => {
      editLawyer["expertise"] = values;
    }

    const handleSave= () => {
      if( editLawyer.description === "" ||
      editLawyer.address === "" ||
      editLawyer.phone === "" ||
      editLawyer.name === "" || 
      editLawyer.expertise.length < 1 || 
      editLawyer.seniority === ""){
  
      alert("יש למלא את כל השדות");
      }
      else {
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
                        fullWidth={true}
                        multiline
                        onChange={handleChange}
                        rowsMax={5}
                        className={classes.Input}
                        defaultValue={props.lawyer.name}/><br/><br/>
            <TextField label="תיאור המשרד" 
                        name="description"
                        required
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
                                     label="תחומי התמחות של המשרד"/>)}
                                     onChange={handleChangeAutoField}
                                     defaultValue={props.lawyer.expertise}/><br/>
            <TextField label="כתובת המשרד"
                        name="address"
                        required
                        fullWidth={true}
                        onChange={handleChange}
                        className={classes.Input}
                        defaultValue={props.lawyer.address}/><br/><br/>
            <TextField label="טלפון המשרד"
                        name="phone"
                        required
                        fullWidth={true}
                        onChange={handleChange}
                        type="tel"
                        className={classes.Input}
                        defaultValue={props.lawyer.phone}/><br/><br/>
            <TextField label="ותק המשרד (בשנים)"
                        name="seniority"
                        required
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