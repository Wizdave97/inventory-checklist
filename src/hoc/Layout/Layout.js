import React ,{ Component } from 'react';
import NavBar from '../../components/Navbar/Navbar';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';
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
  '@media screen and (min-width:602px) and (max-width:819px)':{
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
    active:0,
    showSideDrawer:false
  }
  handleClick =(val)=>{
    this.setState({
      active:val
    })
  }
  toggleSideDrawer= ()=>{
    this.setState(state=>({
      showSideDrawer:!state.showSideDrawer
    }))
  }
  render () {
    const {classes}=this.props;
    return (
      <React.Fragment>
        <NavBar onToggleSideDrawer={this.toggleSideDrawer} onLogOut={this.props.onLogOut} authState={this.props.authState} clicked={this.handleClick} active={this.state.active}/>
        {this.state.showSideDrawer?<SideDrawer onToggleSideDrawer={this.toggleSideDrawer}   onLogOut={this.props.onLogOut}/>:null}
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
