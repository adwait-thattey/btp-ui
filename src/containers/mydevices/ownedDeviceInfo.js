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
const modifyTradeAgreementdata = incomingdata => {
    incomingdata.id = incomingdata.tradeId
    incomingdata.price = incomingdata.tradePrice
    incomingdata["Revoke Time"] = incomingdata.revoke_time
    return incomingdata
}
export default function OwnedDeviceInfo(props) {
  const classes = useStyles();
  const [deviceInfo, setDeviceInfo] = useState({});
  // const [devicePrivateInfo, setDevicePrivateInfo] = useState({});
  // const [deviceTradeAgreement, setDeviceTradeAgreement] = useState({});
  const [deviceSharedInfo, setDeviceSharedInfo] = useState([]);

  useEffect(() => {
    async function fetchData(){
      try {
    
        const res1 = await API.post(`/devices/`,{"deviceId":props.match.params.deviceId});
        // const res2 = await API.get('/devices/owned/private');
        // const res3 = await API.post(`/devices/tradeagreement`,{"tradeId":"trade" + props.match.params.deviceId});
        // const res4 = await API.get('/devices/owned/shareStatus');
    
        setDeviceInfo(modifyDevicedata(res1.data.data));
        // setDevicePrivateInfo(res2.data);
        // setDeviceTradeAgreement(modifyTradeAgreementdata(res3.data.data));
        // setDeviceSharedInfo(res4.data);

      }catch(error){
        console.log(error);
      }
    }
    fetchData();

/*      setDevicePrivateInfo(
          {
              "deviceSecret":"devicepass"
          }
      )*/

/*      setDeviceTradeAgreement(
          {
              "id":"trade3345",
              "price":"300"
          }
      )*/
      setDeviceSharedInfo(
          [
              {
                  "target":"Org2MSP",
                  "status":"shared",
                  "endTime":"18 Dec 2020 6:30 PM"
              },
              {
                  "target":"Org3MSP",
                  "status":"pending",
                  "endTime":"18 Dec 2020 6:30 PM"
              },
              {
                  "target":"Org1MSP",
                  "status":"pending",
                  "endTime":"18 Dec 2020 6:30 PM"
              }
          ]

      )
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




  // }, [])
const changeOnSale = async (on_sale) => {
    const res1 = await API.post(`/devices/`,{"deviceId":props.match.params.deviceId});
    const deviceData = res1.data.data
    const updateData = {
        deviceId:deviceData.deviceId,
        description: deviceData.description,
        on_sale:on_sale
    }
    const res2 = await API.post(`/devices/update`,updateData);
    window.location = `/devices/owned/${updateData.deviceId}`;
}

  const sharedInfoWithActions = () => {
      const completeSharedInfo = [...deviceSharedInfo]
      for (const info of completeSharedInfo){
          if (info.status === "pending"){
              info["actions"] = <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  endIcon={<Icon>check</Icon>}
                  // onClick={() => { }
              >
                  Approve
              </Button>
          }
          else {
              info["actions"] = ""
          }
      }

      return completeSharedInfo
  }

  const deviceInfoTabledData = () => {
      const keysToDisplay = ["deviceId", "owner", "description", "dataDescription"]
      // const privateKeysToDisplay = ["deviceSecret",]
      // const tradeAgreementKeysToDisplay = ["id", "price", "Revoke Time"]

      const deviceInfoTableObject = []
      for (const key of keysToDisplay) {
          deviceInfoTableObject.push({"key":key, "value":deviceInfo[key]})
      }

/*
      for (const key of privateKeysToDisplay) {
          deviceInfoTableObject.push({"key":key, "value":devicePrivateInfo[key]})
      }
*/


      // for (const key of tradeAgreementKeysToDisplay) {
      //     deviceInfoTableObject.push({"key":"Trade " + key, "value":deviceTradeAgreement[key]})
      // }

      const onSaleVal = deviceInfo["onSale"]
      console.log(deviceInfo)
      if (onSaleVal !== undefined) {
          const onSaleToggleButton = <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              endIcon={<Icon>cached</Icon>}
              onClick={() => {
                  changeOnSale(!onSaleVal)
              }}
          >
              {onSaleVal.toString()}
          </Button>
          deviceInfoTableObject.push({"key": "On Sale", "value": onSaleToggleButton})
      }
      return deviceInfoTableObject
  }
  const deviceInfoTabledColumns = () => {
      return [
          {title: '', field:'key'},
          {title: '', field:'value'}
      ]
  }

  const sharedInfoColumns = () => {
      return [
          {title: 'Target', field:'target'},
          {title: 'Status', field:'status'},
          {title: 'End Time', field:'endTime'},
          {title: 'Actions', field:'actions'},
      ]
  }

  return (
      <Layout>
          <section>
              <div style={ {width: '75%', textAlign:'center', marginLeft:'150px', marginBottom:'50px'}}>
                  Pending Work on private data, Trade Agreement, Sharing Details
                  <Table title="Device Details" data={deviceInfoTabledData()} columns={deviceInfoTabledColumns()} pageSize={10} />
                  <br/><br/>
                  <Table title="Sharing Details" data={sharedInfoWithActions()} columns={sharedInfoColumns()}  />
                  <br/> <br/>
                  <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                      endIcon={<Icon>create</Icon>}
                      onClick={() => { window.location = `/devices/edit/${props.match.params.deviceId}`}}
                  >
                      Edit Info
                  </Button> &nbsp;&nbsp;
                  <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                      endIcon={<Icon>create</Icon>}
                      onClick={() => { window.location = `/devices/tradeagreement/${props.match.params.deviceId}`}}
                  >
                      Add Trade Agreement
                  </Button> &nbsp;&nbsp;
                  <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      className={classes.button}
                      endIcon={<Icon>storage</Icon>}
                      onClick={() => { window.location = "/devices/data/" + deviceInfo["deviceId"] }}
                  >
                      View Data
                  </Button>
              </div>
          </section>
      </Layout>

  );
}
