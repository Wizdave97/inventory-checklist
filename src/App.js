import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Inventory from './containers/Inventory/Inventory';
class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route to="/inventory" component={Inventory}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
