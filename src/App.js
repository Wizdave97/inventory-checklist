import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import { authLogout , autoSignUp } from './store/actions/authActions';
import asyncComponents from './hoc/asyncComponents/asyncComponents';
const asyncInventory= asyncComponents(()=>{
  return import('./containers/Inventory/Inventory');
})
const asyncAddInventory= asyncComponents(()=>{
  return import('./containers/AddInventory/AddInventory');
})
const asyncInventoryItem= asyncComponents(()=>{
  return import('./containers/InventoryItem/InventoryItem');
})
const asyncEditItem= asyncComponents(()=>{
  return import('./containers/EditItem/EditItem');
})
const asyncAuth= asyncComponents(()=>{
  return import('./containers/Auth/Auth');
})
class App extends Component {
  componentDidMount(){
    this.props.onAutoSignup();
  }
  render() {
    let routes=(<Switch>
                  <Route exact path='/auth' component={asyncAuth}/>
                  <Redirect to="/auth"/>
                </Switch>)
    if(this.props.isAuthenticated){
      routes=(    <Switch>
                    <Route exact path="/inventory" component={asyncInventory}/>
                    <Route exact path="/addInventory" component={asyncAddInventory}/>
                    <Route  exact path="/viewItem/:id" component={asyncInventoryItem}/>
                    <Route  exact path="/editItem/:id" component={asyncEditItem}/>
                    <Route exact path='/auth' component={asyncAuth}/>
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
