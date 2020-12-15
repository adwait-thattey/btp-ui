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
}));

export default function OwnedDevices(props) {
  const classes = useStyles();
  const [marketDevices, setMarketDevices] = useState([]);
  
  useEffect(() => {
      setMarketDevices([
        {
          "id": "abcd123",
          "owner": "Org1MSP",
          "name": "Adwait's Device 1",
          "createdOn":"Nov 1, 2020",
          "type": "type1",
          "description": "Adwait's Device 1",
          "lastUpdated": 5,
          "coverImage":"/reptile.jpg"
        },
        {
            "id": "abcd345",
            "owner": "Org1MSP",
            "name": "Siddhant's Device 3",
            "createdOn":"Oct 22, 2020",
            "type": "type1",
            "description": "Siddhant's third device",
            "lastUpdated": 21,
            "coverImage":"/reptile.jpg"
          },
          {
            "id": "kkk12",
            "owner": "Org1MSP",
            "name": "Mahhamad's Device 2",
            "createdOn":"July 1, 2020",
            "type": "type1",
            "description": "Mahammad's 2nd Device",
            "lastUpdated": 7,
            "coverImage":"/reptile.jpg"
          },
          {
            "id": "gfg45",
            "owner": "Org1MSP",
            "name": "Adwait Device 5",
            "createdOn":"Oct 4, 2020",
            "type": "type1",
            "description": "Adwait's Device 5",
            "lastUpdated": 0,
            "coverImage":"/reptile.jpg"
          },
          {
            "id": "lalapop",
            "owner": "Org1MSP",
            "name": "Ad Dev 7",
            "createdOn":"Nov 3, 2020",
            "type": "type1",
            "description": "Adwait's Device 7",
            "lastUpdated": 53,
            "coverImage":"/reptile.jpg"
          },
        
      ])
  }, [])
  
  return (
    <Layout>
    <section>
        <div style={ {width: '75%', textAlign:'center', marginLeft:'15vw', marginBottom:'50px'}}>
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* <Grid item xs={12}>
                <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>xs=6</Paper>
                </Grid> */}
                {marketDevices.map((value) => (
                  <Grid item xs={4}>
                  <MarketCard device={value} />
                  </Grid>
                ))}
                <Grid item xs={4}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        endIcon={<Icon>add</Icon>}
                        onClick={() => { window.location = "/devices/new"}}
                    >
                        New Device
                    </Button>
                </Grid>
                {/* <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                <Paper className={classes.paper}>xs=3</Paper>
                </Grid> */}
            </Grid>
        </div>
       </div>
    </section>
    </Layout>
    
  );
}
