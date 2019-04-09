import React, { Component } from 'react';
import {Paper , Grid , TextField, MenuItem, Button, Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import formSerialize from 'form-serialize';
import { connect } from 'react-redux';
import  * as actions from '../../store/actions/inventoryActions';
import Spinner from '../../components/UI/Spinner/Spinner';


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
const categories=['utensils','fruit','vegetables','cereal','meat','grain','liquid','spice','equipment']
class AddInventory extends Component {
  state={
    unit:units[0],
    category:categories[0]
  }
  componentDidUpdate(){
    if(this.props.addInventorySuccess) {
      this.props.onAddInventoryComplete()
      this.props.history.push('/inventory')
    }

  }

  handleUnitChange= (event) =>{
    event.preventDefault();
    this.setState({
      unit:event.target.value
    })
    //console.log(this.state.unit)
  }
  handleCategoryChange= (category)=>{
    this.setState({
      category:category
    })
  }
  submitHandler = (event) =>{
    event.preventDefault();
    let form =document.getElementById('inventory');
    let inventoryData= formSerialize(form,{hash:true})
    this.props.onSubmitForm(inventoryData)
  }

  render() {

    const { classes }=this.props
    const formDisplay=(<React.Fragment>
      <Typography variant="h3"
                  gutterBottom
                  color="secondary"
                  align="center"
                  >Add Inventory</Typography>
                <form id='inventory' action="" className={classes.root} onSubmit={(event)=>this.submitHandler(event)}>
        <TextField
        required
        className={classes.textField}
        label='Item Name'
        id='itemName'
        name='item_name'
        placeholder='Item Name'
        fullWidth={true}
        margin='normal'
        variant="outlined"
        />
        <TextField
        required
        name='quantity'
        className={classes.textField}
        label='Quantity'
        id='quantity'
        placeholder='Item Quantity'
        fullWidth={true}
        margin='normal'
        variant="outlined"
        />
        <TextField
        required
        name='unit'
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
        onChange={(event)=>this.handleUnitChange(event)}
        >
        {units.map(unit=>{
          return(<MenuItem key={unit} value={unit}>
                  {unit}
                  </MenuItem>)
        })}
        </TextField>
        <TextField
        required
        name='category'
        className={classes.textField}
        select
        label='Select'
        fullWidth={true}
        margin='normal'
        value={this.state.category}
        SelectProps={{
          MenuProps:{
            className:classes.menu
          }
        }}
        helperText="Please select category"
        variant="outlined"
        onChange={(event)=>this.handleCategoryChange(event.target.value)}
        >
        {categories.map(category=>{
          return(<MenuItem key={category} value={category}>
                  {category}
                  </MenuItem>)
        })}
        </TextField>
        <TextField
        name='image_url'
        className={classes.textField}
        label='Image Url'
        placeholder='Image Url'
        margin='normal'
        fullWidth={true}
        variant="outlined"
        />
        <Button
          type='submit'
          className={classes.button}
          color="secondary"
          variant="contained"
          size="large"
          fullWidth={true}
          >Submit</Button>
      </form>
    </React.Fragment>)
    let form_data=formDisplay
    if(this.props.addInventory){
      form_data=<Spinner/>
    }
    if (this.props.addInventorySuccess){
      form_data=(<React.Fragment>
        {formDisplay}
        </React.Fragment>);

    }
    if(this.props.addInventoryFail){
      form_data=(<React.Fragment>
        <Typography variant='h5' color='error'>An Error occured while submitting the form</Typography>
        {formDisplay}
      </React.Fragment>)
    }
    //console.log(this.props.match)
    return (
        <Grid item
          xs={12}
          sm={6}
          >
            <Paper square={true}
            color="secondary">
                {form_data}
            </Paper>
          </Grid>
    )
  }
}
const mapStateToProps= state=>({
  addInventory:state.inventory.addInventory,
  addInventoryFail:state.inventory.addInventoryFail,
  addInventorySuccess:state.inventory.addInventorySuccess
})
const mapDispatchToProps = dispatch =>({
  onSubmitForm: (data)=>dispatch(actions.addInventory(data)),
  onAddInventoryComplete: ()=> dispatch(actions.addInventoryComplete())
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(AddInventory));
