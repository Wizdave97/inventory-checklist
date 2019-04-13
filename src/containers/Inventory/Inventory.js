import React, { Component } from 'react';
import { Grid ,Typography,InputBase, Divider, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Edit, Delete, Search } from '@material-ui/icons';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/inventoryActions';
import Spinner from '../../components/UI/Spinner/Spinner';

const styles= theme =>({
  card:{
    width:'100%'
  },
  media:{
    height:140,
    objectFit:'cover'
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
  activeFilter:{
    color:theme.palette.secondary.light
  }
})
class Inventory extends Component {
  state={
    filters:['','utensils','fruit','vegetables','cereal','meat','grain','liquid','spice','equipment'],
    currentFilter:'',
    query:'',
  }
  componentDidMount(){
    this.props.onFetchInventory(this.props.auth.idToken,this.props.auth.localId);
  }
  handleFilter= (target,name) =>{
    this.setState({
      currentFilter:name.toLowerCase()
    })

  }
  handleSearch =(event)=>{
    this.setState({
      query:event.target.value
    })
  }
  viewItem = (id)=>{
    this.props.history.push(`/viewItem/${id}`)
  }

  render() {
    const { classes } = this.props
    let inventory=null
    let match= new RegExp(`${this.state.currentFilter}`,'gi');
    let query= new RegExp(`${this.state.query}`,'gi');
    let nowShowing=null;
    if(this.props.inventory&&this.props.inventory.length===0) {
      inventory=(
      <Typography align="center" variant="h4" color="secondary">
        Your inventory is empty start adding items by navigating to the add Inventory Page
      </Typography>)}
    if(this.props.error) {
      inventory=(
      <Typography align="center" variant="h4" color="secondary">
        A network error Occured
      </Typography>)
    }
    if(this.props.inventory) nowShowing=[...this.props.inventory];
    if (this.state.currentFilter){
      nowShowing=nowShowing.filter(([id,obj])=>{
        return match.test(obj.category)
      })
    }
    if(this.state.query){
      nowShowing=nowShowing.filter(([id,obj])=>{
        return match.test(obj.category) && query.test(obj.item_name)
      })
    }
    if(this.props.loading) inventory=<Spinner/>
    if(nowShowing){
      if(nowShowing.length!==0){
        inventory=nowShowing.map(([id,inventory])=>{
          //console.log(inventory)
          return(
            <Grid key={id} item xs={12} sm={6} md={3} lg={3}>
            <Card className={classes.card} >
                    <CardActionArea
                      onClick={()=>this.viewItem(id)}>
                      <CardMedia
                        component="img"
                        alt={inventory.item_name}
                        className={classes.media}
                        image={inventory.image_url?inventory.image_url:"/assets/placeholder.png"}
                        title="Food"

                        />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {inventory.item_name}
                        </Typography>
                        <Typography component="p">
                          Quantity <strong>{inventory.quantity} {inventory.unit}</strong>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="secondary">
                        <Edit/>Edit
                      </Button>
                      <Button size="small" color="secondary" onClick={()=>this.props.onDeleteInventory(id,this.props.auth.idToken)}>
                        <Delete/>Delete
                      </Button>
                      {this.props.deleteInventoryFail?<Typography variant='body1'>Delete failed tryagain</Typography>:''}
                    </CardActions>
                  </Card>
                </Grid>)
        })
      }

    }
    return(
      <React.Fragment>
        <Grid container

          justify="space-around"
          direction="row"
          alignItems="center">
          {this.state.filters.map(filter=>{
            return (<Button component='button'
                            key={filter}
                            variant="outlined"
                            color="default"
                            onClick={(event)=> this.handleFilter(event.target,filter)}
                            classes={this.state.currentFilter.toUpperCase()===filter.toUpperCase()?{label:classes.activeFilter}:{label:''}}
                            >{filter?filter:'all'}</Button>)
          })}
        </Grid>
        <Grid container
          justify="center"
          direction="row"
          alignItems="center">
            <Paper  xs={12} sm={6} md={6} lg={6} className={classes.root} elevation={1}>
              <InputBase value={this.state.query} onChange={(event) => this.handleSearch(event)} className={classes.input} placeholder="Search Inventory by name" />
              <Divider className={classes.divider} />
              <IconButton className={classes.iconButton} aria-label="Search Inventory by name">
                <Search />
              </IconButton>
            </Paper>
        </Grid>
        {inventory}
      </React.Fragment>
    )
  }
}
const mapStateToProps= state=>({
  inventory:state.inventory.inventory,
  loading:state.inventory.loading,
  error:state.inventory.error,
  deleteInventoryFail:state.inventory.deleteInventoryFail,
  auth:state.auth
})
const mapDispatchToProps= dispatch=>({
  onFetchInventory: (idToken,userId)=> dispatch(actions.fetchInventory(idToken,userId)),
  onDeleteInventory: (id,idToken)=>dispatch(actions.deleteInventory(id,idToken))
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Inventory));
