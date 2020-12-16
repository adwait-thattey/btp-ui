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

const modifyDevicedata = incomingdata => {

    return incomingdata
}

export default function OwnedDeviceInfo(props) {
    const classes = useStyles();
    const [deviceInfo, setDeviceInfo] = useState([]);
    const [deviceTradeAgreement, setDeviceTradeAgreement] = useState([]);
    const [deviceShareStatusInfo, setDeviceShareStatusInfo] = useState([]);

    useEffect(() => {
      async function fetchData(){
        try {

        const res1 = await API.post(`/devices/`,{"deviceId":props.match.params.deviceId});
          // const res2 = await API.get('/devices/shared/tradeAgreement');
          // const res3 = await API.get('/devices/shared/shareStatus');

            setDeviceInfo(modifyDevicedata(res1.data.data));
          // setDeviceTradeAgreement(res2.data);
          // setDeviceShareStatusInfo(res3.data);
  
        }catch(error){
          console.log(error);
        }
      }
      fetchData();
    }, []);

    // useEffect(() => {
    //     setDeviceInfo(
    //         {
    //             "id": "abcd123",
    //             "owner": "AdwaitOrg",
    //             "name": "Shared Device 1",
    //             "createdOn":"Nov 1, 2020",
    //             "type": "type1",
    //             "description": "Adwait's Device 1",
    //             "lastUpdated": 5,
    //             "coverImage":"/paella.jpg",
    //             "onSale":true
    //         })

    //     setDeviceTradeAgreement(
    //         {
    //             "id":"trade3345",
    //             "price":"300"
    //         }
    //     )

    //     setDeviceShareStatusInfo(
    //         {
    //             "shared":true
    //         }
    //     )
    // }, [])

    const deviceInfoTabledData = () => {
        const keysToDisplay = ["deviceId", "owner", "description", "dataDescription", "onSale"]
        // const tradeAgreementKeysToDisplay = ["id", "price"]

        const deviceInfoTableObject = []
        for (const key of keysToDisplay) {
            deviceInfoTableObject.push({"key":key, "value":deviceInfo[key]})
        }

        // for (const key of tradeAgreementKeysToDisplay) {
        //     deviceInfoTableObject.push({"key":"Trade " + key, "value":deviceTradeAgreement[key]})
        // }

        // deviceInfoTableObject.push({"key":"Shared", "value":deviceShareStatusInfo["shared"]})

        return deviceInfoTableObject
    }
    const deviceInfoTabledColumns = () => {
        return [
            {title: '', field:'key'},
            {title: '', field:'value'}
        ]
    }


    return (
        <Layout>
            <section>
                <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                    <Table title="Device Details" data={deviceInfoTabledData()} columns={deviceInfoTabledColumns()} pageSize={10} />
                    <br/><br/>
                    <br/> <br/>
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={true}
                        size="large"
                        className={classes.button}
                        endIcon={<Icon>create</Icon>}
                        onClick={() => { window.location = "/devices/edit"}}
                    >
                        Edit Info
                    </Button> &nbsp;&nbsp;
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className={classes.button}
                        endIcon={<Icon>storage</Icon>}
                        onClick={() => { window.location = "/devices/data/" + deviceInfo["deviceId"] + "?shared=true" }}
                    >
                        View Data
                    </Button>
                </div>
            </section>
        </Layout>

    );
}
