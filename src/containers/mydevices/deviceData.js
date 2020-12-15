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

export default function OwnedDeviceInfo(props) {
    const classes = useStyles();
    const [deviceData, setDeviceData] = useState([]);


    useEffect(() => {
        setDeviceData( [
            {
                "deviceId":"abcd1234",
                "timestamp": "December 1, 2020, 8:15:30 am",
                "data": "data5",
                "txId": "tx05"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "December 1, 2020, 6:32:26 am",
                "data": "data4",
                "txId": "tx04"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "November 29, 2020, 6:14:55 pm",
                "data": "data3",
                "txId": "tx03"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "November 29, 2020, 4:15:30 am",
                "data": "data2",
                "txId": "tx02"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "November 29, 2020, 4:12:30 am",
                "data": "data1",
                "txId": "tx01"
            },
        ]
    )

    }, [])

    const dataColumns = () => {
        return [
            {title: 'TxID', field:'txId'},
            {title: 'timestamp', field:'timestamp'},
            {title: 'data', field:'data'},
        ]
    }

    const { match: { params } } = props;
    return (
        <Layout>
            <section>
                <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                    <Table title={params.deviceId + " Data"} data={deviceData} columns={dataColumns()}  />

                </div>
            </section>
        </Layout>

    );
}
