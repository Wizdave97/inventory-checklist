import React, { Component } from 'react';
import formSerialize from 'form-serialize';
import { Redirect } from 'react-router-dom';
import { Grid, Typography, TextField, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { hasError, showError, removeError} from '../../Utils/Utility';
import Spinner from '../../components/UI/Spinner/Spinner';

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
    },
    error:{
      boxShadow:`0px 8px 15px ${theme.palette.error}`
    }
})
const emailPattern=`^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`

let email=null,password=null
 class Auth extends Component {
   state={
     isSignUp:false

   }

   componentDidMount() {
     window.addEventListener('DOMContentLoaded',function(){
       document.addEventListener('blur',this.validityChecker,true)
     })
   }
   validityChecker= (e) =>{
     let errorStatus=hasError(e.target)
     if(errorStatus) showError(e.target,errorStatus)
     if(!errorStatus) removeError(e.target)
   }
   componentDidUpdate(prevProps,prevState){
     email=document.getElementById('email');
     password=document.getElementById('password');
     if(prevState.isSignUp!==this.state.isSignUp) document.addEventListener('blur',this.validityChecker,true)

   }
   switchAuthModeHandler =() =>{
       this.setState(state=>({
         isSignUp:!state.isSignUp
     }))
   }

   submitAuthForm = (event) =>{
     event.preventDefault();
     let form=document.querySelector('form');
     let formData=formSerialize(form,{hash:true})
     let authData={...formData,returnSecureToken:true}
     console.log(authData)
     if(!form.checkValidity()){
       let inputs =Array.from(document.querySelectorAll('input'))
       for(let input of inputs){
         let errorStatus=hasError(input)
         if(errorStatus) showError(input,errorStatus)
         if(!errorStatus) removeError(input)
       }
       for(let input of inputs ){
         if(hasError(input)) {
           input.focus()
           break;
         }
       }
     }
     if(form.checkValidity()) this.props.onSubmitForm(authData,this.state.isSignUp)
   }
   render(){
     const { classes } = this.props
     const form=(
       <form className={classes.form} noValidate={true} onSubmit={(event)=> this.submitAuthForm(event)}>
           <TextField
             className={classes.textField}
             classes={email?email.classList.contains('error')?{root:classes.error}:{root:''}:{}}
             required
             label='Email'
             name='email'
             id='email'
             type='email'
             placeholder="example@gmail.com"
             autoComplete='email'
             fullWidth={true}
             margin='normal'
             inputProps={{
               pattern:emailPattern
             }}
             variant='outlined'/>

             <TextField
               className={classes.textField}
               classes={password?password.classList.contains('error')?{root:classes.error}:{root:''}:{}}
               required
               type='password'
               label='Password'
               name='password'
               id='password'
               placeholder="Password"
               autoComplete='password'
               fullWidth={true}
               margin='normal'
               inputProps={{
                 minLength:8
               }}
               variant='outlined'/>

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
                      className={classes.button}
                      onClick={()=> this.switchAuthModeHandler()}
                      size='small'
                      color='secondary'
                      variant='outlined'>
                      {this.state.isSignUp?'Login':'Signup'}
                    </Button></Typography>
              </form>

     )
     let formDisplay=form
     if(this.props.loading){
       formDisplay=<Spinner/>
     }
     if(this.props.error){
       formDisplay=(<React.Fragment><Typography align='center'>{this.props.error}</Typography>{form}</React.Fragment>)
     }
     return (
       <React.Fragment>
         {this.props.isAuthenticated?<Redirect to='/inventory'/>:''}
       <Grid item
         xs={12}
         sm={6}
         md={6}>

           <Typography  variant='h3'
             color='secondary'
             align="center"
             className={classes.text}
             gutterBottom>{this.state.isSignUp?"Hello, you're welcome":"Welcome Back"}</Typography>
            {formDisplay}
       </Grid>
     </React.Fragment>
     )
   }
 }
 const mapStateToProps = state=>({
   loading:state.auth.loading,
   error:state.auth.error,
   isAuthenticated:state.auth.idToken!==null
 })
 const mapDispatchToProps= dispatch=>({
   onSubmitForm:(authData,isSignUp)=> dispatch(actions.auth(authData,isSignUp))
 })
 export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Auth));
