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
  },
  '@media screen and (min-width:900px)':{
    main:{
      width:'900px',
      marginLeft:'auto',
      marginRight:'auto'
    }
  }
})
class Layout extends Component {
  state={
    active:null
  }
  handleClick =(val)=>{
    this.setState({
      active:val
    })
  }

  render () {
    const {classes}=this.props
    return (
      <React.Fragment>
        <NavBar clicked={this.handleClick} active={this.state.active}/>
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
