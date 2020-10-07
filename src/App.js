import React from 'react';
import { Route, BrowserRouter as Router  } from 'react-router-dom';
import Dashboard from "./containers/dashboard/dashboard";
// import './App.css';

function App(props) {
  return (
      <React.Fragment>
        <Router>
          <Route path="/dashboard" component={Dashboard} exact/>
        </Router>
      </React.Fragment>
  );
}

export default App;

