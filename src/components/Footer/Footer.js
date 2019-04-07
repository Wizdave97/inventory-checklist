import React from 'react';
import {withStyles } from '@material-ui/core/styles';

const styles= theme => ({
  root:{
    display:'flex',
    flexWrap:'wrap',
    height:'60px',
    background:theme.palette.primary.dark
  }
})

const footer = props =>{
  const { classes }=props

  return(
    <div className={classes.root}>

    </div>
  )
}

export default withStyles(styles)(footer);
