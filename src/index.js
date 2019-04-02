import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';


const theme = createMuiTheme({
  overrides:{
    MuiButton:{
      text:{
        color:'black',
        background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      }
    },
  },
  typography: {
    useNextVariants: true,
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
    }
  }
})
ReactDOM.render(<MuiThemeProvider theme={theme}>
                    <App />
                  </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
