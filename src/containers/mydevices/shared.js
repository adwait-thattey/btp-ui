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
  grid_container: {
    maxWidth: '80vw',
  }
}));
const images = [ '/unnamed1.png', '/unnamed2.jpeg', '/unnamed3.jpeg', '/unnamed4.jpeg', '/unnamed5.jpeg'];

const modifySharedDeevicesData = incoming_data => {

    return incoming_data.map(data => {

        const obj = {
            id: data,
            owner:"Org2MSP",
            description:"Shared Device",
            coverImage : images[Math.floor(Math.random()*images.length)]
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
  
  return (
    <Layout>
      <section>
        <Grid container justify='center'>
          <Grid container spacing={3}  className={classes.grid_container}>
            {
              sharedDevices.map((value) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={value.id}>
                    <MarketCard device={value} actions={["Learn More",]} />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </section>
    </Layout>
  );
}
