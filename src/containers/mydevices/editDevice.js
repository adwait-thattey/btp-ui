import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../../hoc/Layout/Layout';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/axios';
import {Checkbox, Switch, TextareaAutosize} from '@material-ui/core';

class EditDevice extends Component{

  state = {
    deviceId: this.props.match.params.deviceId,
    dataDescription: '',
    deviceDescription: '',
  }

  handleChange = input => event => {
    const formFields = {...this.state}
    formFields[input] = event.target.value;
    this.setState(formFields);
  };

  handleSubmit = async (event) => {
    console.log("Starting Submission for Create Device")
    event.preventDefault();
    const getResponse = await API.post('/devices/', {"deviceId":"o1dev2"});
    const data = {
      deviceId: this.state.deviceId,
      // name: this.state.deviceName,
      description: this.state.deviceDescription,
      on_sale:getResponse.data.data.onSale
    }
    try{
      async function postData(){
        console.log("Input data", data)
        const response = await API.post('/devices/update', data );
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
          <Grid container justify='center' >     
              <Paper style={{width: '400px', padding: '40px', boxShadow:'0px 0px 2px 1px grey'}}>     
                <form className={classes.form} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                  <Grid container justify='center' spacing={3} direction="column" alignItems="center" > 
                    <Grid item xs={12}>
                      <TextField 
                        multiline 
                        id="device-id" 
                        label="Device ID" 
                        onChange={this.handleChange('deviceId')} 
                        variant="outlined"
                        value={this.state.deviceId}
                      />
                    </Grid>
                    <Grid item xs={12}>                    
                      <TextField
                          multiline
                          id="device-description"
                          onChange={this.handleChange('deviceDescription')}
                          label="Device Description"
                          variant="outlined"
                          value={this.state.deviceDescription}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<Icon>send</Icon>}
                          type="submit"
                        > Submit
                      </Button>
                    </Grid>  
                  </Grid> 
                </form>
              </Paper>
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

export default EditDevice;