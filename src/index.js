import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore,combineReducers, compose, applyMiddleware } from 'redux';
import { HashRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import { authReducer, inventoryReducer } from './store/reducers';
import { red } from '@material-ui/core/colors';


const rootReducer=combineReducers({
  auth:authReducer,
  inventory:inventoryReducer
})
const composeEnhancers = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
const theme = createMuiTheme({
  overrides:{
    MuiButton:{
      text:{
        color:'black',
        background:'white'
      }
    },
  },
  typography: {
    useNextVariants: true
  },
  spacing:{
    unit:8
  },
  palette:{
    type:'light',
    primary:{
      main:'#fafafa'
    },
    secondary:{
      main:'#ff8f00'
    },
    error:{
      main:red[500]
    }
  }
})
ReactDOM.render(
                  <Provider store={store}>
                  <HashRouter>
                      <MuiThemeProvider theme={theme}>
                        <App  />
                      </MuiThemeProvider>
                  </HashRouter>
                </Provider>
              , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
