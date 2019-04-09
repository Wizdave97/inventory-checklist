import React, { Component } from 'react';
import formSerialize from 'form-serialize';
import { Grid, Typography, TextField, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { validityTracker } from '../../Utils/Utility';

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
   submitAuthForm = (event) =>{
     let inputs =document.querySelectorAll('input')
     for (let input of inputs){
       let validityTest= new validityTracker(input)
       validityTest.checkValidity();
     }
     if(this.state.isSignUp){
       let fpassword=document.getElementById('password')
       let cpassword= document.getElementById('passwordC')
       if(fpassword.value!==cpassword.value) {
         cpassword.setCustomValidity('passwords do not match')
       }
       else{
         cpassword.setCustomValidity('')

       }
     }

     let form=document.querySelector('form');
     let formData=formSerialize(form,{hash:true})
     let authData={...formData,returnSecureToken:true}
   }
   render(){
     const { classes } = this.props
     let form=(
       <form className={classes.form}>
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
             <Button
                onClick={(event)=> this.submitAuthForm(event)}
                type='submit'
                size='large'
                color='secondary'
                className={classes.button}
                variant='contained'
                fullWidth={true}>Login</Button>
            </form>
     )
     if(this.state.isSignUp){
       form=(
         <form className={classes.form}>
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
             <Button
                onClick={(event)=> this.submitAuthForm(event)}
                type='submit'
                size='large'
                color='secondary'
                className={classes.button}
                variant='contained'
                fullWidth={true}>Sign Up</Button>
            </form>
       )
     }
     return (
       <Grid item
         xs={12}
         sm={6}
         md={6}>


           <Typography  variant='h3'
             color='secondary'
             align="center"
             className={classes.text}
             gutterBottom>{this.state.isSignUp?"Hello, you're welcome":"Welcome Back"}</Typography>
              {form}
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


       </Grid>
     )
   }
 }
 export default withStyles(styles)(Auth);
