import React, { Component } from 'react';
import {Paper , Grid , TextField, MenuItem, Button, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({
  root:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    padding:'5',
    boxSizing:'border-box'
  },
  textField:{
    marginRight:theme.spacing.unit,
    marginLeft:theme.spacing.unit
  },
  button:{
    marginRight:theme.spacing.unit,
    marginLeft:theme.spacing.unit,
    marginBottom:theme.spacing.unit
  },
  menu:{
    width:200
  }
})
const units=['Oz','Kg','Units','Lbs']
class AddInventory extends Component {
  state={
    unit:units[0]
  }

  handleUnitChange= (unit) =>{
    this.setState({
      unit:unit
    })
    //console.log(this.state.unit)
  }

  render() {
    const { classes }=this.props
    return (
        <Grid item
          xs={12}
          sm={6}
          >
            <Paper square={true}
            color="secondary">
              <Typography variant="h3"
                          gutterBottom
                          color="secondary"
                          align="center"
                          >Add Inventory</Typography>
              <form className={classes.root}>
                <TextField
                className={classes.textField}
                label='Name'
                name='name'
                autoComplete='name'
                id='itemName'
                defaultValue='Item Name'
                fullWidth={true}
                margin='normal'
                variant="outlined"
                />
                <TextField
                className={classes.textField}
                label='Quantity'
                id='quantity'
                defaultValue='Item Quantity'
                fullWidth={true}
                margin='normal'
                variant="outlined"
                />
                <TextField
                className={classes.textField}
                select
                label='Select'
                fullWidth={true}
                margin='normal'
                value={this.state.unit}
                SelectProps={{
                  MenuProps:{
                    className:classes.menu
                  }
                }}
                helperText="Please select your currency"
                variant="outlined"
                onChange={(event)=>this.handleUnitChange(event.target.value)}
                >
                {units.map(unit=>{
                  return(<MenuItem key={unit} value={unit}>
                          {unit}
                          </MenuItem>)
                })}
                </TextField>
                <TextField
                className={classes.textField}
                label='Image Url'
                defaultValue='Image Url'
                margin='normal'
                fullWidth={true}
                variant="outlined"
                />
                <Button
                  className={classes.button}
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth={true}
                  >Submit</Button>
              </form>
            </Paper>
          </Grid>
    )
  }
}
export default withStyles(styles)(AddInventory);
