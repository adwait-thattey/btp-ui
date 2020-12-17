import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MarketCard from '../../components/devices/MarketCard';
import Layout from '../../hoc/Layout/Layout';
import API from '../../utils/axios';
import Table from "../../components/devices/Table";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import config from "../../config/config";
import {Tooltip} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

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

const modifyDevicedata = incomingdata => {

    return incomingdata.map(data => {
        data.data = data.dataJSON
        data.txId = <Button> {data.transactionId}</Button>
        return data
    })
}

export default function OwnedDeviceInfo(props) {
    const classes = useStyles();
    const [deviceData, setDeviceData] = useState([]);

    useEffect(() => {
      async function fetchData(){
        try {
          let response = await API.post(`/devices/data/all`, {"deviceId":props.match.params.deviceId});
          setDeviceData(modifyDevicedata(response.data.data));
        }catch(error){

            console.log("Direct data retrieve failed. Trying shared data")
            const res1 = await API.post(`/devices/`,{"deviceId":props.match.params.deviceId});
            const deviceData = res1.data.data
            let response = await API.post(`/devices/shared/data/all`, {"deviceId":props.match.params.deviceId, "ownerId":deviceData.owner});
            setDeviceData(modifyDevicedata(response.data.data));
            console.log(error);
        }
      }
      fetchData();
    }, []);

    const dataColumns = () => {
        return [
            {title: 'timestamp', field:'timestamp'},
            {title: 'data', field:'data'},
            {title: 'TxID', field:'txId'},
        ]
    }
    const { match: { params } } = props;
    return (
        <Layout>
            <section>
                <Grid container justify='center'>
                    <Table 
                        title={params.deviceId + " Data"} 
                        data={deviceData} 
                        columns={dataColumns()}  
                    />
                </Grid>
            </section>
        </Layout>
    );
}
