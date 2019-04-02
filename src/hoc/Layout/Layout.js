import React ,{ Component } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles= theme=>({
  main:{
    minHeight:'calc(100% - 234px)',
    marginTop:'20px',
    display:'flex',
    flexWrap:'wrap'
  },
  container:{
    height:'100%'
  }
})
class Layout extends Component {

  render () {
    const {classes}=this.props
    return (
      <React.Fragment>
        <NavBar/>
        <main className={classes.main} style={{padding:8}}>
          <Grid container spacing={16} className={classes.container}>
            {this.props.children}
          </Grid>
        </main>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Layout);
