import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles= theme =>({
  root:{
    width:'100%',
    height:'100%',
    zIndex:1500,
    position:'absolute',
    top:0,
    opacity:0.5,
    backgroundColor:'black',
    transtion:'opacity 0.3s ease-out'
  }
})

const backDrop = ( props ) =>{
  const { classes } = props;
  return (
    <div id='back-drop' onClick={()=> props.onToggleSideDrawer()} className={classes.root}></div>
  )
}

export default withStyles(styles)(backDrop);
