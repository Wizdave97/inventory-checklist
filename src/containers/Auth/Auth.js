import React, { Component } from 'react';
import formSerialize from 'form-serialize';
import { Grid, Typography, TextField, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles= theme =>({
  form:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    padding:'5px',
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
    text:{
      marginLeft:'auto',
      marginRight:'auto'
    }
})
 class Auth extends Component {
   state={
     isSignUp:false
   }

   switchAuthModeHandler =() =>{
       this.setState(state=>({
         isSignUp:!state.isSignUp
     }))
   }
   render(){
     const { classes } = this.props
     let form=(
       <React.Fragment>
         <TextField
           className={classes.textField}
           required
           label='Email'
           name='email'
           id='email'
           placeholder="example@gmail.com"
           autoComplete='email'
           fullWidth={true}
           margin='normal'
           variant='outlined'/>
           <TextField
             className={classes.textField}
             required
             type='password'
             label='Password'
             name='password'
             id='password'
             placeholder="Password"
             autoComplete='password'
             fullWidth={true}
             margin='normal'
             variant='outlined'/>
       </React.Fragment>
     )
     if(this.state.isSignUp){
       form=(
         <React.Fragment>
           <TextField
             className={classes.textField}
             required
             label='Name'
             name='name'
             id='fullname'
             placeholder="Full Name"
             autoComplete='name'
             fullWidth={true}
             margin='normal'
             variant='outlined'/>
           <TextField
             className={classes.textField}
             required
             label='Email'
             name='email'
             id='email'
             placeholder="example@gmail.com"
             autoComplete='email'
             fullWidth={true}
             margin='normal'
             variant='outlined'/>
           <TextField
             className={classes.textField}
             required
             type='password'
             label='Password'
             name='password'
             id='password'
             placeholder="Password"
             autoComplete='password'
             fullWidth={true}
             margin='normal'
             variant='outlined'/>
           <TextField
             className={classes.textField}
             required
             type='password'
             label='Confirm Password'
             name='password'
             id='passwordC'
             autoComplete='password'
             fullWidth={true}
             margin='normal'
             variant='outlined'/>
          </React.Fragment>
       )
     }
     return (
       <Grid item
         xs={12}
         sm={6}
         md={6}>

         <form className={classes.form}>
           <Typography  variant='h3'
             color='secondary'
             align="center"
             className={classes.text}
             gutterBottom>{this.state.isSignUp?"Hello, you're welcome":"Welcome Back"}</Typography>
              {form}
           <Button
              type='submit'
              size='large'
              color='secondary'
              className={classes.button}
              variant='contained'
              fullWidth={true}>{this.state.isSignUp?'Sign Up':'Login'}</Button>
            <Typography
              className={classes.text}
              align='center'
              variant='body1'
              >
              {this.state.isSignUp? 'Already a member?':'Not a member?'}
              <Button
                onClick={()=> this.switchAuthModeHandler()}
                size='small'
                color='secondary'
                variant='outlined'>
                {this.state.isSignUp?'Login':'Signup'}
              </Button></Typography>
         </form>

       </Grid>
     )
   }
 }
 export default withStyles(styles)(Auth);
