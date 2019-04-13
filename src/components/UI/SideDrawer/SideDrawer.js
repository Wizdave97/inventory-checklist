import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Paper, MenuList, MenuItem, Fade} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import BackDrop from '../BackDrop/BackDrop';

const  styles =theme=>({
  root:{
    minHeight:'100%',
    position:'absolute',
    width:'50%',
    zIndex:2000,
    top:0,
    right:0,
    transition:'width 0.3s ease-out'
  },
  link:{
    textDecoration:'none',
    color:theme.palette.primary.dark
  },
  activePage:{
    color:theme.palette.secondary.light,
  },
  '@media screen and (min-width:599px)':{
    root:{
      display:'none'
    }
  }
})

const SideDrawer = ( props ) =>{
  const { classes } = props
  let location=window.location.pathname
  return(
    <React.Fragment>
      <Fade in={true} timeout={{enter:10,exit:10}}>
      <React.Fragment>
      <BackDrop onToggleSideDrawer={props.onToggleSideDrawer} />
      <Paper id='side-drawer' className={classes.root} square={true}>
        <MenuList>
          <MenuItem onClick={()=> props.onToggleSideDrawer()}><Clear/></MenuItem>
          <NavLink className={classes.link} to='/inventory'>
          <MenuItem
            classes={location==='/inventory'?{root:classes.activePage}:{root:''}}
          >Inventory</MenuItem></NavLink>
          <NavLink className={classes.link} to='/addInventory'>
          <MenuItem
            classes={location==='/addInventory'?{root:classes.activePage}:{root:''}}
          >Add Inventory</MenuItem></NavLink>
          <MenuItem className={classes.link} onClick={()=> props.onLogOut()}>Log Out</MenuItem>
        </MenuList>
      </Paper>
      </React.Fragment>
      </Fade>
    </React.Fragment>
  )
}

export default withStyles(styles)(SideDrawer)
