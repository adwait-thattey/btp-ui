import React from 'react';
import { Route, BrowserRouter as Router  } from 'react-router-dom';
import Dashboard from "./containers/dashboard/dashboard";
import Marketplace from "./containers/marketplace/marketplace"
import NewDevice from "./containers/mydevices/newDevice"
import OwnedDevice from "./containers/mydevices/owned"
import SharedDevice from "./containers/mydevices/shared"
import DeviceData from "./containers/mydevices/deviceData"
import TransactionLog from "./containers/logs/logs";
import OwnedDeviceInfo from "./containers/mydevices/ownedDeviceInfo";
import SharedDeviceInfo from "./containers/mydevices/sharedDeviceInfo";
import EditTradeAgreement from "./containers/mydevices/editTradeAgreement";
import EditDevice from "./containers/mydevices/editDevice";
// import './App.css';

function App(props) {
  return (
      <React.Fragment>
        <Router>
          <Route path="/" component={Dashboard} exact/>
            <Route path="/marketplace" fetchUrl="/marketplace" component={Marketplace} exact/>
            <Route path="/transactions" component={TransactionLog} exact/>
            <Route path="/devices/owned/:deviceId/" component={OwnedDeviceInfo} exact/>
            <Route path="/devices/shared/:deviceId/" component={SharedDeviceInfo} exact/>
          <Route path="/devices/owned" component={OwnedDevice} exact/>
          <Route path="/devices/shared" component={SharedDevice} exact/>
            <Route path="/devices/new" component={NewDevice} exact/>
            <Route path="/devices/edit/:deviceId" component={EditDevice} exact/>
            <Route path="/devices/tradeagreement/:deviceId" component={EditTradeAgreement} exact/>
          <Route path="/devices/data/:deviceId" component={DeviceData} exact/>
        </Router>
      </React.Fragment>
  );
}

export default App;

