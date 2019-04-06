import React, { Component } from 'react';
import { Grid, Typography,Card, CardActionArea, CardMedia, CardContent, CardActions,Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AddCircle, RemoveCircle} from '@material-ui/icons';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/inventoryActions';
import * as actionTypes from '../../store/actions/actionTypes';

const styles = theme =>({
  root:{
    display:'flex',
    flexWrap:'wrap',
    width:'100%'
  },
  card:{
    width:'100%'
  },
  media:{
    height:200,
    objectFit:'cover'
  },
  '@media screen and (min-width:576px)':{
    itemContainer: {
      width:'50%'
    }
  }
})

class InventoryItem extends Component {
  state={
    inventoryItem:null,
    loading:true
  }

  updateState=()=>{
    let id =Number(this.props.match.params.id)
    for (let inventory of this.props.inventory){
      if(inventory.id===id){
        this.setState({
          inventoryItem:inventory,
          loading:false
        })
        break;
      }
    }
  }
  componentDidMount(){
    this.updateState()
  }

  handleAddQuantity =()=>{
    this.props.onIncreaseQuantity(actionTypes.INCREASE_QUANTITY,this.props.match.params.id)
    this.updateState();
  }
  handleDecreaseQuantity =() =>{
    this.props.onDecreaseQuantity(actionTypes.DECREASE_QUANTITY,this.props.match.params.id)
    this.updateState();
  }

  render(){
    const { classes } = this.props
    let { inventoryItem,loading } = this.state
    let item=null;
    if (loading) item=<Spinner/>
    if(!loading){
      item=(<Card className={classes.card} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={inventoryItem.name}
                  className={classes.media}
                  image="/assets/tile.jpg"
                  title="Food"
                  />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {inventoryItem.name}
                  </Typography>
                  <Typography component="p">
                    Quantity <strong>{inventoryItem.quantity} {inventoryItem.unit}</strong>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary"  onClick={()=> this.handleDecreaseQuantity()}>
                  <RemoveCircle/><Typography variant="srOnly">Remove</Typography>
                </Button>
                <Button size="small" color="secondary" onClick={()=> this.handleAddQuantity()}>
                  <AddCircle/><Typography variant="srOnly">Add</Typography>
                </Button>
              </CardActions>
            </Card>

      )
    }
    return(
      <Grid item
            xs={12}
            sm={8}
            md={8}>
              {item}
      </Grid>
    )
  }
}
const mapStateToProps= state =>({
  inventory:state.inventory.inventory
})
const mapDispatchToProps = dispatch =>({
  onIncreaseQuantity: (type,id)=> dispatch(actions.increaseQuantity(type,id)),
  onDecreaseQuantity: (type,id)=> dispatch(actions.decreaseQuantity(type,id))
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(InventoryItem));
