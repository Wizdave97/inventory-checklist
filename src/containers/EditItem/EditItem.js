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
class EditItem extends Component {
  state={
    inventory:null
  }

  componentDidUpdate(){
    if(this.props.updateInventorySuccess) {
      this.props.onUpdateInventoryComplete()
      this.props.history.push('/inventory')
    }

  }
  autoFillOnMount =()=>{
    return this.props.inventory.map(([id,inventory])=>{
      if(id===this.props.match.params.id){
        this.setState({
          inventory:inventory
        })
        return
      }
    })
  }
  componentDidMount() {
    this.autoFillOnMount();
  }
  handleUnitChange= (event) =>{
    this.setState(state=>({
      inventory:{...state.inventory,unit:event.target.value}
    }))
    //console.log(this.state.unit)
  }
  handleTextFieldChange=(event,key)=>{
    event.persist();
    this.setState(state=>({
      inventory:{...state.inventory,[key]:event.target.value}
    }))
  }
  handleCategoryChange= (category)=>{
    this.setState(state=>({
      inventory:{...state.inventory,category:category}
    }))
  }
  submitHandler = (event) =>{
    event.preventDefault();
    let form =document.getElementById('inventory');
    let inventoryData= formSerialize(form,{hash:true})
    inventoryData={...inventoryData,userId:this.props.auth.localId}
    this.props.onSubmitForm(inventoryData,this.props.auth.idToken,this.props.match.params.id)
  }

  render() {
    const { inventory }= this.state
    const { classes }=this.props
    const formDisplay=(<React.Fragment>
      <Typography variant="h3"
                  gutterBottom
                  color="secondary"
                  align="center"
                  >Edit Inventory Item</Typography>
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
        value={inventory?inventory.item_name:''}
        variant="outlined"
        onChange={(event)=>this.handleTextFieldChange(event,'item_name')}
        />
        <TextField
        required
        name='quantity'
        className={classes.textField}
        label='Quantity'
        id='quantity'
        placeholder='Item Quantity'
        fullWidth={true}
        value={inventory?inventory.quantity:''}
        margin='normal'
        variant="outlined"
        onChange={(event)=>this.handleTextFieldChange(event,'quantity')}
        />
        <TextField
        required
        name='unit'
        className={classes.textField}
        select
        label='Select'
        fullWidth={true}
        margin='normal'
        value={inventory?inventory.unit:''}
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
        value={inventory?inventory.category:''}
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
        type='url'
        placeholder='Image Url'
        margin='normal'
        value={inventory?inventory.image_url:''}
        fullWidth={true}
        variant="outlined"
        onChange={(event)=>this.handleTextFieldChange(event,'image_url')}
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
    if(this.props.updateInventory){
      form_data=<Spinner/>
    }
    if (this.props.updateInventorySuccess){
      form_data=(<React.Fragment>
        {formDisplay}
        </React.Fragment>);

    }
    if(this.props.updateInventoryFail){
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
  updateInventory:state.inventory.updateInventory,
  updateInventoryFail:state.inventory.updateInventoryFail,
  updateInventorySuccess:state.inventory.updateInventorySuccess,
  inventory:state.inventory.inventory,
  auth:state.auth
})
const mapDispatchToProps = dispatch =>({
  onSubmitForm: (data,idToken,id)=>dispatch(actions.updateInventory(data,idToken,id)),
  onUpdateInventoryComplete: ()=> dispatch(actions.updateInventoryComplete())
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(EditItem));
