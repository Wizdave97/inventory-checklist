import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import {withStyles} from '@material-ui/core/styles';
import  MenuIcon  from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const styles = theme =>({
  root:{
    flexWrap:'wrap'
  },
  title:{
    flexGrow:1
  },
  button:{
    margin:theme.spacing.unit,
    '@media screen and (max-width:600px)':{
      display:'none'
    }
  },
  logo:{
    width:'60px',
    height:'54px',
    boxSizing:'border-box',
    padding:'2px'
  },
  img:{
    width:'100%',
    height:'50px'
  },
  hamburger:{
    margin:theme.spacing.unit,
    '@media screen and (min-width:600px)':{
      display:'none'
    }
  },
  '@media screen and (max-width:370px)':{
    title:{
      fontSize:'1.8em'
    }
  },
  activePage:{
    color:theme.palette.secondary.light,
    borderColor:theme.palette.secondary.light
  }

})

const navBar = props =>{
  const { classes } = props;
  let location=window.location.pathname
  return(
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        <div className={classes.logo}><img  className={classes.img} src='/assets/logo.svg' alt='inventory control'/></div>
        <Typography variant="h4" className={classes.title} color="inherit">Inventory Control</Typography>
        <Fade in={true} timeout={{enter:10,exit:10}}>
          <React.Fragment>
          <Button variant="outlined"
            classes={location==='/inventory' && props.active===0?{root:classes.activePage}:{root:''}}
            onClick={()=>props.clicked(0)}
            color='inherit'
            className={classes.button}
            component={Link}
            to="/inventory"
            size="medium">Inventory</Button>
          <Button variant="outlined"
            classes={location==='/addInventory' && props.active===1?{root:classes.activePage}:{root:''}}
            onClick={()=>props.clicked(1)}
            color='inherit'
            className={classes.button}
            component={Link}
            to="/addInventory"
            size="medium">Add Inventory</Button>
          </React.Fragment>
        </Fade>
        <IconButton className={classes.hamburger} color="secondary" aria-label="Menu">
          <MenuIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
export default withStyles(styles)(navBar);
