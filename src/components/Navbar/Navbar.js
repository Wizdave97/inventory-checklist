import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { MenuIcon } from '@material-ui/icons'


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
  menuicon:{
    '@media screen and (min-width:600px)':{
      display:'none'
    }
  }

})

const navBar = props =>{
  const { classes } = props;
  return(
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="display1" className={classes.title} color="inherit">Kitchen Inventory</Typography>
        <Button variant="outlined"  color="secondary" className={classes.button}  component="button" size="medium">Inventory</Button>
        <Button variant="outlined" color="secondary" className={classes.button} component="button" size="medium">Add Inventory</Button>
        <MenuIcon className={classes.menuicon}/>
      </Toolbar>
    </AppBar>
  )
}
export default withStyles(styles)(navBar);
