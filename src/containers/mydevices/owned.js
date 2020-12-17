import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MarketCard from '../../components/devices/MarketCard';
import Layout from '../../hoc/Layout/Layout'; 
import API from '../../utils/axios';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid_container: {
    maxWidth: '80vw',
  }
}));

const images = [ '/unnamed1.png', '/unnamed2.jpeg', '/unnamed3.jpeg', '/unnamed4.jpeg', '/unnamed5.jpeg'];

const modifyOwnedDevicesData = incomingData => {
    console.log("API Response", incomingData)
    return incomingData.map(data => {
        data.id = data.deviceId
        data.coverImage = images[Math.floor(Math.random()*images.length)];
        return data
    })
}

export default function OwnedDevices(props) {
  const classes = useStyles();
  const [ownedDevices, setOwnedDevices] = useState([]);
  
  useEffect(() => {

    async function fetchData(){
      try {
        const response = await API.post('/devices/all');
        setOwnedDevices(modifyOwnedDevicesData(response.data.data));
      }catch(error){
        console.log(error);
      }
	  }
		fetchData();
	}, []);
  
  return (
    <Layout>
      <section>
        <Grid container justify='center'>
          <Grid container spacing={3}  className={classes.grid_container}>
            {
              ownedDevices.map((value) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={value.id}>
                  <MarketCard device={value} />
                </Grid>
              ))
            }
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                className={classes.button}
                endIcon={<Icon>add</Icon>}
                onClick={() => { window.location = "/devices/new"}}
              > New Device
              </Button>
            </Grid>
          </Grid>
        </Grid>  
      </section>
    </Layout>    
  );
}
