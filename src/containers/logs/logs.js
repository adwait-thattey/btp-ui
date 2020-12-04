import React, { Component } from 'react';
import Table from '../../components/devices/Table';
import Layout from '../../hoc/Layout/Layout'; 
import API from '../../utils/axios';
// import axios from 'axios';

class TransactionLog extends Component {
    state = {
        data: [
            {
              "txId": "tx1234",
              "details": "Register New Device 1234",
              "endorser": "Org1MSP",
            },
            {
                "txId": "tx4567",
                "details": "Add Data to device 4576",
                "endorser": "Org2MSP",
            },
            {
                "txId": "tx1112",
                "details": "Update Device 444",
                "endorser": "Org2MSP",
            },
            {
                "txId": "tx888",
                "details": "Add Data to device 1123",
                "endorser": "Org1MSP",
            },
          ],
        columns: [
            {title: 'Transaction ID', field:'txId'},
            {title: 'Details', field:'details'},
            {title: 'Endorsed By', field:'endorser'},

        ]
    };

    // async componentDidMount() {
    //     try {
    //         const res = await API.get('devices/');
    //         this.setState({ data: this.getRequiredInfo(res.data) });
    //         console.log(res.data)
    //
    //     } catch(e) {
    //         console.log(e);
    //     }
    // }
    //
    // getRequiredInfo = (devices) => {
    //     let obtainedDevices = [];
    //
    //     devices.map(device => (
    //         obtainedDevices.push({
    //             deviceID: device.deviceID,
    //             deviceName: device.deviceName,
    //             deviceType: device.deviceType,
    //             allowedIPs: device.allowedIPs,
    //             allowedUsers: device.allowedUsers,
    //             latestData: device.latestData
    //         })
    //     ))
    //
    //     return obtainedDevices;
    // }

    render() {
        return (
            <Layout>
                <section>
                    <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                        <Table title="Device Details" data={this.state.data} columns={this.state.columns}  />
                   </div>
                </section>
            </Layout>
        );
    }
}


export default TransactionLog;