import React, { Component } from 'react';
import { Grid ,Typography, Paper, Card, CardActionArea, CardMedia, CardContent, CardActions, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Edit, Delete } from '@material-ui/icons'

const styles= theme =>({
  card:{
    width:'100%'
  },
  media:{
    height:140
  }
})
class Inventory extends Component {
  state={
    filters:['utensils','fruit','vegetables','cereal','meat','grain','liquid','spice','equipment'],
    inventory:[
      {
        name:'Bannana',
        quantity:300,
        unit:'Oz',
        category:'fruit'
      },
      {
        name:'Bannana',
        quantity:300,
        unit:'Oz',
        category:'fruit'
      },
      {
        name:'Bannana',
        quantity:300,
        unit:'Oz',
        category:'fruit'
      },
      {
        name:'Bannana',
        quantity:300,
        unit:'Oz',
        category:'fruit'
      },
    ]
  }

  render() {
    const { classes } = this.props
    let inventory=null
    if(this.state.inventory){
      inventory=this.state.inventory.map(inventory=>{
        return(
          <Grid item xs={12} sm={6} md={3} lg={3}>
          <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="./src/assets/test.jpg"
                      title="Food"
                      />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {inventory.name}
                      </Typography>
                      <Typography component="p">
                        Bananas are high in iron content and very nutritious
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
          sm={12}
          lg={12}
          md={12}
          justify="space-around"
          direction="row"
          alignItems="center">
          {this.state.filters.map(filter=>{
            return <Button key={filter} variant="outlined" color="default">{filter}</Button>
          })}
        </Grid>
        {inventory}
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Inventory);
