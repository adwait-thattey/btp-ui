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
import {Checkbox, Switch, TextareaAutosize} from '@material-ui/core';

class NewDevice extends Component{

  state = {
    deviceId: '',
    dataDescription: '',
    deviceDescription: '',
    deviceSecret: '',

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
      async function postData(){
        const response = await API.post('/devices/register', data );
        console.log(response.data);
        window.location = `/devices/owned/${data.deviceId}`;
        
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