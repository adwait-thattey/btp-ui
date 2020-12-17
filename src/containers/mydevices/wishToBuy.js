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

class WishToBuy extends Component{

  state = {
    deviceId: this.props.match.params.deviceId,
    sellerId:'',
    tradeId:'',
    tradePrice: '',
    tradeRevokeTime: '',

  }



  handleChange = input => event => {
    console.log("Handle change called")
    const formFields = {...this.state}
    formFields[input] = event.target.value;
    this.setState(formFields);


    console.log(this.state)

  };

  handleSubmit = (event) => {
    console.log("Starting Submission for Create Device")
    console.log(this.state)
    const inputdata = this.state
    event.preventDefault();
    const data = {
      deviceId: this.state.deviceId,
      tradeId: this.state.tradeId,
      seller_id: this.state.sellerId,
      tradePrice: parseInt(this.state.tradePrice),
      revoke_time: new Date(this.state.tradeRevokeTime).getTime()/1000,
    }
    try{
      async function postData(){
        const response = await API.post('/market/devices/interesttokens/submit', data );
        console.log(response.data);
        window.location = `/devices/shared/${inputdata.deviceId}`;
        
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
              <Paper style={{width: '400px', padding: '40px', boxShadow:'0px 0px 2px 1px grey'}}>
                <form className={classes.form} onSubmit={this.handleSubmit} noValidate autoComplete="off">
                  <Grid container justify='center' spacing={3} direction="column" alignItems="center" >
                    <Grid item xs={12}>
                      <TextField 
                        required 
                        id="device-id" 
                        label="Device ID" 
                        onChange={this.handleChange('deviceId')} 
                        variant="outlined"
                        value={this.state.deviceId}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                          required
                          id="trade-id"
                          label="Trade ID"
                          onChange={this.handleChange('tradeId')}
                          variant="outlined"
                          value={this.state.tradeId}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                          required
                          id="seller-id"
                          label="Seller ID"
                          onChange={this.handleChange('sellerId')}
                          variant="outlined"
                          value={this.state.sellerId}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                          required
                          id="device-description"
                          onChange={this.handleChange('tradePrice')}
                          label="Trade Price"
                          variant="outlined"
                          value={this.state.tradePrice}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                          id="datetime-local"
                          label="Revoke Time"
                          type="datetime-local"
                          defaultValue="2020-12-17T00:00"
                          // className={classes.textField}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          variant="outlined"
                          onChange={this.handleChange("tradeRevokeTime")}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>send</Icon>}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
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

export default WishToBuy;