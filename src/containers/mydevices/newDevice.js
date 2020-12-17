import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../hoc/Layout/Layout';
// import DeleteIcon from '@material-ui/icons/Delete';
// import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/axios';
import {Checkbox, Snackbar, Switch, TextareaAutosize} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

class NewDevice extends Component{

  state = {
    deviceId: '',
    dataDescription: '',
    deviceDescription: '',
    deviceSecret: '',
    snackbar_state : false

  }



  handleChange = input => event => {
    const formFields = {...this.state}
    formFields[input] = event.target.value;
    this.setState(formFields);


  };

  handleSubmit = (event) => {
    console.log("Starting Submission for Create Device")
    event.preventDefault();
    const data = {
      deviceId: this.state.deviceId,
      // name: this.state.deviceName,
      description: this.state.deviceDescription,
      dataDescription: this.state.dataDescription,
      deviceSecret: this.state.deviceSecret
    }
    try{
      const postData = async () =>{
        const response = await API.post('/devices/register', data );
        console.log(response.data);

        const filedownload_elem = document.getElementById('hidden-download-button')
        filedownload_elem.href = `data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(response.data.data.certificate)
        )}`

        filedownload_elem.download = `${data.deviceId}.id`

        filedownload_elem.click()

        const cur_state = this.state
        cur_state.snackbar_state = true
        this.setState(cur_state)

        setTimeout(()=> {
          window.location = `/devices/owned/${data.deviceId}`;
        }, 3500)

      }
      postData();
    }catch(error){
      console.log(error);
    }
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    const cur_state = this.state
    cur_state.snackbar_state = false
    this.setState(cur_state)
  }

  handleSnackbarOpen = () => {
    const cur_state = this.state
    cur_state.snackbar_state = true
    this.setState(cur_state)
  }

  Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  render(){
    return (
      <Layout>
        <section>
          <Grid container spacing={3}>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <form className={classes.form} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                  <div>
                    <div>
                      <TextField 
                        required 
                        id="device-id" 
                        label="Device ID" 
                        onChange={this.handleChange('deviceId')} 
                        variant="outlined"
                        value={this.state.deviceId}
                      />
                    </div>
  
                    <br></br>

                    <div>
                      <TextField
                          required
                          id="device-description"
                          onChange={this.handleChange('deviceDescription')}
                          label="Device Description"
                          variant="outlined"
                          value={this.state.deviceDescription}
                      />
                    </div>
                    <br></br>

{/*                    <div>
                      <TextField 
                        required 
                        id="device-dataDescription"
                        label="Data Description"
                        onChange={this.handleChange('dataDescription')}
                        variant="outlined" />
                    </div>
                    <br></br>*/}
  

  
                    <div>
                      <TextField 
                        required 
                        id="device-data-description"  
                        onChange={this.handleChange('dataDescription')}
                        label="Data Description" 
                        variant="outlined"
                        value={this.state.dataDescription}
                      />
                    </div>
                    <br></br>

                    <div>
                      <TextField
                          required
                          id="device-secret"
                          onChange={this.handleChange('deviceSecret')}
                          label="Device Secret"
                          variant="outlined"
                          value={this.state.deviceSecret}
                      />
                    </div>
                     <br/>
                    {/*<div>
                      <Switch
                          checked={false}
                          onChange={this.handleChange('onSale')}
                          name="deviceOnSale"
                          // inputProps={{ 'aria-label': 'secondary checkbox' }}
                      />
                      <Checkbox
                          checked={false}
                          onChange={this.handleChange('onSale')}
                          inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                    </div>*/}
                    <br/><br/>
                    <div>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                    <a
                        id="hidden-download-button"
                        href={`data:text/json;charset=utf-8,${encodeURIComponent(
                            JSON.stringify({"hello":"world", "new":"data"})
                        )}`}
                        style={{display:'none'}}
                        download="certificate.json"
                    >
                      {`Download Json`}
                    </a>

                    <Snackbar open={this.state.snackbar_state} autoHideDuration={6000} onClose={this.handleSnackbarClose}>
                      <this.Alert onClose={this.handleSnackbarClose} severity="success">
                        Device Created Successfully
                      </this.Alert>
                    </Snackbar>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </section>
      </Layout>
    );
  }
}
const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default NewDevice;