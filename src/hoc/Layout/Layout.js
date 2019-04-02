import React ,{ Component } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import { Grid } from '@material-ui/core';

class Layout extends Component {

  render () {
    return (
      <React.Fragment>
        <NavBar/>
        <main>
          <Grid container spacing={16}>
            {this.props.children}
          </Grid>
        </main>
      </React.Fragment>
    )
  }
}

export default Layout;
