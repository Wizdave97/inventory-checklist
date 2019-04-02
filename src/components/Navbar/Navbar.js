import React from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import {withStyles} from '@material-ui/core/styles';
import  MenuIcon  from '@material-ui/icons/Menu';


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
  }

})

const navBar = props =>{
  const { classes } = props;
  return(
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h4" className={classes.title} color="inherit">Kitchen Inventory</Typography>
        <Fade in={true} timeout={{enter:10,exit:10}}>
          <React.Fragment>
          <Button variant="outlined"  color="secondary" className={classes.button}  component="button" size="medium">Inventory</Button>
          <Button variant="outlined" color="secondary" className={classes.button} component="button" size="medium">Add Inventory</Button>
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
