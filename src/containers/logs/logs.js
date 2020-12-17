import React, { useEffect, useState, Component } from 'react';
import Grid from '@material-ui/core/Grid';
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

    return (
        <Layout>
            <section>
              <Grid container justify='center'>
                <Table 
                  title="Device Details" 
                  data={transactionData()} 
                  columns={transactionColumns()}  
                />
              </Grid>
            </section>
        </Layout>
    );
}

export default TransactionLog;