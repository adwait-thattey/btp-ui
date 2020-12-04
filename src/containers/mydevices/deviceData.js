import React, { Component } from 'react';
import Table from '../../components/devices/Table';
import Layout from '../../hoc/Layout/Layout'; 
import API from '../../utils/axios';
import {Card, CardActions} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import axios from 'axios';

class DeviceData extends Component {
    state = {
        deviceInfo: [
            {"key":"Device Id","value":"abcd1234"},
            {"key":"Owner","value":"Org1MSP"},
            {"key":"Description","value":"abcd1234 Device Description"},
            {"key":"Data Description","value":"Data Description"},
            {"key":"On Sale", "value":true}
        ],
        deviceInfoColumns : [
            {title: '', field:'key'},
            {title: '', field:'value'}
        ],
        sharedInfo: [
            {
                "target":"Org2MSP",
                "status":"shared",
                "actions":[
                    "Revoke", "View Trade Agreement"
                ].join(",  ")
            },
            {
                "target":"Org3MSP",
                "status":"pending",
                "actions":[
                    "View Interest Token", "Approve", "Reject"
                ].join(",  ")
            },
        ],
        sharedColumns:[
            {title: 'Target', field:'target'},
            {title: 'Status', field:'status'},
            {title: 'Actions', field:'actions'},
        ]
        ,
        data: [
            {
                "deviceId":"abcd1234",
                "timestamp": "1234",
                "data": "data5",
                "txId": "tx05"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "1111",
                "data": "data4",
                "txId": "tx04"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "999",
                "data": "data3",
                "txId": "tx03"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "900",
                "data": "data2",
                "txId": "tx02"
            },
            {
                "deviceId":"abcd1234",
                "timestamp": "800",
                "data": "data1",
                "txId": "tx01"
            },
          ],
        dataColumns: [
            {title: 'Timestamp', field:'timestamp'},
            {title: 'Data', field:'data'},
            {title: 'Transaction ID', field:'txId'}
        ]
    };

    /*async componentDidMount() {
        const { match: { params } } = this.props;
        console.log("Params", params);
        try {
            const res = await API.get('devices/');
            this.setState({ data: this.getRequiredInfo(res.data) });
            console.log(res.data)

        } catch(e) {
            console.log(e);
        }
    }

    getRequiredInfo = (data) => {
        // const { match: { params } } = this.props;
        let obtainedData = [];

        data.map(device => (
            obtainedData.push({
                deviceId: device.deviceId,
                timestamp: device.timestamp,
                data: device.data,
                txId: device.txId
            })
        ))

        return obtainedData;
    }*/

    render() {
        return (
            <Layout>
                <section>

                    <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                        <Table title="Device Details" data={this.state.deviceInfo} columns={this.state.deviceInfoColumns}  />
                    </div>

                    <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                        <Table title="Sharing Details" data={this.state.sharedInfo} columns={this.state.sharedColumns}  />
                    </div>

                    <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                        <Table title="Data" data={this.state.data} columns={this.state.dataColumns}  />
                    </div>

                </section>
            </Layout>
        );
    }
}


export default DeviceData;