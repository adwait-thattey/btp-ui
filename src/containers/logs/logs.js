import React, { useEffect, useState, Component } from 'react';
import Table from '../../components/devices/Table';
import Layout from '../../hoc/Layout/Layout'; 
import API from '../../utils/axios';
// import axios from 'axios';

function TransactionLog(props) {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
      async function fetchData(){
        try {
          const response = await API.get('/transactions');
          setTransactions(response.data);
        }catch(error){
          console.log(error);
        }
      }
      fetchData();
    }, []);

    const transactionData = () => {
        return transactions;
    }

    const transactionColumns = () => {
        return [
            {title: 'Transaction ID', field:'txId'},
            {title: 'Timestamp', field:'timestamp'},
            {title: 'Details', field:'details'},
            {title: 'Endorsed By', field:'endorser'},
        ]
    }

    // state = {
    //     data: [
    //         {
    //           "txId": "tx1234",
    //           "details": "Register New Device 1234",
    //           "endorser": "Org1MSP",
    //           "timestamp":"December 1, 2020, 8:15:30 am"
    //         },
    //         {
    //             "txId": "tx4567",
    //             "details": "Add Data to device 4576",
    //             "endorser": "Org2MSP",
    //             "timestamp":"December 1, 2020, 6:32:26 am"
    //         },
    //         {
    //             "txId": "tx1112",
    //             "details": "Update Device 444",
    //             "endorser": "Org2MSP",
    //             "timestamp":"November 29, 2020, 6:14:55 pm"
    //         },
    //         {
    //             "txId": "tx888",
    //             "details": "Add Data to device 1123",
    //             "endorser": "Org1MSP",
    //             "timestamp":"November 29, 2020, 4:15:30 am"
    //         },
    //       ],
    //     columns: [
    //         {title: 'Transaction ID', field:'txId'},
    //         {title: 'Timestamp', field:'timestamp'},
    //         {title: 'Details', field:'details'},
    //         {title: 'Endorsed By', field:'endorser'},


    //     ]
    // };

    return (
        <Layout>
            <section>
                <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                    <Table title="Device Details" data={transactionData()} columns={transactionColumns()}  />
                </div>
            </section>
        </Layout>
    );
}


export default TransactionLog;