import React, { Component } from 'react';
import Table from '../../components/devices/Table';
import Layout from '../../hoc/Layout/Layout'; 

class Dashboard extends Component {
    state = {
        data: [
            {id: 1, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '323' },
            {id: 2, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '32' },
            {id: 3, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '32' },
            {id: 4, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '0.585' },
            {id: 5, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '56' },
            {id: 6, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '323' },
            {id: 7, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '32' },
            {id: 8, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '32' },
            {id: 9, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '0.585' },
            {id: 10, device_name: 'temp sensor', type: 'sensor', allowed_ips : ['11.23.44.53', '22.44.44.22'], allowed_users: ['john smith'], latest_data: '56' },

        ],
        columns: [
            {title: 'Device ID', field:'id'},
            {title: 'Device Name', field:'device_name'},
            {title: 'Device Type', field:'type'},
            {title: 'Allowed IPs', field:'allowed_ips'},
            {title: 'Allowed Users', field:'allowed_users'},
            {title: 'Latest Data', field:'latest_data'},
        ]
    };

    async componentDidMount() {
        try {
            
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <Layout>
                <section>
                    <div style={ {width: '75%', textAlign:'center', marginLeft:'150px'}}>
                        <Table data={this.state.data} columns={this.state.columns}  />
                   </div>
                </section>
            </Layout>
        );
    }
}


export default Dashboard;