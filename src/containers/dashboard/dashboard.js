import React, { Component } from 'react';
import Table from '../../components/devices/Table';
import Layout from '../../hoc/Layout/Layout'; 
import API from '../../utils/axios';
// import axios from 'axios';

class Dashboard extends Component {
    state = {
        data: [
            {
              "deviceID": "abcd123",
              "deviceName": "Device1",
              "deviceType": "temperature",
              "allowedIPs": "127.0.0.1,192,168,1,3",
              "allowedUsers": "adwait,brijesh",
              "latestData": "35.3"
            },
            {
              "deviceID": "abcd456",
              "deviceName": "Device2",
              "deviceType": "pressure",
              "allowedIPs": "127.0.0.1, 53.125.1.3",
              "allowedUsers": "adwait",
              "latestData": "10.33"
            },
            {
              "deviceID": "xyz123",
              "deviceName": "Device3",
              "deviceType": "temperature",
              "allowedIPs": "127.0.0.1, 192.168.1.3",
              "allowedUsers": "brijesh",
              "latestData": "42.2"
            },
            {
              "deviceID": "fgdg",
              "deviceName": "Device4",
              "deviceType": "speedometer",
              "allowedIPs": "127.0.0.1, 192.168.1.3",
              "allowedUsers": "adwait,brijesh",
              "latestData": "57.7"
            }
          ],
        columns: [
            {title: 'Device ID', field:'deviceID'},
            {title: 'Device Name', field:'deviceName'},
            {title: 'Device Type', field:'deviceType'},
            {title: 'Allowed IPs', field:'allowedIPs'},
            {title: 'Allowed Users', field:'allowedUsers'},
            {title: 'Latest Data', field:'latestData'},
        ]
    };

    async componentDidMount() {
        try {
            const res = await API.get('devices/');        
            this.setState({ data: this.getRequiredInfo(res.data) });
            console.log(res.data)
                    
        } catch(e) {
            console.log(e);
        }
    }

    getRequiredInfo = (devices) => {
        let obtainedDevices = [];

        devices.map(device => (
            obtainedDevices.push({
                deviceID: device.deviceID,
                deviceName: device.deviceName,
                deviceType: device.deviceType,
                allowedIPs: device.allowedIPs,
                allowedUsers: device.allowedUsers,
                latestData: device.latestData
            })
        ))

        return obtainedDevices;
    }

    render() {
        return (
            <Layout>
                <section>
                    <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                        Dashboard
                   </div>
                </section>
            </Layout>
        );
    }
}


export default Dashboard;