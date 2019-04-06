import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Inventory from './containers/Inventory/Inventory';
import AddInventory from './containers/AddInventory/AddInventory';
import InventoryItem from './containers/InventoryItem/InventoryItem';
class App extends Component {
  render() {
    return (
      <Layout>
              <Switch>
                  <Route exact path="/inventory" component={Inventory}/>
                  <Route exact path="/addInventory" component={AddInventory}/>
                  <Route  path="/viewItem/:id" component={InventoryItem}/>
              </Switch>
        </Layout>
    );
  }
}

export default App;
