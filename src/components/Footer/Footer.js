import React from 'react';
import {withStyles } from '@material-ui/core/styles';


const styles= theme => ({
  root:{
    display:'flex',
    flexWrap:'wrap',
    height:'60px',
    width:'100%',
    background:theme.palette.primary.dark
  },
  '@media screen and (min-width:900px)':{
    root:{
      width:'900px',
      marginLeft:'auto',
      marginRight:'auto'
    }
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
