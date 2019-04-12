import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { authLogout , autoSignUp } from './store/actions/authActions';
import Inventory from './containers/Inventory/Inventory';
import AddInventory from './containers/AddInventory/AddInventory';
import InventoryItem from './containers/InventoryItem/InventoryItem';
import Auth from './containers/Auth/Auth';
class App extends Component {
  componentDidMount(){
    this.props.onAutoSignup();
  }
  render() {
    let routes=(<Switch>
                  <Route exact path='/auth' component={Auth}/>
                  <Redirect to="/auth"/>
                </Switch>)
    if(this.props.isAuthenticated){
      routes=(    <Switch>
                    <Route exact path="/inventory" component={Inventory}/>
                    <Route exact path="/addInventory" component={AddInventory}/>
                    <Route  exact path="/viewItem/:id" component={InventoryItem}/>
                    <Route exact path='/auth' component={Auth}/>
                  </Switch>)
    }
    return (
        <Layout onLogOut={this.props.onLogOut} authState={this.props.isAuthenticated}>
              {routes}
        </Layout>
    );
  }
}
const mapStateToProps = state =>({
  isAuthenticated:state.auth.idToken!==null
})
const mapDispatchToProps= dispatch =>({
  onLogOut: ()=> dispatch(authLogout()),
  onAutoSignup:()=> dispatch(autoSignUp())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
