import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MarketCard from '../../components/devices/MarketCard';
import Layout from '../../hoc/Layout/Layout'; 
import API from '../../utils/axios';

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

const modifySharedDeevicesData = incoming_data => {

    return incoming_data.map(data => {

        const obj = {
            id: data,
            owner:"Org2MSP",
            description:"Shared Device",
            coverImage : "/paella.jpg"
        }

        return obj
    })
}

export default function SharedDevices(props) {
  const classes = useStyles();
  const [sharedDevices, setSharedDevices] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await API.post('/devices/shared/list');
        setSharedDevices(modifySharedDeevicesData(response.data.data));
      }catch(error){
        console.log(error);
      }
	  }
		fetchData();
	}, []);

  // useEffect(() => {
  //     setSharedDevices([
  //       {
  //         "id": "abcd123",
  //         "owner": "AdwaitOrg",
  //         "name": "Shared Device 1",
  //         "createdOn":"Nov 1, 2020",
  //         "type": "type1",
  //         "description": "Adwait's Device 1",
  //         "lastUpdated": 5,
  //         "coverImage":"/paella.jpg"
  //       },
  //       {
  //           "id": "abcd345",
  //           "owner": "SiddhantOrg",
  //           "name": "Shared Device 2",
  //           "createdOn":"Oct 22, 2020",
  //           "type": "type1",
  //           "description": "Siddhant's third device",
  //           "lastUpdated": 21,
  //           "coverImage":"/paella.jpg"
  //         },
  //         {
  //           "id": "kkk12",
  //           "owner": "MahhamadOrg",
  //           "name": "Mahhamad's Device 2",
  //           "createdOn":"July 1, 2020",
  //           "type": "type1",
  //           "description": "Mahammad's 2nd Device",
  //           "lastUpdated": 7,
  //           "coverImage":"/paella.jpg"
  //         },
  //         {
  //           "id": "gfg45",
  //           "owner": "AdwaitOrg",
  //           "name": "Adwait Device 5",
  //           "createdOn":"Oct 4, 2020",
  //           "type": "type1",
  //           "description": "Adwait's Device 5",
  //           "lastUpdated": 0,
  //           "coverImage":"/paella.jpg"
  //         },
        
  //     ])
  // }, [])
  
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
                {sharedDevices.map((value) => (
                  <Grid item xs={4} key={value.id}>
                  <MarketCard device={value} actions={["Learn More",]} />
                  </Grid>
                ))}
                
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
