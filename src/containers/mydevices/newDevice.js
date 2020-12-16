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
import { TextareaAutosize } from '@material-ui/core';

class NewDevice extends Component{

  state = {
    deviceId: '',
    deviceName: '',
    deviceDescription: '',
    deviceData: '',
  }



  handleChange = input => event => {
    const formFields = {...this.state}
    formFields[input] = event.target.value;
    this.setState(formFields);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: this.state.deviceId,
      name: this.state.deviceName,
      description: this.state.deviceDescription,
      data: this.state.deviceData
    }
    try{
      async function postData(){
        const response = await API.post('/devices/new', data );
        console.log(response.data);
        window.location = "/devices/new";
        
      }
      postData();
    }catch(error){
      console.log(error);
    }
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
                        variant="outlined" />
                    </div>
  
                    <br></br>
  
                    <div>
                      <TextField 
                        required 
                        id="device-name" 
                        label="Device Name" 
                        onChange={this.handleChange('deviceName')}  
                        variant="outlined" />
                    </div>
                    <br></br>
  
                    <div>
                      <TextField 
                        required 
                        id="device-description" 
                        onChange={this.handleChange('deviceDescription')}
                        label="Device Description" 
                        variant="outlined" />
                    </div>
                    <br></br>
  
                    <div>
                      <TextField 
                        required 
                        id="device-data-description"  
                        onChange={this.handleChange('deviceData')}
                        label="Data Description" 
                        variant="outlined" />
                    </div>
                    <br></br>
  
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