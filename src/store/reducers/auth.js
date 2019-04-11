import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initalState={
  idToken:null,
  localId:null,
  loading:false,
  error:null
}

const authSuccess= (state,action) =>{
  return updateObject(state,{idToken:action.value.idToken,localId:action.value.localId,loading:false})
}
const authFail = (state,action) =>{
  if(action.value.error){
    switch(action.error.message){
      case 'EMAIL_EXISTS': return updateObject(state,{error:'This email exists on our servers already',loading:false})
      case 'INVALID_EMAIL': return updateObject(state,{error:'The email provided is invalid',loading:false})
      default: return state
    }
  }
  else{
    return updateObject(state,{error:'A network error occured, please retry',loading:false})
  }
}

const reducer = (state=initalState,action)=>{
  switch(action.type){
    case actionTypes.AUTH_START : return updateObject(state,{loading:true})
    case actionTypes.AUTH_SUCCESS: return authSuccess(state,action)
    case actionTypes.AUTH_FAIL: return authFail(state,action)
    default:  return state
  }

}

export default reducer;
