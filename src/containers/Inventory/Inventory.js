import React, { Component } from 'react';
import { Grid ,Typography,InputBase, Divider, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, Button, IconButton} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Edit, Delete, Search } from '@material-ui/icons';
import { connect } from 'react-redux';

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
    filters:['all','utensils','fruit','vegetables','cereal','meat','grain','liquid','spice','equipment'],
    currentFilter:'all'
  }
  handleFilter= (target,name) =>{
    this.setState({
      currentFilter:name.toUpperCase()
    })

  }
  viewItem = (id)=>{
    this.props.history.push(`/viewItem/${id}`)
  }

  render() {
    const { classes } = this.props
    let inventory=null
    if(this.props.inventory){
      inventory=this.props.inventory.map((inventory,index)=>{
        return(
          <Grid key={index} item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.card} >
                  <CardActionArea
                    onClick={()=>this.viewItem(inventory.id)}>
                    <CardMedia
                      component="img"
                      alt={inventory.name}
                      className={classes.media}
                      image="/assets/tile.jpg"
                      title="Food"

                      />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {inventory.name}
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
                    <Button size="small" color="secondary">
                      <Delete/>Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>)
      })
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
                            >{filter}</Button>)
          })}
        </Grid>
        <Grid container

          justify="center"
          direction="row"
          alignItems="center">
            <Paper  xs={12} sm={6} md={6} lg={6} className={classes.root} elevation={1}>
              <InputBase className={classes.input} placeholder="Search Inventory" />
              <Divider className={classes.divider} />
              <IconButton className={classes.iconButton} aria-label="Search">
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
  inventory:state.inventory.inventory
})
export default connect(mapStateToProps)(withStyles(styles)(Inventory));
