import React ,{ Component } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const styles= theme=>({
  main:{
    minHeight:'calc(100% - 60px)',
    marginTop:'75px',
    display:'flex',
    flexWrap:'wrap',
    boxSizing:'border-box'
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
  },
  '@media screen and (min-width:602px) and (max-width:720px)':{
    main:{
      marginTop:'110px'
    }
  },
  '@media screen and (max-width:344px)':{
    main:{
      marginTop:'122px'
    }
  }
})
class Layout extends Component {
  state={
    active:0
  }
  handleClick =(val)=>{
    this.setState({
      active:val
    })
  }

  render () {
    const {classes}=this.props;
    return (
      <React.Fragment>
        <NavBar onLogOut={this.props.onLogOut}authState={this.props.authState} clicked={this.handleClick} active={this.state.active}/>
        <main className={classes.main} style={{padding:8}}>
          <Grid justify="center" container spacing={16} className={classes.container}>
            {this.props.children}
          </Grid>
        </main>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Layout);
