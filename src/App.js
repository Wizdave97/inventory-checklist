import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Inventory from './containers/Inventory/Inventory';
class App extends Component {
  render() {
    return (
      <Layout>
        <Inventory/>
      </Layout>
    );
  }
}

export default App;
